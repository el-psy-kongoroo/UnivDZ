// ============================================================
//  UnivDZ — Données des universités et formations algériennes
// ============================================================

const UNIVERSITIES = [
  // ── ALGER ──────────────────────────────────────────────────
  {
    id: 1,
    name: "Université des Sciences et de la Technologie Houari Boumediene",
    shortName: "USTHB",
    wilaya: "Alger",
    city: "Alger",
    lat: 36.7074,
    lng: 3.1745,
    type: "Université",
    website: "http://www.usthb.dz",
  },
  {
    id: 2,
    name: "Université d'Alger 1 — Benyoucef Benkhedda",
    shortName: "Univ. Alger 1",
    wilaya: "Alger",
    city: "Alger",
    lat: 36.7392,
    lng: 3.0597,
    type: "Université",
    website: "http://www.univ-alger.dz",
  },
  {
    id: 3,
    name: "Université d'Alger 2 — Abou El Kacem Saadallah",
    shortName: "Univ. Alger 2",
    wilaya: "Alger",
    city: "Alger",
    lat: 36.7539,
    lng: 3.0438,
    type: "Université",
    website: "http://www.univ-alger2.dz",
  },
  {
    id: 4,
    name: "Université d'Alger 3 — Hassiba Ben Bouali",
    shortName: "Univ. Alger 3",
    wilaya: "Alger",
    city: "Alger",
    lat: 36.7169,
    lng: 3.1580,
    type: "Université",
    website: "http://www.univ-alger3.dz",
  },
  {
    id: 5,
    name: "École Nationale Supérieure d'Informatique",
    shortName: "ESI Alger",
    wilaya: "Alger",
    city: "Alger",
    lat: 36.7088,
    lng: 3.1728,
    type: "École",
    website: "http://www.esi.dz",
  },

  // ── ORAN ───────────────────────────────────────────────────
  {
    id: 6,
    name: "Université des Sciences et de la Technologie d'Oran",
    shortName: "USTO-MB",
    wilaya: "Oran",
    city: "Oran",
    lat: 35.7141,
    lng: -0.6196,
    type: "Université",
    website: "http://www.univ-usto.dz",
  },
  {
    id: 7,
    name: "Université Oran 1 — Ahmed Ben Bella",
    shortName: "Univ. Oran 1",
    wilaya: "Oran",
    city: "Oran",
    lat: 35.6982,
    lng: -0.6394,
    type: "Université",
    website: "http://www.univ-oran1.dz",
  },
  {
    id: 8,
    name: "Université Oran 2 — Mohamed Ben Ahmed",
    shortName: "Univ. Oran 2",
    wilaya: "Oran",
    city: "Oran",
    lat: 35.6731,
    lng: -0.6278,
    type: "Université",
    website: "http://www.univ-oran2.dz",
  },

  // ── CONSTANTINE ────────────────────────────────────────────
  {
    id: 9,
    name: "Université Frères Mentouri Constantine 1",
    shortName: "Univ. Constantine 1",
    wilaya: "Constantine",
    city: "Constantine",
    lat: 36.3515,
    lng: 6.6141,
    type: "Université",
    website: "http://www.umc.edu.dz",
  },
  {
    id: 10,
    name: "Université Abdelhamid Mehri Constantine 2",
    shortName: "Univ. Constantine 2",
    wilaya: "Constantine",
    city: "Constantine",
    lat: 36.3647,
    lng: 6.6278,
    type: "Université",
    website: "http://www.univ-constantine2.dz",
  },
  {
    id: 11,
    name: "Université Salah Boubnider Constantine 3",
    shortName: "Univ. Constantine 3",
    wilaya: "Constantine",
    city: "Constantine",
    lat: 36.3589,
    lng: 6.6367,
    type: "Université",
    website: "http://www.univ-constantine3.dz",
  },

  // ── ANNABA ─────────────────────────────────────────────────
  {
    id: 12,
    name: "Université Badji Mokhtar — Annaba",
    shortName: "Univ. Annaba",
    wilaya: "Annaba",
    city: "Annaba",
    lat: 36.9015,
    lng: 7.7664,
    type: "Université",
    website: "http://www.univ-annaba.dz",
  },

  // ── BÉJAÏA ─────────────────────────────────────────────────
  {
    id: 13,
    name: "Université Abderrahmane Mira — Béjaïa",
    shortName: "Univ. Béjaïa",
    wilaya: "Béjaïa",
    city: "Béjaïa",
    lat: 36.7542,
    lng: 5.0564,
    type: "Université",
    website: "http://www.univ-bejaia.dz",
  },

  // ── TIZI-OUZOU ─────────────────────────────────────────────
  {
    id: 14,
    name: "Université Mouloud Mammeri — Tizi-Ouzou",
    shortName: "UMMTO",
    wilaya: "Tizi-Ouzou",
    city: "Tizi-Ouzou",
    lat: 36.7177,
    lng: 4.0463,
    type: "Université",
    website: "http://www.ummto.dz",
  },

  // ── TLEMCEN ────────────────────────────────────────────────
  {
    id: 15,
    name: "Université Abou Bekr Belkaid — Tlemcen",
    shortName: "Univ. Tlemcen",
    wilaya: "Tlemcen",
    city: "Tlemcen",
    lat: 34.8878,
    lng: -1.3148,
    type: "Université",
    website: "http://www.univ-tlemcen.dz",
  },

  // ── SÉTIF ──────────────────────────────────────────────────
  {
    id: 16,
    name: "Université Ferhat Abbas — Sétif 1",
    shortName: "Univ. Sétif 1",
    wilaya: "Sétif",
    city: "Sétif",
    lat: 36.1912,
    lng: 5.4083,
    type: "Université",
    website: "http://www.univ-setif.dz",
  },
  {
    id: 17,
    name: "Université Mohamed Lamine Debaghine — Sétif 2",
    shortName: "Univ. Sétif 2",
    wilaya: "Sétif",
    city: "Sétif",
    lat: 36.1851,
    lng: 5.3965,
    type: "Université",
    website: "http://www.univ-setif2.dz",
  },

  // ── BATNA ──────────────────────────────────────────────────
  {
    id: 18,
    name: "Université Hadj Lakhdar — Batna 1",
    shortName: "Univ. Batna 1",
    wilaya: "Batna",
    city: "Batna",
    lat: 35.5560,
    lng: 6.1742,
    type: "Université",
    website: "http://www.univ-batna.dz",
  },
  {
    id: 19,
    name: "Université Mostefa Ben Boulaid — Batna 2",
    shortName: "Univ. Batna 2",
    wilaya: "Batna",
    city: "Batna",
    lat: 35.5440,
    lng: 6.1890,
    type: "Université",
    website: "http://www.univ-batna2.dz",
  },

  // ── BISKRA ─────────────────────────────────────────────────
  {
    id: 20,
    name: "Université Mohamed Khider — Biskra",
    shortName: "Univ. Biskra",
    wilaya: "Biskra",
    city: "Biskra",
    lat: 34.8519,
    lng: 5.7281,
    type: "Université",
    website: "http://www.univ-biskra.dz",
  },

  // ── BLIDA ──────────────────────────────────────────────────
  {
    id: 21,
    name: "Université Saad Dahlab — Blida 1",
    shortName: "Univ. Blida 1",
    wilaya: "Blida",
    city: "Blida",
    lat: 36.4695,
    lng: 2.8305,
    type: "Université",
    website: "http://www.univ-blida.dz",
  },
  {
    id: 22,
    name: "Université Ali Lounissi — Blida 2",
    shortName: "Univ. Blida 2",
    wilaya: "Blida",
    city: "Blida",
    lat: 36.4760,
    lng: 2.8180,
    type: "Université",
    website: "http://www.univ-blida2.dz",
  },

  // ── MÉDÉA ──────────────────────────────────────────────────
  {
    id: 23,
    name: "Université Yahia Fares — Médéa",
    shortName: "Univ. Médéa",
    wilaya: "Médéa",
    city: "Médéa",
    lat: 36.2640,
    lng: 2.7510,
    type: "Université",
    website: "http://www.univ-medea.dz",
  },

  // ── M'SILA ─────────────────────────────────────────────────
  {
    id: 24,
    name: "Université Mohamed Boudiaf — M'Sila",
    shortName: "Univ. M'Sila",
    wilaya: "M'Sila",
    city: "M'Sila",
    lat: 35.7050,
    lng: 4.5434,
    type: "Université",
    website: "http://www.univ-msila.dz",
  },

  // ── MOSTAGANEM ─────────────────────────────────────────────
  {
    id: 25,
    name: "Université Abdelhamid Ibn Badis — Mostaganem",
    shortName: "Univ. Mostaganem",
    wilaya: "Mostaganem",
    city: "Mostaganem",
    lat: 35.9322,
    lng: 0.0893,
    type: "Université",
    website: "http://www.univ-mosta.dz",
  },

  // ── MASCARA ────────────────────────────────────────────────
  {
    id: 26,
    name: "Université Mustapha Stambouli — Mascara",
    shortName: "Univ. Mascara",
    wilaya: "Mascara",
    city: "Mascara",
    lat: 35.3963,
    lng: 0.1386,
    type: "Université",
    website: "http://www.univ-mascara.dz",
  },

  // ── SKIKDA ─────────────────────────────────────────────────
  {
    id: 27,
    name: "Université 20 Août 1955 — Skikda",
    shortName: "Univ. Skikda",
    wilaya: "Skikda",
    city: "Skikda",
    lat: 36.8760,
    lng: 6.9090,
    type: "Université",
    website: "http://www.univ-skikda.dz",
  },

  // ── JIJEL ──────────────────────────────────────────────────
  {
    id: 28,
    name: "Université Mohamed Seddik Ben Yahia — Jijel",
    shortName: "Univ. Jijel",
    wilaya: "Jijel",
    city: "Jijel",
    lat: 36.8200,
    lng: 5.7660,
    type: "Université",
    website: "http://www.univ-jijel.dz",
  },

  // ── GUELMA ─────────────────────────────────────────────────
  {
    id: 29,
    name: "Université 8 Mai 1945 — Guelma",
    shortName: "Univ. Guelma",
    wilaya: "Guelma",
    city: "Guelma",
    lat: 36.4630,
    lng: 7.4290,
    type: "Université",
    website: "http://www.univ-guelma.dz",
  },

  // ── SOUK AHRAS ─────────────────────────────────────────────
  {
    id: 30,
    name: "Université Mohamed Chérif Messaadia — Souk Ahras",
    shortName: "Univ. Souk Ahras",
    wilaya: "Souk Ahras",
    city: "Souk Ahras",
    lat: 36.2860,
    lng: 7.9510,
    type: "Université",
    website: "http://www.univ-soukahras.dz",
  },

  // ── TÉBESSA ────────────────────────────────────────────────
  {
    id: 31,
    name: "Université Larbi Tébessi — Tébessa",
    shortName: "Univ. Tébessa",
    wilaya: "Tébessa",
    city: "Tébessa",
    lat: 35.4010,
    lng: 8.1200,
    type: "Université",
    website: "http://www.univ-tebessa.dz",
  },

  // ── KHENCHELA ──────────────────────────────────────────────
  {
    id: 32,
    name: "Université Abbas Laghrour — Khenchela",
    shortName: "Univ. Khenchela",
    wilaya: "Khenchela",
    city: "Khenchela",
    lat: 35.4360,
    lng: 7.1440,
    type: "Université",
    website: "http://www.univ-khenchela.dz",
  },

  // ── OUM EL BOUAGHI ─────────────────────────────────────────
  {
    id: 33,
    name: "Université Larbi Ben M'Hidi — Oum el Bouaghi",
    shortName: "Univ. Oum el Bouaghi",
    wilaya: "Oum el Bouaghi",
    city: "Oum el Bouaghi",
    lat: 35.8760,
    lng: 7.1140,
    type: "Université",
    website: "http://www.univ-oeb.dz",
  },

  // ── TIARET ─────────────────────────────────────────────────
  {
    id: 34,
    name: "Université Ibn Khaldoun — Tiaret",
    shortName: "Univ. Tiaret",
    wilaya: "Tiaret",
    city: "Tiaret",
    lat: 35.3710,
    lng: 1.3170,
    type: "Université",
    website: "http://www.univ-tiaret.dz",
  },

  // ── SAÏDA ──────────────────────────────────────────────────
  {
    id: 35,
    name: "Université Dr Tahar Moulay — Saïda",
    shortName: "Univ. Saïda",
    wilaya: "Saïda",
    city: "Saïda",
    lat: 34.8300,
    lng: 0.1500,
    type: "Université",
    website: "http://www.univ-saida.dz",
  },

  // ── CHLEF ──────────────────────────────────────────────────
  {
    id: 36,
    name: "Université Hassiba Ben Bouali — Chlef",
    shortName: "Univ. Chlef",
    wilaya: "Chlef",
    city: "Chlef",
    lat: 36.1650,
    lng: 1.3410,
    type: "Université",
    website: "http://www.univ-chlef.dz",
  },

  // ── BÉCHAR ─────────────────────────────────────────────────
  {
    id: 37,
    name: "Université Tahri Mohamed — Béchar",
    shortName: "Univ. Béchar",
    wilaya: "Béchar",
    city: "Béchar",
    lat: 31.6170,
    lng: -2.2170,
    type: "Université",
    website: "http://www.univ-bechar.dz",
  },

  // ── OUARGLA ────────────────────────────────────────────────
  {
    id: 38,
    name: "Université Kasdi Merbah — Ouargla",
    shortName: "Univ. Ouargla",
    wilaya: "Ouargla",
    city: "Ouargla",
    lat: 31.9490,
    lng: 5.3240,
    type: "Université",
    website: "http://www.univ-ouargla.dz",
  },

  // ── EL OUED ────────────────────────────────────────────────
  {
    id: 39,
    name: "Université Echahid Hamma Lakhdar — El Oued",
    shortName: "Univ. El Oued",
    wilaya: "El Oued",
    city: "El Oued",
    lat: 33.3670,
    lng: 6.8670,
    type: "Université",
    website: "http://www.univ-eloued.dz",
  },

  // ── GHARDAÏA ───────────────────────────────────────────────
  {
    id: 40,
    name: "Université Ghardaïa",
    shortName: "Univ. Ghardaïa",
    wilaya: "Ghardaïa",
    city: "Ghardaïa",
    lat: 32.4940,
    lng: 3.6730,
    type: "Université",
    website: "http://www.univ-ghardaia.dz",
  },

  // ── ADRAR ──────────────────────────────────────────────────
  {
    id: 41,
    name: "Université Ahmed Draia — Adrar",
    shortName: "Univ. Adrar",
    wilaya: "Adrar",
    city: "Adrar",
    lat: 27.8740,
    lng: -0.2940,
    type: "Université",
    website: "http://www.univ-adrar.dz",
  },

  // ── TAMANRASSET ────────────────────────────────────────────
  {
    id: 42,
    name: "Université Abderrahmane Mira — Tamanrasset",
    shortName: "Univ. Tamanrasset",
    wilaya: "Tamanrasset",
    city: "Tamanrasset",
    lat: 22.7850,
    lng: 5.5230,
    type: "Université",
    website: "http://www.univ-tam.dz",
  },

  // ── LAGHOUAT ───────────────────────────────────────────────
  {
    id: 43,
    name: "Université Amar Telidji — Laghouat",
    shortName: "Univ. Laghouat",
    wilaya: "Laghouat",
    city: "Laghouat",
    lat: 33.8000,
    lng: 2.8650,
    type: "Université",
    website: "http://www.lagh-univ.dz",
  },

  // ── DJELFA ─────────────────────────────────────────────────
  {
    id: 44,
    name: "Université Ziane Achour — Djelfa",
    shortName: "Univ. Djelfa",
    wilaya: "Djelfa",
    city: "Djelfa",
    lat: 34.6700,
    lng: 3.2630,
    type: "Université",
    website: "http://www.univ-djelfa.dz",
  },

  // ── AÏN DEFLA ──────────────────────────────────────────────
  {
    id: 45,
    name: "Centre Universitaire Ain Defla",
    shortName: "CU Ain Defla",
    wilaya: "Ain Defla",
    city: "Ain Defla",
    lat: 36.2640,
    lng: 1.9680,
    type: "Centre Universitaire",
    website: "http://www.cu-aindefla.dz",
  },

  // ── RELIZANE ───────────────────────────────────────────────
  {
    id: 46,
    name: "Université de Relizane",
    shortName: "Univ. Relizane",
    wilaya: "Relizane",
    city: "Relizane",
    lat: 35.7380,
    lng: 0.5560,
    type: "Université",
    website: "http://www.univ-relizane.dz",
  },

  // ── AÏN TEMOUCHENT ─────────────────────────────────────────
  {
    id: 47,
    name: "Université Belhadj Bouchaib — Aïn Temouchent",
    shortName: "Univ. Aïn Temouchent",
    wilaya: "Aïn Temouchent",
    city: "Aïn Temouchent",
    lat: 35.2980,
    lng: -1.1400,
    type: "Université",
    website: "http://www.univ-aintemouchent.dz",
  },

  // ── NAÂMA ──────────────────────────────────────────────────
  {
    id: 48,
    name: "Centre Universitaire Ahmed Salhi — Naâma",
    shortName: "CU Naâma",
    wilaya: "Naâma",
    city: "Naâma",
    lat: 33.2680,
    lng: -0.3140,
    type: "Centre Universitaire",
    website: "http://www.cu-naama.dz",
  },
];

