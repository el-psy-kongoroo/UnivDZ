/* ================================================
   UnivDZ – Application Logic
   ================================================ */

// ── State ────────────────────────────────────────────────────
const state = {
  query: '',
  filters: {
    wilayas:  new Set(),   // wilaya names
    types:    new Set(),   // formation types
    bacTypes: new Set(),   // 'S' | 'M' | 'MT'
    maxAvg:   20
  },
  currentTab: 'map',
  formationsView: 'grid',
  universityView: 'grid',
  map: null,
  markers: {}
};

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  buildCityFilter();
  buildTypeFilter();
  setupEvents();
  renderFormations();
  renderUniversities();
  updateStats();
});

// ============================================================
//  MAP
// ============================================================
function initMap() {
  state.map = L.map('map', {
    center: [28.5, 2.6],
    zoom: 5,
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(state.map);

  universities.forEach(u => {
    const icon = L.divIcon({
      className: '',
      html: `<div class="custom-marker-div" id="mk-${u.id}">${u.shortName}</div>`,
      iconAnchor: [0, 0]
    });

    const marker = L.marker([u.lat, u.lng], { icon })
      .bindPopup(buildPopupHtml(u), { maxWidth: 280 })
      .addTo(state.map);

    state.markers[u.id] = marker;
  });
}

function buildPopupHtml(u) {
  const count = u.formations.length;
  return `
    <div class="map-popup">
      <div class="popup-short">${u.shortName}</div>
      <h4>${u.name}</h4>
      <p><i class="fas fa-map-marker-alt" style="color:#d4211a"></i>
         ${u.city}, Wilaya de ${u.wilaya}</p>
      <p><i class="fas fa-book-open" style="color:#1a7f5a"></i>
         ${count} formation${count !== 1 ? 's' : ''} disponible${count !== 1 ? 's' : ''}</p>
      <button class="popup-btn" onclick="showUniversityModal(${u.id})">
        <i class="fas fa-info-circle"></i> Voir détails
      </button>
    </div>`;
}

function refreshMarkers(visibleIds) {
  const visible = new Set(visibleIds);
  universities.forEach(u => {
    const el = document.getElementById(`mk-${u.id}`);
    if (!el) return;
    if (visible.has(u.id)) {
      el.classList.remove('dimmed');
      state.markers[u.id].setOpacity(1);
    } else {
      el.classList.add('dimmed');
      state.markers[u.id].setOpacity(0.25);
    }
  });
}

function flyToUniversity(univId) {
  const u = universities.find(x => x.id === univId);
  if (!u || !state.map) return;
  switchTab('map');
  state.map.flyTo([u.lat, u.lng], 13, { duration: 1.2 });
  setTimeout(() => state.markers[univId].openPopup(), 1300);
}

// ============================================================
//  TABS
// ============================================================
function switchTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  document.querySelectorAll('.tab-content').forEach(p => p.classList.toggle('active', p.id === `tab-${name}`));
  state.currentTab = name;
  if (name === 'map') setTimeout(() => state.map && state.map.invalidateSize(), 80);
}

// ============================================================
//  FILTER BUILDERS
// ============================================================
function buildCityFilter() {
  const wilayas = [...new Set(universities.map(u => u.wilaya))].sort();
  const list = document.getElementById('cityList');
  list.innerHTML = wilayas.map(w => {
    const n = universities.filter(u => u.wilaya === w).length;
    return `
      <label>
        <input type="checkbox" name="wilaya" value="${w}" onchange="handleWilayaChange()"/>
        <span>${w}</span>
        <span class="checkbox-count">(${n})</span>
      </label>`;
  }).join('');
}

function buildTypeFilter() {
  const types = [...new Set(formations.map(f => f.type))].sort();
  const list = document.getElementById('typeList');
  list.innerHTML = types.map(t => {
    const n = formations.filter(f => f.type === t).length;
    return `
      <label>
        <input type="checkbox" name="ftype" value="${t}" onchange="handleTypeChange()"/>
        <span>${t}</span>
        <span class="checkbox-count">(${n})</span>
      </label>`;
  }).join('');
}

// ============================================================
//  EVENT WIRING
// ============================================================
function setupEvents() {
  // Search input
  const inp = document.getElementById('searchInput');
  inp.addEventListener('input', e => { state.query = e.target.value.toLowerCase().trim(); applyFilters(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') applyFilters(); });
  document.getElementById('searchBtn').addEventListener('click', applyFilters);

  // Bac checkboxes
  document.querySelectorAll('input[name="bac"]').forEach(cb => {
    cb.addEventListener('change', () => {
      state.filters.bacTypes.clear();
      document.querySelectorAll('input[name="bac"]:checked').forEach(c => state.filters.bacTypes.add(c.value));
      applyFilters();
    });
  });

  // Average slider
  const slider = document.getElementById('avgFilter');
  slider.addEventListener('input', () => {
    state.filters.maxAvg = parseFloat(slider.value);
    document.getElementById('avgValue').textContent = parseFloat(slider.value).toFixed(2);
    applyFilters();
  });

  // Reset
  document.getElementById('resetFilters').addEventListener('click', resetFilters);

  // City sub-search
  document.getElementById('citySearch').addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('#cityList label').forEach(lbl => {
      lbl.style.display = lbl.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });

  // Tab clicks
  document.querySelectorAll('.tab').forEach(t => {
    t.addEventListener('click', () => switchTab(t.dataset.tab));
  });
}

function handleWilayaChange() {
  state.filters.wilayas.clear();
  document.querySelectorAll('input[name="wilaya"]:checked').forEach(c => state.filters.wilayas.add(c.value));
  applyFilters();
}

function handleTypeChange() {
  state.filters.types.clear();
  document.querySelectorAll('input[name="ftype"]:checked').forEach(c => state.filters.types.add(c.value));
  applyFilters();
}

// ============================================================
//  FILTER TOGGLE (sidebar sections)
// ============================================================
function toggleFilter(section) {
  const body  = document.getElementById(`filter-${section}`);
  const arrow = document.getElementById(`arrow-${section}`);
  body.classList.toggle('open');
  arrow.classList.toggle('open');
}

// ============================================================
//  RESET
// ============================================================
function resetFilters() {
  state.query = '';
  state.filters.wilayas.clear();
  state.filters.types.clear();
  state.filters.bacTypes.clear();
  state.filters.maxAvg = 20;

  document.getElementById('searchInput').value = '';
  document.querySelectorAll('input[name="wilaya"]').forEach(c => { c.checked = false; });
  document.querySelectorAll('input[name="ftype"]').forEach(c => { c.checked = false; });
  document.querySelectorAll('input[name="bac"]').forEach(c => { c.checked = false; });
  document.getElementById('avgFilter').value = 20;
  document.getElementById('avgValue').textContent = '20.00';
  document.getElementById('citySearch').value = '';
  document.querySelectorAll('#cityList label').forEach(l => { l.style.display = ''; });

  applyFilters();
}

// ============================================================
//  FILTER & RENDER PIPELINE
// ============================================================
function applyFilters() {
  const filteredF = getFilteredFormations();
  const filteredU = getFilteredUniversities(filteredF);

  renderFormations(filteredF);
  renderUniversities(filteredU);
  refreshMarkers(filteredU.map(u => u.id));
  updateCounts(filteredF, filteredU);
}

function getFilteredFormations() {
  const { query, filters } = state;
  return formations.filter(f => {
    // Text search
    if (query) {
      const hay = `${f.name} ${f.mention} ${f.domain} ${f.type}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    // Bac type
    if (filters.bacTypes.size > 0 && !f.bacTypes.some(b => filters.bacTypes.has(b))) return false;
    // Formation type
    if (filters.types.size > 0 && !filters.types.has(f.type)) return false;
    // Average cap
    if (filters.maxAvg < 20) {
      const mins = Object.values(f.minAverages);
      const relevantMin = filters.bacTypes.size > 0
        ? f.bacTypes.filter(b => filters.bacTypes.has(b)).map(b => f.minAverages[b]).filter(Boolean)
        : mins;
      if (relevantMin.length && Math.min(...relevantMin) > filters.maxAvg) return false;
    }
    // Wilaya: formation must exist in at least one univ in selected wilayas
    if (filters.wilayas.size > 0) {
      const univsForF = (formationUniversities[f.id] || [])
        .map(id => universities.find(u => u.id === id))
        .filter(Boolean);
      if (!univsForF.some(u => filters.wilayas.has(u.wilaya))) return false;
    }
    return true;
  });
}

function getFilteredUniversities(filteredFormations) {
  const { query, filters } = state;
  const validFIds = new Set(filteredFormations.map(f => f.id));
  return universities.filter(u => {
    // Wilaya filter
    if (filters.wilayas.size > 0 && !filters.wilayas.has(u.wilaya)) return false;
    // Text search (match name / short / city / wilaya OR has a matching formation)
    if (query) {
      const hay = `${u.name} ${u.shortName} ${u.city} ${u.wilaya}`.toLowerCase();
      const matchesDirect = hay.includes(query);
      const matchesViaFormation = u.formations.some(fId => validFIds.has(fId));
      if (!matchesDirect && !matchesViaFormation) return false;
    }
    // Keep university only if it offers at least one filtered formation
    if (filters.bacTypes.size > 0 || filters.types.size > 0 || filters.maxAvg < 20) {
      if (!u.formations.some(fId => validFIds.has(fId))) return false;
    }
    return true;
  });
}

// ============================================================
//  RENDER FORMATIONS
// ============================================================
function renderFormations(list = formations) {
  const grid = document.getElementById('formationsGrid');
  document.getElementById('formationsResultText').textContent =
    `${list.length} formation${list.length !== 1 ? 's' : ''} trouvée${list.length !== 1 ? 's' : ''}`;

  if (!list.length) {
    grid.innerHTML = emptyState('fa-book-open', 'Aucune formation trouvée', 'Modifiez vos filtres ou votre recherche');
    return;
  }
  grid.innerHTML = list.map(buildFormationCard).join('');
}

function buildFormationCard(f) {
  const univIds = formationUniversities[f.id] || [];
  const univCount = univIds.length;

  const bacBadges = f.bacTypes
    .map(b => `<span class="bac-badge bac-${b.toLowerCase()}">${b === 'MT' ? 'Bac MT' : 'Bac ' + b}</span>`)
    .join('');

  const avgItems = f.bacTypes.map(b => {
    const val = f.minAverages[b];
    if (val == null) return '';
    return `
      <div class="average-item">
        <span class="avg-bac avg-bac-${b.toLowerCase()}">${b === 'MT' ? 'Bac MT' : 'Bac ' + b}</span>
        <span class="avg-value ${avgClass(val)}">${val.toFixed(2)}</span>
      </div>`;
  }).join('');

  return `
    <div class="formation-card" onclick="showFormationModal('${f.id}')">
      <div class="card-header">
        <div>
          <div class="card-title">${f.name}</div>
          <div class="card-domain">${f.domain}</div>
        </div>
        <span class="card-type-badge">${shortType(f.type)}</span>
      </div>
      <div class="card-bac-types">${bacBadges}</div>
      <div class="averages-section">
        <div class="averages-title">Moyennes minimales d'orientation</div>
        <div class="averages-grid">${avgItems}</div>
      </div>
      <div class="card-footer">
        <div class="card-universities">
          <i class="fas fa-university" style="color:var(--primary)"></i>
          <span>${univCount} université${univCount !== 1 ? 's' : ''}</span>
        </div>
        <button class="card-btn" onclick="event.stopPropagation();showFormationModal('${f.id}')">
          Détails <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>`;
}

// ============================================================
//  RENDER UNIVERSITIES
// ============================================================
function renderUniversities(list = universities) {
  const grid = document.getElementById('universitiesGrid');
  document.getElementById('universitiesResultText').textContent =
    `${list.length} université${list.length !== 1 ? 's' : ''} trouvée${list.length !== 1 ? 's' : ''}`;

  if (!list.length) {
    grid.innerHTML = emptyState('fa-university', 'Aucune université trouvée', 'Modifiez vos filtres ou votre recherche');
    return;
  }
  grid.innerHTML = list.map(buildUniversityCard).join('');
}

function buildUniversityCard(u) {
  const tags = u.formations.slice(0, 5)
    .map(fId => {
      const f = formations.find(x => x.id === fId);
      return f ? `<span class="formation-tag">${f.mention}</span>` : '';
    }).join('');
  const more = u.formations.length > 5
    ? `<span class="formation-tag">+${u.formations.length - 5}</span>` : '';

  return `
    <div class="university-card" onclick="showUniversityModal(${u.id})">
      <div class="univ-header">
        <div class="univ-icon">🏛️</div>
        <div class="univ-info">
          <div class="univ-name">${u.name}</div>
          <div class="univ-short">${u.shortName}</div>
        </div>
      </div>
      <div class="univ-location">
        <i class="fas fa-map-marker-alt"></i>
        <span>${u.city}, Wilaya de ${u.wilaya}</span>
      </div>
      <div>
        <span class="univ-formations-count">
          <i class="fas fa-book-open"></i>
          ${u.formations.length} formation${u.formations.length !== 1 ? 's' : ''}
        </span>
      </div>
      <div class="univ-tags">${tags}${more}</div>
      <div class="univ-footer">
        <button class="univ-btn" onclick="event.stopPropagation();flyToUniversity(${u.id})">
          <i class="fas fa-map"></i> Carte
        </button>
        <button class="univ-btn primary" onclick="event.stopPropagation();showUniversityModal(${u.id})">
          <i class="fas fa-info-circle"></i> Détails
        </button>
      </div>
    </div>`;
}

// ============================================================
//  MODAL – FORMATION DETAILS
// ============================================================
function showFormationModal(fId) {
  const f = formations.find(x => x.id === fId);
  if (!f) return;

  const univIds = formationUniversities[fId] || [];
  const univList = univIds.map(id => {
    const u = universities.find(x => x.id === id);
    if (!u) return '';
    return `
      <div class="modal-univ-item" onclick="closeModal();showUniversityModal(${u.id})">
        <div class="univ-icon">🏛️</div>
        <div class="modal-univ-item-info">
          <div class="modal-univ-item-name">${u.name}</div>
          <div class="modal-univ-item-city">${u.city} – ${u.wilaya}</div>
        </div>
        <i class="fas fa-chevron-right" style="color:var(--text-muted);font-size:11px"></i>
      </div>`;
  }).join('');

  const avgSection = f.bacTypes.map(b => {
    const val = f.minAverages[b];
    if (val == null) return '';
    return `
      <div class="modal-avg-item">
        <div class="modal-avg-bac avg-bac-${b.toLowerCase()}">${b === 'MT' ? 'Bac MT' : 'Bac ' + b}</div>
        <div class="modal-avg-val ${avgClass(val)}">${val.toFixed(2)}</div>
      </div>`;
  }).join('');

  const bacBadges = f.bacTypes
    .map(b => `<span class="bac-badge bac-${b.toLowerCase()}">${b === 'MT' ? 'Bac MT' : 'Bac ' + b}</span>`)
    .join(' ');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-title-row">
      <div class="modal-icon">📚</div>
      <div>
        <div class="modal-title">${f.name}</div>
        <div class="modal-subtitle">${f.domain} · ${f.duration}</div>
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Description</div>
      <p class="modal-desc">${f.description}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Baccalauréats acceptés</div>
      <div class="modal-tags">${bacBadges}</div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Moyennes minimales d'orientation</div>
      <div class="modal-avg-grid">${avgSection}</div>
      <p style="font-size:11px;color:var(--text-muted);margin-top:8px">
        * Valeurs de référence – peuvent varier selon l'université et l'année.
      </p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Universités proposant cette formation (${univIds.length})</div>
      <div class="modal-univ-list">${univList || '<p style="color:var(--text-muted);font-size:12px">Aucune université répertoriée.</p>'}</div>
    </div>`;

  openModal();
}

// ============================================================
//  MODAL – UNIVERSITY DETAILS
// ============================================================
function showUniversityModal(univId) {
  const u = universities.find(x => x.id === univId);
  if (!u) return;

  const formList = u.formations.map(fId => {
    const f = formations.find(x => x.id === fId);
    if (!f) return '';
    const avgMin = Math.min(...Object.values(f.minAverages));
    const bacBadges = f.bacTypes
      .map(b => `<span class="bac-badge bac-${b.toLowerCase()}" style="font-size:9px;padding:1px 7px">${b === 'MT' ? 'MT' : b}</span>`)
      .join('');
    return `
      <div class="modal-univ-item" onclick="closeModal();showFormationModal('${f.id}')">
        <div class="univ-icon" style="font-size:14px">📖</div>
        <div class="modal-univ-item-info">
          <div class="modal-univ-item-name">${f.name}</div>
          <div style="display:flex;gap:4px;margin-top:3px;flex-wrap:wrap">${bacBadges}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="avg-value ${avgClass(avgMin)}" style="font-size:13px">${avgMin.toFixed(2)}</div>
          <div style="font-size:9px;color:var(--text-muted)">moy. min.</div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-title-row">
      <div class="modal-icon">🏛️</div>
      <div>
        <div class="modal-title">${u.name}</div>
        <div class="modal-subtitle">${u.shortName} · ${u.city}, Wilaya de ${u.wilaya}</div>
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Localisation</div>
      <p class="modal-desc">
        <i class="fas fa-map-marker-alt" style="color:var(--accent)"></i>
        ${u.city}, Wilaya de ${u.wilaya}<br/>
        <span style="font-size:11px;color:var(--text-muted)">
          Coordonnées : ${u.lat.toFixed(4)}°N, ${u.lng.toFixed(4)}°E
        </span>
      </p>
      <button onclick="closeModal();flyToUniversity(${u.id})"
              style="margin-top:10px;background:none;border:1px solid var(--primary);color:var(--primary);
                     padding:6px 14px;border-radius:6px;cursor:pointer;font-size:12px;font-family:inherit;font-weight:600">
        <i class="fas fa-map"></i> Voir sur la carte
      </button>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Formations disponibles (${u.formations.length})</div>
      <div class="modal-univ-list">${formList || '<p style="color:var(--text-muted);font-size:12px">Aucune formation répertoriée.</p>'}</div>
    </div>`;

  openModal();
}

// ============================================================
//  MODAL HELPERS
// ============================================================
function openModal()  { document.getElementById('modalOverlay').classList.add('open'); }
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ============================================================
//  VIEW TOGGLE
// ============================================================
function setFormationsView(v) {
  state.formationsView = v;
  const grid = document.getElementById('formationsGrid');
  grid.classList.toggle('list-view', v === 'list');
  document.getElementById('fGridBtn').classList.toggle('active', v === 'grid');
  document.getElementById('fListBtn').classList.toggle('active', v === 'list');
}

function setUnivView(v) {
  state.universityView = v;
  const grid = document.getElementById('universitiesGrid');
  grid.classList.toggle('list-view', v === 'list');
  document.getElementById('uGridBtn').classList.toggle('active', v === 'grid');
  document.getElementById('uListBtn').classList.toggle('active', v === 'list');
}

// ============================================================
//  UPDATE COUNTERS
// ============================================================
function updateStats() {
  document.getElementById('statUnivs').textContent = universities.length;
  document.getElementById('statFormations').textContent = formations.length;
  updateCounts(formations, universities);
}

function updateCounts(fList, uList) {
  const fLen = fList.length;
  const uLen = uList.length;
  document.getElementById('formationsTabCount').textContent  = fLen;
  document.getElementById('universitiesTabCount').textContent = uLen;
  document.getElementById('countText').textContent =
    `${uLen} université${uLen !== 1 ? 's' : ''} · ${fLen} formation${fLen !== 1 ? 's' : ''}`;
}

// ============================================================
//  HELPERS
// ============================================================
function avgClass(v) {
  if (v >= 16)   return 'avg-very-high';
  if (v >= 14)   return 'avg-high';
  if (v >= 12)   return 'avg-medium';
  return 'avg-accessible';
}

function shortType(t) {
  // Shorten long labels for badge display
  const map = {
    'Sciences et Technologie': 'Sci. & Tech.',
    'Sciences Fondamentales':  'Sci. Fond.',
    'Sciences Biologiques':    'Sci. Bio.',
    'Sciences Agronomiques':   'Agronomie',
    'Sciences Médicales':      'Médical',
    'Sciences Économiques':    'Économie',
    'Sciences Juridiques':     'Droit',
    'Sciences Humaines':       'Sci. Hum.',
    'Lettres et Langues':      'Lettres',
    'Sciences Islamiques':     'Islamiques',
    'Sciences de la Terre':    'Géosciences'
  };
  return map[t] || t;
}

function emptyState(icon, msg, hint) {
  return `
    <div class="empty-state">
      <i class="fas ${icon}"></i>
      <p>${msg}</p>
      <small>${hint}</small>
    </div>`;
}
