/* ============================================================
   UnivDZ — app.js
   Application principale : carte, filtres, recherche, cartes
   ============================================================ */

(function () {
  "use strict";

  /* ── State ─────────────────────────────────────────────── */
  const state = {
    query: "",
    wilaya: "",
    domain: "",
    bacTypes: new Set(),       // actifs si vides = tous
    minAvg: 10,
    view: "map",               // "map" | "grid"
    mapInitialized: false,
  };

  /* ── Map instance & layers ─────────────────────────────── */
  let map = null;
  const markers = [];

  /* ── DOM refs ──────────────────────────────────────────── */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /* ── Boot ──────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    buildSidebar();
    buildViewTabs();
    renderAll();
    bindSearch();
    bindModal();
    bindSidebarToggle();
  });

  /* ================================================================
     SIDEBAR — build filters dynamically
  ================================================================ */
  function buildSidebar() {
    // Wilaya select
    const wilayaSelect = $("#filterWilaya");
    WILAYAS.forEach((w) => {
      const opt = document.createElement("option");
      opt.value = w;
      opt.textContent = w;
      wilayaSelect.appendChild(opt);
    });
    wilayaSelect.addEventListener("change", () => {
      state.wilaya = wilayaSelect.value;
      renderAll();
      updateChips();
    });

    // Domain select
    const domainSelect = $("#filterDomain");
    DOMAINS.forEach((d) => {
      const opt = document.createElement("option");
      opt.value = d;
      opt.textContent = d;
      domainSelect.appendChild(opt);
    });
    domainSelect.addEventListener("change", () => {
      state.domain = domainSelect.value;
      renderAll();
      updateChips();
    });

    // Bac checkboxes
    const bacList = $("#bacCheckList");
    BAC_TYPES.forEach(({ code, label }) => {
      const item = document.createElement("li");
      item.className = "filter-check-item";
      item.innerHTML = `
        <input type="checkbox" id="bac_${code}" value="${code}">
        <label for="bac_${code}">
          <span class="bac-code">${code}</span>
          ${label.split("—")[1] || ""}
        </label>`;
      item.querySelector("input").addEventListener("change", (e) => {
        if (e.target.checked) state.bacTypes.add(code);
        else state.bacTypes.delete(code);
        renderAll();
        updateChips();
      });
      bacList.appendChild(item);
    });

    // Average range
    const avgRange = $("#avgRange");
    const avgDisplay = $("#avgDisplay");
    avgRange.addEventListener("input", () => {
      state.minAvg = parseFloat(avgRange.value);
      avgDisplay.innerHTML = `Moyenne min : <strong>${state.minAvg.toFixed(2)} / 20</strong>`;
      renderAll();
      updateChips();
    });

    // Reset button
    $("#resetFilters").addEventListener("click", resetFilters);
  }

  function resetFilters() {
    state.query = "";
    state.wilaya = "";
    state.domain = "";
    state.bacTypes.clear();
    state.minAvg = 10;

    $("#searchInput").value = "";
    $("#clearSearch").classList.remove("visible");
    $("#filterWilaya").value = "";
    $("#filterDomain").value = "";
    $("#avgRange").value = 10;
    $("#avgDisplay").innerHTML = `Moyenne min : <strong>10.00 / 20</strong>`;
    $$(".filter-check-item input").forEach((cb) => (cb.checked = false));

    renderAll();
    updateChips();
  }

  /* ================================================================
     FILTER CHIPS
  ================================================================ */
  function updateChips() {
    const container = $("#activeFilters");
    container.innerHTML = "";

    const chips = [];
    if (state.wilaya) chips.push({ label: `🏙 ${state.wilaya}`, key: "wilaya" });
    if (state.domain) chips.push({ label: `📚 ${state.domain}`, key: "domain" });
    state.bacTypes.forEach((b) => chips.push({ label: `🎓 Bac ${b}`, key: `bac_${b}` }));
    if (state.minAvg > 10)
      chips.push({ label: `📊 Moy ≥ ${state.minAvg.toFixed(2)}`, key: "avg" });

    chips.forEach(({ label, key }) => {
      const chip = document.createElement("span");
      chip.className = "filter-chip";
      chip.innerHTML = `${label}<button title="Supprimer">✕</button>`;
      chip.querySelector("button").addEventListener("click", () => {
        removeChip(key);
      });
      container.appendChild(chip);
    });
  }

  function removeChip(key) {
    if (key === "wilaya") {
      state.wilaya = "";
      $("#filterWilaya").value = "";
    } else if (key === "domain") {
      state.domain = "";
      $("#filterDomain").value = "";
    } else if (key.startsWith("bac_")) {
      const code = key.replace("bac_", "");
      state.bacTypes.delete(code);
      $(`#bac_${code}`).checked = false;
    } else if (key === "avg") {
      state.minAvg = 10;
      $("#avgRange").value = 10;
      $("#avgDisplay").innerHTML = `Moyenne min : <strong>10.00 / 20</strong>`;
    }
    renderAll();
    updateChips();
  }

  /* ================================================================
     SEARCH
  ================================================================ */
  function bindSearch() {
    const input = $("#searchInput");
    const clear = $("#clearSearch");

    input.addEventListener("input", () => {
      state.query = input.value.trim().toLowerCase();
      clear.classList.toggle("visible", state.query.length > 0);
      renderAll();
      updateChips();
    });

    clear.addEventListener("click", () => {
      state.query = "";
      input.value = "";
      clear.classList.remove("visible");
      renderAll();
      updateChips();
    });
  }

  /* ================================================================
     VIEW TABS
  ================================================================ */
  function buildViewTabs() {
    $$(".view-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const v = tab.dataset.view;
        state.view = v;
        $$(".view-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        $("#mapPanel").classList.toggle("active", v === "map");
        $("#gridPanel").classList.toggle("active", v === "grid");
        if (v === "map" && !state.mapInitialized) {
          initMap();
        }
        renderAll();
      });
    });
    // Start on map
    $("#mapPanel").classList.add("active");
    initMap();
  }

  /* ================================================================
     FILTER ENGINE
  ================================================================ */
  function filterFormations() {
    return FORMATIONS.filter((f) => {
      // Text search
      if (state.query) {
        const haystack = (f.name + " " + f.filiere + " " + f.domain).toLowerCase();
        const words = state.query.split(/\s+/);
        if (!words.every((w) => haystack.includes(w))) return false;
      }
      // Domain
      if (state.domain && f.domain !== state.domain) return false;
      // Bac types
      if (state.bacTypes.size > 0) {
        const hasAny = [...state.bacTypes].some((b) => f.bacTypes.includes(b));
        if (!hasAny) return false;
      }
      // Wilaya → only if at least one university of the formation is in that wilaya
      if (state.wilaya) {
        const univsInWilaya = UNIVERSITIES.filter((u) => u.wilaya === state.wilaya).map((u) => u.id);
        const hasUniv = f.universityIds.some((id) => univsInWilaya.includes(id));
        if (!hasUniv) return false;
      }
      // Min average
      if (state.minAvg > 10) {
        const activeBacs = state.bacTypes.size > 0
          ? [...state.bacTypes]
          : Object.keys(f.moyennes).filter((b) => f.moyennes[b] !== null);
        const aboveMin = activeBacs.some(
          (b) => f.moyennes[b] !== null && f.moyennes[b] >= state.minAvg
        );
        if (!aboveMin) return false;
      }
      return true;
    });
  }

  function filterUniversities() {
    if (!state.wilaya && !state.query) return UNIVERSITIES;
    return UNIVERSITIES.filter((u) => {
      if (state.wilaya && u.wilaya !== state.wilaya) return false;
      if (state.query) {
        const h = (u.name + " " + u.shortName + " " + u.city + " " + u.wilaya).toLowerCase();
        if (!state.query.split(/\s+/).every((w) => h.includes(w))) return false;
      }
      return true;
    });
  }

  /* ================================================================
     RENDER ALL
  ================================================================ */
  function renderAll() {
    const formations = filterFormations();
    const univs = filterUniversities();

    // Update count
    const total = formations.length;
    $("#resultsCount").textContent =
      `${total} formation${total > 1 ? "s" : ""} · ${univs.length} université${univs.length > 1 ? "s" : ""}`;

    if (state.view === "map") {
      updateMapMarkers(univs, formations);
    } else {
      renderGrid(formations);
    }

    // Update header badges
    $("#badgeFormations").textContent = FORMATIONS.length;
    $("#badgeUnivs").textContent = UNIVERSITIES.length;
  }

  /* ================================================================
     MAP
  ================================================================ */
  function initMap() {
    if (state.mapInitialized) return;
    state.mapInitialized = true;

    map = L.map("map", {
      center: [28.5, 2.5],
      zoom: 5,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    // Add all markers initially
    UNIVERSITIES.forEach((u) => {
      const marker = createMarker(u);
      markers.push({ id: u.id, marker });
    });

    map.setView([28.5, 2.5], 5);
  }

  function createMarker(u) {
    const color = u.type === "École" ? "#2563eb" : u.type === "Centre Universitaire" ? "#f59e0b" : "#006233";
    const icon = L.divIcon({
      className: "",
      html: `<div style="
        width:14px;height:14px;
        background:${color};
        border:2.5px solid white;
        border-radius:50%;
        box-shadow:0 2px 6px rgba(0,0,0,.35);
        cursor:pointer;
      "></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    const formCount = FORMATIONS.filter((f) => f.universityIds.includes(u.id)).length;
    const marker = L.marker([u.lat, u.lng], { icon })
      .addTo(map)
      .bindPopup(buildPopup(u, formCount), { maxWidth: 290 });

    marker.on("click", () => {
      map.panTo([u.lat, u.lng], { animate: true, duration: 0.5 });
    });

    return marker;
  }

  function buildPopup(u, formCount) {
    return `<div class="popup-inner">
      <div class="popup-name">${u.shortName}</div>
      <div class="popup-city">📍 ${u.city}, ${u.wilaya}</div>
      <div style="font-size:.78rem;color:#6b7280;margin-bottom:.35rem">${u.name}</div>
      <div class="popup-count">📚 ${formCount} formation${formCount > 1 ? "s" : ""} disponible${formCount > 1 ? "s" : ""}</div>
      <button class="popup-btn" onclick="showUnivDetail(${u.id})">Voir les formations →</button>
    </div>`;
  }

  function updateMapMarkers(filteredUnivs, filteredFormations) {
    const visibleIds = new Set(filteredUnivs.map((u) => u.id));

    // Also show universities that have at least one formation in the filtered results
    const formUnivIds = new Set(
      filteredFormations.flatMap((f) => f.universityIds)
    );
    const allVisibleIds = new Set([...visibleIds, ...formUnivIds].filter(
      (id) => !state.wilaya || visibleIds.has(id)
    ));

    markers.forEach(({ id, marker }) => {
      const u = UNIV_BY_ID[id];
      if (allVisibleIds.has(id)) {
        marker.addTo(map);
        const formCount = filteredFormations.filter((f) => f.universityIds.includes(id)).length;
        marker.setPopupContent(buildPopup(u, formCount));
      } else {
        marker.remove();
      }
    });
  }

  /* ================================================================
     GRID
  ================================================================ */
  function renderGrid(formations) {
    const grid = $("#formationsGrid");
    grid.innerHTML = "";

    if (formations.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <strong>Aucune formation trouvée</strong>
          <p>Essayez d'autres termes ou réinitialisez les filtres.</p>
        </div>`;
      return;
    }

    formations.forEach((f) => {
      grid.appendChild(buildCard(f));
    });
  }

  function buildCard(f) {
    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    // Decide which bac types to show moyennes for
    const bacToShow = state.bacTypes.size > 0
      ? f.bacTypes.filter((b) => state.bacTypes.has(b))
      : f.bacTypes;

    const moyHTML = bacToShow
      .filter((b) => f.moyennes[b] !== null)
      .map((b) => `
        <span class="moy-item">
          <span class="moy-bac bac-tag bac-${b}">${b}</span>
          <span class="moy-val">${f.moyennes[b].toFixed(2)}</span>
        </span>`)
      .join("");

    const bacTagsHTML = f.bacTypes
      .map((b) => `<span class="bac-tag bac-${b}">${b}</span>`)
      .join("");

    const univCount = state.wilaya
      ? f.universityIds.filter((id) => {
          const u = UNIV_BY_ID[id];
          return u && u.wilaya === state.wilaya;
        }).length
      : f.universityIds.length;

    card.innerHTML = `
      <div class="card-domain">${f.domain}</div>
      <div class="card-name">${f.name}</div>
      <div class="card-desc">${f.description}</div>
      <div class="card-bac">${bacTagsHTML}</div>
      <div class="card-moyennes">${moyHTML}</div>
      <div class="card-footer">
        <span class="card-univ-count">🏛 ${univCount} université${univCount > 1 ? "s" : ""}</span>
        <button class="card-more-btn">Détails ›</button>
      </div>`;

    const open = () => openFormationModal(f.id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") open(); });
    return card;
  }

  /* ================================================================
     MODAL — formation detail
  ================================================================ */
  function bindModal() {
    const modal = $("#modal");
    $("#modalClose").addEventListener("click", closeModal);
    $(".modal-backdrop").addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  function openFormationModal(formId) {
    const f = FORM_BY_ID[formId];
    if (!f) return;

    const modal = $("#modal");
    const body = $("#modalBody");

    // Domain icon mapping
    const icons = {
      "Sciences et Technologies": "⚙️",
      "Sciences de la Nature et de la Vie": "🌿",
      "Sciences Économiques, Commerciales et de Gestion": "💼",
      "Droit et Sciences Politiques": "⚖️",
      "Lettres et Langues Étrangères": "📖",
      "Sciences Humaines et Sociales": "🤝",
      "Sciences Islamiques": "☪️",
      "Arts et Culture": "🎨",
    };
    const icon = icons[f.domain] || "🎓";

    // Moyennes table rows
    const moyRows = f.bacTypes
      .filter((b) => f.moyennes[b] !== null)
      .map((b) => {
        const val = f.moyennes[b];
        const cls = val >= 14 ? "high" : val >= 12 ? "med" : "low";
        const bacLabels = {
          S: "Sciences Exactes",
          M: "Mathématiques",
          MT: "Math & Techniques",
          L: "Lettres & Sciences Humaines",
          TM: "Techniques Mathématiques",
        };
        return `<tr>
          <td><span class="bac-tag bac-${b}">${b}</span></td>
          <td>${bacLabels[b] || b}</td>
          <td class="moy-val-cell ${cls}">${val.toFixed(2)} / 20</td>
        </tr>`;
      })
      .join("");

    // Universities list (filtered by wilaya if active)
    const univsToShow = f.universityIds
      .map((id) => UNIV_BY_ID[id])
      .filter(Boolean)
      .filter((u) => !state.wilaya || u.wilaya === state.wilaya)
      .sort((a, b) => a.wilaya.localeCompare(b.wilaya));

    const univsHTML = univsToShow
      .map(
        (u) => `
        <li class="modal-univ-item">
          <span class="univ-icon">🏛</span>
          <span class="univ-name">${u.shortName}</span>
          <span class="univ-city">📍 ${u.city}, ${u.wilaya}</span>
        </li>`
      )
      .join("");

    $("#modalIcon").textContent = icon;
    $("#modalDomain").textContent = f.domain;
    $("#modalTitle").textContent = f.name;

    body.innerHTML = `
      <p style="font-size:.88rem;color:#6b7280;line-height:1.6;">${f.description}</p>

      <p class="modal-section-title">📊 Moyennes minimales d'orientation</p>
      <table class="moy-table">
        <thead>
          <tr>
            <th>Bac</th>
            <th>Série</th>
            <th>Moyenne min.</th>
          </tr>
        </thead>
        <tbody>${moyRows}</tbody>
      </table>

      <p class="modal-section-title">🏛 Universités proposant cette formation (${univsToShow.length})</p>
      <ul class="modal-univ-list">${univsHTML}</ul>`;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    $("#modal").classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ================================================================
     showUnivDetail — called from map popup
  ================================================================ */
  window.showUnivDetail = function (univId) {
    const u = UNIV_BY_ID[univId];
    if (!u) return;

    const formations = FORMATIONS.filter((f) => f.universityIds.includes(univId));
    const modal = $("#modal");
    const body = $("#modalBody");

    $("#modalIcon").textContent = "🏛";
    $("#modalDomain").textContent = `${u.type} · ${u.wilaya}`;
    $("#modalTitle").textContent = u.name;

    const formRows = formations
      .map((f) => {
        const bacTags = f.bacTypes.map((b) => `<span class="bac-tag bac-${b}">${b}</span>`).join(" ");
        const moys = f.bacTypes
          .filter((b) => f.moyennes[b] !== null)
          .map((b) => `<span class="moy-item"><span class="moy-bac">${b}</span><span class="moy-val">${f.moyennes[b].toFixed(2)}</span></span>`)
          .join("");
        return `<li class="modal-univ-item" style="flex-direction:column;align-items:flex-start;gap:.3rem;cursor:pointer;"
                    onclick="openFormationModalGlobal('${f.id}')">
          <div style="font-weight:600;color:#111827;font-size:.85rem;">${f.name}</div>
          <div style="display:flex;gap:.35rem;flex-wrap:wrap;">${bacTags}</div>
          <div style="display:flex;gap:.35rem;flex-wrap:wrap;">${moys}</div>
        </li>`;
      })
      .join("");

    body.innerHTML = `
      <div style="font-size:.85rem;color:#6b7280;margin-bottom:.75rem;display:flex;gap:.75rem;flex-wrap:wrap;">
        <span>📍 ${u.city}, ${u.wilaya}</span>
        ${u.website ? `<a href="${u.website}" target="_blank" rel="noopener" style="color:var(--green);">🌐 Site web</a>` : ""}
      </div>
      <p class="modal-section-title">📚 Formations disponibles (${formations.length})</p>
      <ul class="modal-univ-list">${formRows}</ul>`;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  window.openFormationModalGlobal = function (formId) {
    closeModal();
    setTimeout(() => openFormationModal(formId), 200);
  };

  /* ================================================================
     SIDEBAR TOGGLE (mobile)
  ================================================================ */
  function bindSidebarToggle() {
    const btn = $("#sidebarToggle");
    const sidebar = $("#sidebar");
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
    // Close when clicking outside on mobile
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 900 &&
          sidebar.classList.contains("open") &&
          !sidebar.contains(e.target) &&
          !btn.contains(e.target)) {
        sidebar.classList.remove("open");
      }
    });
  }
})();