// ============================================================
//  FORMATIONS (Licence)
//  moyennes: moyennes minimales par type de bac
//    S  = Sciences Exactes (Scientifique)
//    M  = Mathématiques
//    MT = Math et Technique
//    L  = Lettres & Sciences Humaines
//    TM = Techniques Mathématiques (filière technologique)
//  null = filière non ouverte pour ce type de bac
// ============================================================

const FORMATIONS = [
  // ── Sciences et Technologies ─────────────────────────────
  {
    id: "info",
    name: "Licence en Informatique",
    domain: "Sciences et Technologies",
    filiere: "Informatique",
    description:
      "Algorithmique, programmation, systèmes, réseaux et bases de données.",
    bacTypes: ["S", "M", "MT"],
    moyennes: { S: 14.28, M: 13.50, MT: 14.28, L: null, TM: null },
    universityIds: [1, 5, 6, 9, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 29, 36, 38, 43],
  },
  {
    id: "math",
    name: "Licence en Mathématiques",
    domain: "Sciences et Technologies",
    filiere: "Mathématiques",
    description:
      "Algèbre, analyse, probabilités, statistiques et mathématiques appliquées.",
    bacTypes: ["S", "M", "MT"],
    moyennes: { S: 15.33, M: 14.27, MT: 15.33, L: null, TM: null },
    universityIds: [1, 2, 6, 9, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 38],
  },
  {
    id: "physique",
    name: "Licence en Physique",
    domain: "Sciences et Technologies",
    filiere: "Physique",
    description: "Mécanique, thermodynamique, électromagnétisme et optique.",
    bacTypes: ["S", "MT"],
    moyennes: { S: 13.24, M: null, MT: 13.24, L: null, TM: null },
    universityIds: [1, 2, 6, 9, 12, 13, 14, 15, 16, 18, 21, 24, 25, 36],
  },
  {
    id: "chimie",
    name: "Licence en Chimie",
    domain: "Sciences et Technologies",
    filiere: "Chimie",
    description: "Chimie organique, inorganique, analytique et industrielle.",
    bacTypes: ["S"],
    moyennes: { S: 12.45, M: null, MT: null, L: null, TM: null },
    universityIds: [1, 2, 6, 9, 12, 13, 14, 15, 16, 18, 21, 25],
  },
  {
    id: "genie-civil",
    name: "Licence en Génie Civil",
    domain: "Sciences et Technologies",
    filiere: "Génie Civil",
    description: "Construction, résistance des matériaux, béton armé et hydraulique.",
    bacTypes: ["S", "MT"],
    moyennes: { S: 13.87, M: null, MT: 13.87, L: null, TM: null },
    universityIds: [1, 6, 9, 12, 13, 14, 15, 16, 18, 20, 21, 23, 24, 25, 27, 29, 36, 43, 44],
  },
  {
    id: "genie-electrique",
    name: "Licence en Génie Électrique",
    domain: "Sciences et Technologies",
    filiere: "Génie Électrique",
    description: "Électrotechnique, électronique de puissance et automatique.",
    bacTypes: ["S", "MT"],
    moyennes: { S: 13.91, M: null, MT: 13.91, L: null, TM: null },
    universityIds: [1, 6, 9, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 36, 43],
  },
  {
    id: "genie-mecanique",
    name: "Licence en Génie Mécanique",
    domain: "Sciences et Technologies",
    filiere: "Génie Mécanique",
    description: "Mécanique des solides, conception, fabrication et thermique.",
    bacTypes: ["S", "MT"],
    moyennes: { S: 13.45, M: null, MT: 13.45, L: null, TM: null },
    universityIds: [1, 6, 9, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 29, 36, 43],
  },
  {
    id: "genie-procedes",
    name: "Licence en Génie des Procédés",
    domain: "Sciences et Technologies",
    filiere: "Génie des Procédés",
    description: "Génie chimique, procédés industriels et transfert de matière.",
    bacTypes: ["S", "MT"],
    moyennes: { S: 12.78, M: null, MT: 12.78, L: null, TM: null },
    universityIds: [1, 6, 12, 13, 16, 20, 21, 25],
  },
  {
    id: "electronique",
    name: "Licence en Électronique",
    domain: "Sciences et Technologies",
    filiere: "Électronique",
    description: "Circuits électroniques, télécommunications et traitement du signal.",
    bacTypes: ["S", "MT"],
    moyennes: { S: 13.75, M: null, MT: 13.75, L: null, TM: null },
    universityIds: [1, 6, 9, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 29, 36, 43],
  },
  {
    id: "automatique",
    name: "Licence en Automatique",
    domain: "Sciences et Technologies",
    filiere: "Automatique",
    description: "Systèmes de contrôle, robotique et régulation automatique.",
    bacTypes: ["S", "MT"],
    moyennes: { S: 13.62, M: null, MT: 13.62, L: null, TM: null },
    universityIds: [1, 6, 9, 12, 13, 15, 16, 18, 21, 24],
  },
  {
    id: "architecture",
    name: "Licence en Architecture",
    domain: "Sciences et Technologies",
    filiere: "Architecture",
    description: "Conception architecturale, urbanisme et patrimoine bâti.",
    bacTypes: ["S", "MT"],
    moyennes: { S: 13.20, M: null, MT: 13.20, L: null, TM: null },
    universityIds: [2, 7, 9, 12, 14, 15, 16, 18, 21, 25],
  },
  {
    id: "hydrocarb",
    name: "Licence en Génie des Hydrocarbures",
    domain: "Sciences et Technologies",
    filiere: "Génie des Hydrocarbures",
    description: "Forage, production pétrolière, gaz naturel et raffinage.",
    bacTypes: ["S", "MT"],
    moyennes: { S: 14.10, M: null, MT: 14.10, L: null, TM: null },
    universityIds: [38, 43, 20, 37],
  },
  {
    id: "telecom",
    name: "Licence en Télécommunications",
    domain: "Sciences et Technologies",
    filiere: "Télécommunications",
    description: "Réseaux, protocoles, systèmes mobiles et communications optiques.",
    bacTypes: ["S", "MT"],
    moyennes: { S: 14.05, M: null, MT: 14.05, L: null, TM: null },
    universityIds: [1, 5, 6, 9, 12, 15, 16, 21],
  },
  {
    id: "geo-phys",
    name: "Licence en Géophysique",
    domain: "Sciences et Technologies",
    filiere: "Géophysique",
    description: "Exploration sismique, magnétisme terrestre et gravimétrie.",
    bacTypes: ["S"],
    moyennes: { S: 12.90, M: null, MT: null, L: null, TM: null },
    universityIds: [1, 6, 12, 38],
  },

  // ── Sciences de la Nature et de la Vie ───────────────────
  {
    id: "biologie",
    name: "Licence en Biologie",
    domain: "Sciences de la Nature et de la Vie",
    filiere: "Biologie",
    description: "Biologie cellulaire, génétique, microbiologie et écologie.",
    bacTypes: ["S"],
    moyennes: { S: 11.50, M: null, MT: null, L: null, TM: null },
    universityIds: [1, 2, 6, 7, 9, 12, 13, 14, 15, 16, 18, 20, 21, 23, 24, 25, 27, 29, 33, 34, 36, 37, 38, 39, 43],
  },
  {
    id: "biochimie",
    name: "Licence en Biochimie",
    domain: "Sciences de la Nature et de la Vie",
    filiere: "Biochimie",
    description: "Biochimie structurale, métabolisme et biologie moléculaire.",
    bacTypes: ["S"],
    moyennes: { S: 12.10, M: null, MT: null, L: null, TM: null },
    universityIds: [1, 2, 6, 9, 12, 13, 14, 15, 16, 18, 21, 24],
  },
  {
    id: "agro",
    name: "Licence en Sciences Agronomiques",
    domain: "Sciences de la Nature et de la Vie",
    filiere: "Sciences Agronomiques",
    description: "Agriculture, agronomie, protection des plantes et zootechnie.",
    bacTypes: ["S"],
    moyennes: { S: 11.25, M: null, MT: null, L: null, TM: null },
    universityIds: [1, 6, 7, 9, 12, 13, 14, 15, 16, 18, 20, 21, 25, 34, 38, 43, 44],
  },
  {
    id: "veto",
    name: "Licence en Sciences Vétérinaires",
    domain: "Sciences de la Nature et de la Vie",
    filiere: "Sciences Vétérinaires",
    description: "Médecine vétérinaire, zootechnie et hygiène alimentaire.",
    bacTypes: ["S"],
    moyennes: { S: 13.80, M: null, MT: null, L: null, TM: null },
    universityIds: [2, 7, 9, 12, 14, 16, 18],
  },
  {
    id: "ecologie",
    name: "Licence en Écologie et Environnement",
    domain: "Sciences de la Nature et de la Vie",
    filiere: "Écologie et Environnement",
    description: "Biodiversité, écosystèmes, gestion durable et pollution.",
    bacTypes: ["S"],
    moyennes: { S: 10.80, M: null, MT: null, L: null, TM: null },
    universityIds: [1, 6, 9, 12, 13, 14, 15, 16, 20, 21, 24, 38, 40, 43],
  },
  {
    id: "geologie",
    name: "Licence en Sciences de la Terre (Géologie)",
    domain: "Sciences de la Nature et de la Vie",
    filiere: "Géologie",
    description: "Minéralogie, stratigraphie, tectonique et géologie appliquée.",
    bacTypes: ["S"],
    moyennes: { S: 11.80, M: null, MT: null, L: null, TM: null },
    universityIds: [1, 6, 9, 12, 13, 14, 15, 16, 18, 20, 21, 38],
  },

  // ── Sciences Économiques, Commerciales et de Gestion ────
  {
    id: "eco",
    name: "Licence en Sciences Économiques",
    domain: "Sciences Économiques, Commerciales et de Gestion",
    filiere: "Sciences Économiques",
    description: "Macroéconomie, microéconomie, économétrie et politiques économiques.",
    bacTypes: ["S", "M", "MT", "TM"],
    moyennes: { S: 10.00, M: 10.00, MT: 10.00, L: null, TM: 10.00 },
    universityIds: [2, 3, 4, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 43, 44, 46],
  },
  {
    id: "commerce",
    name: "Licence en Sciences Commerciales",
    domain: "Sciences Économiques, Commerciales et de Gestion",
    filiere: "Sciences Commerciales",
    description: "Marketing, commerce international, logistique et distribution.",
    bacTypes: ["S", "M", "MT", "TM"],
    moyennes: { S: 10.00, M: 10.00, MT: 10.00, L: null, TM: 10.00 },
    universityIds: [2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 29, 33, 34, 35, 36, 38, 43, 44, 46],
  },
  {
    id: "gestion",
    name: "Licence en Sciences de Gestion",
    domain: "Sciences Économiques, Commerciales et de Gestion",
    filiere: "Sciences de Gestion",
    description: "Management, comptabilité, finance d'entreprise et audit.",
    bacTypes: ["S", "M", "MT", "TM"],
    moyennes: { S: 10.00, M: 10.00, MT: 10.00, L: null, TM: 10.00 },
    universityIds: [2, 3, 4, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 29, 33, 34, 35, 36, 38, 43, 44, 46],
  },
  {
    id: "finance",
    name: "Licence en Finance et Comptabilité",
    domain: "Sciences Économiques, Commerciales et de Gestion",
    filiere: "Finance et Comptabilité",
    description: "Comptabilité analytique, finance de marchés et contrôle de gestion.",
    bacTypes: ["S", "M", "MT", "TM"],
    moyennes: { S: 10.50, M: 10.50, MT: 10.50, L: null, TM: 10.50 },
    universityIds: [2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 33, 36, 38, 43],
  },

  // ── Droit et Sciences Politiques ─────────────────────────
  {
    id: "droit",
    name: "Licence en Droit",
    domain: "Droit et Sciences Politiques",
    filiere: "Droit",
    description: "Droit civil, droit commercial, droit administratif et droit international.",
    bacTypes: ["S", "M", "MT", "L", "TM"],
    moyennes: { S: 10.00, M: 10.00, MT: 10.00, L: 10.50, TM: 10.00 },
    universityIds: [2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47],
  },
  {
    id: "sc-pol",
    name: "Licence en Sciences Politiques",
    domain: "Droit et Sciences Politiques",
    filiere: "Sciences Politiques",
    description: "Relations internationales, géopolitique et administration publique.",
    bacTypes: ["S", "M", "MT", "L", "TM"],
    moyennes: { S: 10.00, M: 10.00, MT: 10.00, L: 10.50, TM: 10.00 },
    universityIds: [2, 3, 7, 9, 12, 14, 15, 16, 21, 25, 36, 38],
  },

  // ── Lettres et Langues Étrangères ────────────────────────
  {
    id: "lettres-ar",
    name: "Licence en Lettres et Langue Arabe",
    domain: "Lettres et Langues Étrangères",
    filiere: "Lettres Arabes",
    description: "Linguistique arabe, littérature, rhétorique et critique littéraire.",
    bacTypes: ["L", "S", "M"],
    moyennes: { S: 10.00, M: 10.00, MT: null, L: 10.50, TM: null },
    universityIds: [2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47],
  },
  {
    id: "fr",
    name: "Licence en Langue Française",
    domain: "Lettres et Langues Étrangères",
    filiere: "Langue Française",
    description: "Linguistique française, littérature francophone et traduction.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.00, M: null, MT: null, L: 10.50, TM: null },
    universityIds: [2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 29, 30, 31, 33, 34, 35, 36, 38, 43, 44, 45, 46, 47],
  },
  {
    id: "en",
    name: "Licence en Langue Anglaise",
    domain: "Lettres et Langues Étrangères",
    filiere: "Langue Anglaise",
    description: "Linguistique anglaise, littérature britannique et américaine.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.00, M: null, MT: null, L: 10.50, TM: null },
    universityIds: [2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 29, 30, 33, 34, 35, 36, 38, 43, 44, 45, 46, 47],
  },
  {
    id: "espagnol",
    name: "Licence en Langue Espagnole",
    domain: "Lettres et Langues Étrangères",
    filiere: "Langue Espagnole",
    description: "Espagnol avancé, littérature hispanique et traduction.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.00, M: null, MT: null, L: 10.50, TM: null },
    universityIds: [2, 7, 9, 12, 14, 15, 21, 25],
  },
  {
    id: "traduction",
    name: "Licence en Traduction",
    domain: "Lettres et Langues Étrangères",
    filiere: "Traduction",
    description: "Traduction Arabe/Français/Anglais, interprétariat et terminologie.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.50, M: null, MT: null, L: 11.00, TM: null },
    universityIds: [2, 3, 7, 9, 12, 14, 15, 16, 21],
  },

  // ── Sciences Humaines et Sociales ────────────────────────
  {
    id: "histoire",
    name: "Licence en Histoire",
    domain: "Sciences Humaines et Sociales",
    filiere: "Histoire",
    description: "Histoire ancienne, médiévale, moderne et contemporaine de l'Algérie.",
    bacTypes: ["L", "S", "M"],
    moyennes: { S: 10.00, M: 10.00, MT: null, L: 10.50, TM: null },
    universityIds: [2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47],
  },
  {
    id: "geographie",
    name: "Licence en Géographie et Aménagement du Territoire",
    domain: "Sciences Humaines et Sociales",
    filiere: "Géographie",
    description: "Géographie humaine, physique, aménagement et SIG.",
    bacTypes: ["L", "S", "M"],
    moyennes: { S: 10.00, M: 10.00, MT: null, L: 10.50, TM: null },
    universityIds: [2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 29, 33, 34, 35, 36, 38, 43, 44],
  },
  {
    id: "socio",
    name: "Licence en Sociologie",
    domain: "Sciences Humaines et Sociales",
    filiere: "Sociologie",
    description: "Sociologie générale, démographie et développement social.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.00, M: null, MT: null, L: 10.50, TM: null },
    universityIds: [2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 29, 33, 34, 36, 38, 43, 44],
  },
  {
    id: "psycho",
    name: "Licence en Psychologie",
    domain: "Sciences Humaines et Sociales",
    filiere: "Psychologie",
    description: "Psychologie clinique, cognitive, sociale et du développement.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.00, M: null, MT: null, L: 10.50, TM: null },
    universityIds: [2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 21, 24, 25, 27, 29, 33, 34, 36, 38, 43, 44],
  },
  {
    id: "sc-educ",
    name: "Licence en Sciences de l'Éducation",
    domain: "Sciences Humaines et Sociales",
    filiere: "Sciences de l'Éducation",
    description: "Pédagogie, didactique, psychologie scolaire et formation des enseignants.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.00, M: null, MT: null, L: 10.50, TM: null },
    universityIds: [2, 3, 7, 9, 12, 14, 15, 16, 18, 21, 24, 25, 36, 38, 43],
  },
  {
    id: "philo",
    name: "Licence en Philosophie",
    domain: "Sciences Humaines et Sociales",
    filiere: "Philosophie",
    description: "Philosophie générale, éthique, logique et épistémologie.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.00, M: null, MT: null, L: 10.50, TM: null },
    universityIds: [2, 3, 7, 9, 12, 14, 15, 16, 21, 25, 36, 38],
  },
  {
    id: "sc-info",
    name: "Licence en Sciences de l'Information et de la Communication",
    domain: "Sciences Humaines et Sociales",
    filiere: "Sciences de l'Information et de la Communication",
    description: "Journalisme, communication institutionnelle et bibliothéconomie.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.00, M: null, MT: null, L: 11.00, TM: null },
    universityIds: [2, 3, 7, 9, 12, 14, 15, 16, 21, 24, 25, 36, 38],
  },

  // ── Sciences Islamiques ──────────────────────────────────
  {
    id: "sc-isl",
    name: "Licence en Sciences Islamiques",
    domain: "Sciences Islamiques",
    filiere: "Sciences Islamiques",
    description: "Coran, Hadith, Fiqh, Usul et Aqida.",
    bacTypes: ["L", "S", "M"],
    moyennes: { S: 10.00, M: 10.00, MT: null, L: 10.50, TM: null },
    universityIds: [2, 3, 7, 9, 12, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48],
  },

  // ── Art et Cultures ──────────────────────────────────────
  {
    id: "art-plast",
    name: "Licence en Arts Plastiques",
    domain: "Arts et Culture",
    filiere: "Arts Plastiques",
    description: "Peinture, sculpture, arts graphiques et expression artistique.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.00, M: null, MT: null, L: 10.50, TM: null },
    universityIds: [2, 7, 9, 14, 15, 21],
  },
  {
    id: "musique",
    name: "Licence en Musique",
    domain: "Arts et Culture",
    filiere: "Musique",
    description: "Musicologie, composition, instrument et culture musicale.",
    bacTypes: ["L", "S"],
    moyennes: { S: 10.00, M: null, MT: null, L: 10.50, TM: null },
    universityIds: [2, 7, 9, 14, 21],
  },
];

// ── Helper: liste unique des wilayas ─────────────────────────
const WILAYAS = [...new Set(UNIVERSITIES.map((u) => u.wilaya))].sort();

// ── Helper: liste unique des domaines ────────────────────────
const DOMAINS = [...new Set(FORMATIONS.map((f) => f.domain))].sort();

// ── Helper: liste unique des filières ────────────────────────
const FILIERES = [...new Set(FORMATIONS.map((f) => f.filiere))].sort();

// ── Helper: map id → université ──────────────────────────────
const UNIV_BY_ID = Object.fromEntries(UNIVERSITIES.map((u) => [u.id, u]));

// ── Helper: map id → formation ───────────────────────────────
const FORM_BY_ID = Object.fromEntries(FORMATIONS.map((f) => [f.id, f]));

// ── Bac types disponibles ────────────────────────────────────
const BAC_TYPES = [
  { code: "S",  label: "Bac S — Sciences Exactes" },
  { code: "M",  label: "Bac M — Mathématiques" },
  { code: "MT", label: "Bac MT — Math & Techniques" },
  { code: "L",  label: "Bac L — Lettres & Sciences Humaines" },
  { code: "TM", label: "Bac TM — Techniques Mathématiques" },
];
