/* ================================================
   UnivDZ – Data
   universities[] and formations[]
   ================================================ */

/*
  Bac types used in Algeria (as specified by the user):
    S  – Bac Scientifique (Sciences Exactes)
    M  – Bac Mathématiques (Mathelem)
    MT – Bac Math-Technique (Sciences & Technologies)

  minAverages:  minimum orientation average per bac type
                (nationale bac orientation 2022-2023 reference values)
*/

// ============================================================
//  UNIVERSITIES
// ============================================================
const universities = [
  // ── ALGER (16) ──────────────────────────────────────────
  {
    id: 1,
    name: "Université des Sciences et de la Technologie Houari Boumediene",
    shortName: "USTHB",
    city: "Alger", wilaya: "Alger",
    lat: 36.7190, lng: 3.1593,
    formations: ["informatique","mathematiques","physique","chimie","electronique","genie-civil","hydraulique","biotechnologie","statistique","genie-chimique"]
  },
  {
    id: 2,
    name: "Université d'Alger 1 – Benyoucef Benkhedda",
    shortName: "UA1",
    city: "Alger", wilaya: "Alger",
    lat: 36.7371, lng: 3.0480,
    formations: ["droit","medecine","pharmacie","dentisterie","lettres-arabes","philosophie","histoire","sciences-politiques","sociologie","psychologie"]
  },
  {
    id: 3,
    name: "Université d'Alger 2 – Abou El Kacem Saâdallah",
    shortName: "UA2",
    city: "Alger", wilaya: "Alger",
    lat: 36.7372, lng: 3.0505,
    formations: ["lettres-francaises","lettres-anglaises","information-communication","sciences-islamiques","lettres-arabes","traduction"]
  },
  {
    id: 4,
    name: "Université d'Alger 3",
    shortName: "UA3",
    city: "Alger", wilaya: "Alger",
    lat: 36.7600, lng: 3.0320,
    formations: ["economie","gestion","sciences-commerciales","sciences-financieres"]
  },

  // ── ORAN (31) ────────────────────────────────────────────
  {
    id: 5,
    name: "Université Oran 1 – Ahmed Ben Bella",
    shortName: "UO1",
    city: "Oran", wilaya: "Oran",
    lat: 35.7070, lng: -0.6520,
    formations: ["droit","lettres-francaises","lettres-arabes","sociologie","histoire","geographie","psychologie","sciences-islamiques","information-communication"]
  },
  {
    id: 6,
    name: "Université Oran 2 – Mohamed Ben Ahmed",
    shortName: "UO2",
    city: "Oran", wilaya: "Oran",
    lat: 35.6870, lng: -0.6600,
    formations: ["economie","gestion","sciences-commerciales","lettres-anglaises","sciences-financieres"]
  },
  {
    id: 7,
    name: "Université des Sciences et de la Technologie d'Oran",
    shortName: "USTO",
    city: "Oran", wilaya: "Oran",
    lat: 35.6400, lng: -0.5900,
    formations: ["informatique","mathematiques","physique","chimie","genie-civil","genie-mecanique","genie-chimique","electronique","automatique","genie-electrique"]
  },

  // ── CONSTANTINE (25) ─────────────────────────────────────
  {
    id: 8,
    name: "Université Constantine 1 – Frères Mentouri",
    shortName: "UC1",
    city: "Constantine", wilaya: "Constantine",
    lat: 36.3650, lng: 6.6147,
    formations: ["sciences-nature-vie","chimie","physique","architecture","genie-civil","agronomie","biologie","geologie"]
  },
  {
    id: 9,
    name: "Université Constantine 2 – Abdelhamid Mehri",
    shortName: "UC2",
    city: "Constantine", wilaya: "Constantine",
    lat: 36.3800, lng: 6.6400,
    formations: ["informatique","mathematiques","electronique","genie-electrique","automatique","statistique"]
  },
  {
    id: 10,
    name: "Université Constantine 3 – Salah Boubnider",
    shortName: "UC3",
    city: "Constantine", wilaya: "Constantine",
    lat: 36.3500, lng: 6.5900,
    formations: ["medecine","pharmacie","dentisterie","sciences-nature-vie"]
  },

  // ── ANNABA (23) ──────────────────────────────────────────
  {
    id: 11,
    name: "Université Badji Mokhtar – Annaba",
    shortName: "UBMA",
    city: "Annaba", wilaya: "Annaba",
    lat: 36.9000, lng: 7.7667,
    formations: ["informatique","mathematiques","physique","chimie","genie-civil","genie-mecanique","sciences-nature-vie","droit","economie","lettres-anglaises","geologie","automatique"]
  },

  // ── BEJAIA (6) ───────────────────────────────────────────
  {
    id: 12,
    name: "Université Abderrahmane Mira – Béjaïa",
    shortName: "UAMB",
    city: "Béjaïa", wilaya: "Béjaïa",
    lat: 36.7509, lng: 5.0564,
    formations: ["informatique","mathematiques","physique","chimie","genie-civil","genie-mecanique","sciences-nature-vie","economie","gestion","lettres-berberes","sciences-alimentaires"]
  },

  // ── SETIF (19) ───────────────────────────────────────────
  {
    id: 13,
    name: "Université Ferhat Abbas – Sétif 1",
    shortName: "UFAS1",
    city: "Sétif", wilaya: "Sétif",
    lat: 36.1912, lng: 5.4130,
    formations: ["medecine","sciences-nature-vie","chimie","physique","genie-civil","genie-mecanique","architecture","biologie","geologie"]
  },
  {
    id: 14,
    name: "Université Mohamed Lamine Debaghine – Sétif 2",
    shortName: "UMLD",
    city: "Sétif", wilaya: "Sétif",
    lat: 36.1800, lng: 5.4000,
    formations: ["droit","economie","gestion","lettres-francaises","lettres-arabes","sociologie","histoire","psychologie"]
  },

  // ── BATNA (5) ────────────────────────────────────────────
  {
    id: 15,
    name: "Université Batna 1 – Hadj Lakhdar",
    shortName: "UB1",
    city: "Batna", wilaya: "Batna",
    lat: 35.5553, lng: 6.1741,
    formations: ["droit","lettres-arabes","sciences-islamiques","lettres-francaises","histoire","philosophie","sociologie"]
  },
  {
    id: 16,
    name: "Université Batna 2 – Mostefa Ben Boulaïd",
    shortName: "UB2",
    city: "Batna", wilaya: "Batna",
    lat: 35.5400, lng: 6.1600,
    formations: ["informatique","mathematiques","physique","chimie","genie-civil","genie-mecanique","electronique","sciences-nature-vie","automatique","genie-electrique"]
  },

  // ── BLIDA (9) ────────────────────────────────────────────
  {
    id: 17,
    name: "Université Saad Dahlab – Blida 1",
    shortName: "USDB",
    city: "Blida", wilaya: "Blida",
    lat: 36.4697, lng: 2.8322,
    formations: ["informatique","mathematiques","physique","genie-civil","genie-mecanique","electronique","medecine","pharmacie","automatique","genie-electrique"]
  },

  // ── TLEMCEN (13) ─────────────────────────────────────────
  {
    id: 18,
    name: "Université Abou Bekr Belkaïd – Tlemcen",
    shortName: "UABB",
    city: "Tlemcen", wilaya: "Tlemcen",
    lat: 34.8833, lng: -1.3167,
    formations: ["informatique","mathematiques","physique","chimie","genie-civil","medecine","droit","economie","lettres-arabes","lettres-francaises","sciences-nature-vie"]
  },

  // ── TIZI OUZOU (15) ──────────────────────────────────────
  {
    id: 19,
    name: "Université Mouloud Mammeri – Tizi Ouzou",
    shortName: "UMMTO",
    city: "Tizi Ouzou", wilaya: "Tizi Ouzou",
    lat: 36.7116, lng: 4.0472,
    formations: ["informatique","mathematiques","physique","chimie","genie-civil","genie-mecanique","electronique","droit","lettres-francaises","lettres-berberes","sciences-nature-vie"]
  },

  // ── BISKRA (7) ───────────────────────────────────────────
  {
    id: 20,
    name: "Université Mohamed Khider – Biskra",
    shortName: "UMKB",
    city: "Biskra", wilaya: "Biskra",
    lat: 34.8500, lng: 5.7333,
    formations: ["informatique","mathematiques","genie-civil","architecture","electronique","droit","lettres-arabes","economie","genie-mecanique"]
  },

  // ── OUARGLA (30) ─────────────────────────────────────────
  {
    id: 21,
    name: "Université Kasdi Merbah – Ouargla",
    shortName: "UKMO",
    city: "Ouargla", wilaya: "Ouargla",
    lat: 31.9500, lng: 5.3250,
    formations: ["informatique","mathematiques","physique","chimie","genie-civil","sciences-nature-vie","droit","economie","geologie"]
  },

  // ── GUELMA (24) ──────────────────────────────────────────
  {
    id: 22,
    name: "Université 8 Mai 1945 – Guelma",
    shortName: "U8M45",
    city: "Guelma", wilaya: "Guelma",
    lat: 36.4639, lng: 7.4261,
    formations: ["informatique","mathematiques","genie-civil","sciences-nature-vie","lettres-arabes","droit","chimie"]
  },

  // ── JIJEL (18) ───────────────────────────────────────────
  {
    id: 23,
    name: "Université Mohamed Seddik Ben Yahia – Jijel",
    shortName: "UMSBYJ",
    city: "Jijel", wilaya: "Jijel",
    lat: 36.8197, lng: 5.7664,
    formations: ["informatique","mathematiques","genie-civil","sciences-nature-vie","chimie","genie-mecanique"]
  },

  // ── SKIKDA (21) ──────────────────────────────────────────
  {
    id: 24,
    name: "Université 20 Août 1955 – Skikda",
    shortName: "U20A55",
    city: "Skikda", wilaya: "Skikda",
    lat: 36.8783, lng: 6.9053,
    formations: ["genie-chimique","chimie","genie-civil","informatique","sciences-nature-vie","genie-mecanique"]
  },

  // ── TIARET (14) ──────────────────────────────────────────
  {
    id: 25,
    name: "Université Ibn Khaldoun – Tiaret",
    shortName: "UIKTH",
    city: "Tiaret", wilaya: "Tiaret",
    lat: 35.3711, lng: 1.3217,
    formations: ["agronomie","sciences-veterinaires","informatique","genie-civil","droit","economie","sciences-nature-vie"]
  },

  // ── M'SILA (28) ──────────────────────────────────────────
  {
    id: 26,
    name: "Université Mohamed Boudiaf – M'sila",
    shortName: "UMBOM",
    city: "M'sila", wilaya: "M'sila",
    lat: 35.7017, lng: 4.5439,
    formations: ["informatique","mathematiques","genie-civil","sciences-nature-vie","droit","lettres-arabes","electronique","genie-mecanique"]
  },

  // ── MOSTAGANEM (27) ──────────────────────────────────────
  {
    id: 27,
    name: "Université Abdelhamid Ibn Badis – Mostaganem",
    shortName: "UAIBM",
    city: "Mostaganem", wilaya: "Mostaganem",
    lat: 35.9316, lng: 0.0892,
    formations: ["informatique","mathematiques","genie-civil","sciences-nature-vie","chimie","droit","lettres-arabes","lettres-francaises","agronomie"]
  },

  // ── SIDI BEL ABBES (22) ──────────────────────────────────
  {
    id: 28,
    name: "Université Djillali Liabès – Sidi Bel Abbès",
    shortName: "UDL",
    city: "Sidi Bel Abbès", wilaya: "Sidi Bel Abbès",
    lat: 35.1897, lng: -0.6297,
    formations: ["informatique","mathematiques","physique","chimie","genie-civil","genie-mecanique","electronique","droit","economie","lettres-arabes","automatique"]
  },

  // ── BOUIRA (10) ──────────────────────────────────────────
  {
    id: 29,
    name: "Université Akli Mohand Oulhadj – Bouira",
    shortName: "UAMOB",
    city: "Bouira", wilaya: "Bouira",
    lat: 36.3800, lng: 3.9008,
    formations: ["informatique","sciences-nature-vie","genie-civil","droit","lettres-arabes","lettres-berberes"]
  },

  // ── KHENCHELA (40) ───────────────────────────────────────
  {
    id: 30,
    name: "Université Abbas Laghrour – Khenchela",
    shortName: "UALK",
    city: "Khenchela", wilaya: "Khenchela",
    lat: 35.4353, lng: 7.1456,
    formations: ["informatique","mathematiques","sciences-nature-vie","droit","lettres-arabes"]
  },

  // ── BORDJ BOU ARRERIDJ (34) ──────────────────────────────
  {
    id: 31,
    name: "Université Mohamed El Bachir El Ibrahimi – Bordj Bou Arréridj",
    shortName: "UMBEIB",
    city: "Bordj Bou Arréridj", wilaya: "Bordj Bou Arréridj",
    lat: 36.0731, lng: 4.7600,
    formations: ["informatique","mathematiques","electronique","genie-electrique","sciences-nature-vie","droit","genie-mecanique"]
  },

  // ── MEDEA (26) ───────────────────────────────────────────
  {
    id: 32,
    name: "Université Yahia Fares – Médéa",
    shortName: "UYFM",
    city: "Médéa", wilaya: "Médéa",
    lat: 36.2636, lng: 2.7519,
    formations: ["informatique","sciences-nature-vie","genie-civil","droit","lettres-arabes","chimie"]
  },

  // ── SOUK AHRAS (41) ──────────────────────────────────────
  {
    id: 33,
    name: "Université Mohamed Chérif Messaadia – Souk Ahras",
    shortName: "UMCMS",
    city: "Souk Ahras", wilaya: "Souk Ahras",
    lat: 36.2842, lng: 7.9514,
    formations: ["informatique","sciences-nature-vie","genie-civil","droit","lettres-arabes","economie"]
  },

  // ── CHLEF (2) ────────────────────────────────────────────
  {
    id: 34,
    name: "Université Hassiba Benbouali – Chlef",
    shortName: "UHBC",
    city: "Chlef", wilaya: "Chlef",
    lat: 36.1647, lng: 1.3317,
    formations: ["informatique","genie-civil","genie-mecanique","sciences-nature-vie","droit","economie","chimie"]
  },

  // ── TEBESSA (12) ─────────────────────────────────────────
  {
    id: 35,
    name: "Université Larbi Tébessi – Tébessa",
    shortName: "ULTB",
    city: "Tébessa", wilaya: "Tébessa",
    lat: 35.4047, lng: 8.1203,
    formations: ["informatique","mathematiques","genie-civil","sciences-nature-vie","droit","lettres-arabes","geologie"]
  },

  // ── EL OUED (39) ─────────────────────────────────────────
  {
    id: 36,
    name: "Université Echahid Hamma Lakhdar – El Oued",
    shortName: "UEHLO",
    city: "El Oued", wilaya: "El Oued",
    lat: 33.3556, lng: 6.8639,
    formations: ["informatique","mathematiques","sciences-nature-vie","droit","lettres-arabes","economie"]
  },

  // ── BECHAR (8) ───────────────────────────────────────────
  {
    id: 37,
    name: "Université Tahri Mohamed – Béchar",
    shortName: "UTMB",
    city: "Béchar", wilaya: "Béchar",
    lat: 31.6167, lng: -2.2167,
    formations: ["informatique","mathematiques","genie-civil","sciences-nature-vie","droit","geologie"]
  },

  // ── GHARDAIA (47) ────────────────────────────────────────
  {
    id: 38,
    name: "Université Ghardaïa",
    shortName: "UGH",
    city: "Ghardaïa", wilaya: "Ghardaïa",
    lat: 32.4908, lng: 3.6736,
    formations: ["informatique","sciences-nature-vie","droit","lettres-arabes","sciences-islamiques"]
  },

  // ── ADRAR (1) ────────────────────────────────────────────
  {
    id: 39,
    name: "Université Ahmed Draia – Adrar",
    shortName: "UADA",
    city: "Adrar", wilaya: "Adrar",
    lat: 27.8667, lng: -0.2833,
    formations: ["informatique","mathematiques","droit","lettres-arabes","sciences-islamiques"]
  },

  // ── TAMANRASSET (11) ─────────────────────────────────────
  {
    id: 40,
    name: "Université de Tamanrasset",
    shortName: "UTAM",
    city: "Tamanrasset", wilaya: "Tamanrasset",
    lat: 22.7853, lng: 5.5228,
    formations: ["informatique","droit","lettres-arabes","sciences-islamiques"]
  },

  // ── MASCARA (29) ─────────────────────────────────────────
  {
    id: 41,
    name: "Université Mustapha Stambouli – Mascara",
    shortName: "UMSM",
    city: "Mascara", wilaya: "Mascara",
    lat: 35.3994, lng: 0.1403,
    formations: ["informatique","sciences-nature-vie","genie-civil","droit","economie","chimie"]
  },

  // ── TISSEMSILT (38) ──────────────────────────────────────
  {
    id: 42,
    name: "Université Ahmed Benbella – Tissemsilt",
    shortName: "UABT",
    city: "Tissemsilt", wilaya: "Tissemsilt",
    lat: 35.6053, lng: 1.8119,
    formations: ["informatique","sciences-nature-vie","droit","lettres-arabes"]
  }
];

// ============================================================
//  FORMATIONS
// ============================================================
const formations = [
  // ── Sciences & Technologie ──────────────────────────────
  {
    id: "informatique",
    name: "Licence en Informatique",
    mention: "Informatique",
    domain: "Mathématiques et Informatique",
    type: "Sciences et Technologie",
    description: "Algorithmique, programmation (Python, Java, C++), bases de données, réseaux, cybersécurité et intelligence artificielle.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 15.33, M: 14.27, MT: 14.50 },
    duration: "Licence – 3 ans"
  },
  {
    id: "mathematiques",
    name: "Licence en Mathématiques",
    mention: "Mathématiques",
    domain: "Mathématiques et Informatique",
    type: "Sciences Fondamentales",
    description: "Algèbre, analyse, géométrie différentielle, topologie, probabilités et statistiques.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 14.50, M: 15.20, MT: 14.00 },
    duration: "Licence – 3 ans"
  },
  {
    id: "physique",
    name: "Licence en Physique",
    mention: "Physique",
    domain: "Sciences de la Matière",
    type: "Sciences Fondamentales",
    description: "Mécanique classique, électromagnétisme, optique, thermodynamique et physique quantique.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 13.80, M: 13.20, MT: 13.50 },
    duration: "Licence – 3 ans"
  },
  {
    id: "chimie",
    name: "Licence en Chimie",
    mention: "Chimie",
    domain: "Sciences de la Matière",
    type: "Sciences Fondamentales",
    description: "Chimie organique, inorganique, analytique, physico-chimie et chimie des polymères.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 13.50, M: 13.00, MT: 13.20 },
    duration: "Licence – 3 ans"
  },
  {
    id: "electronique",
    name: "Licence Électronique",
    mention: "Électronique",
    domain: "Sciences et Technologies",
    type: "Sciences et Technologie",
    description: "Électronique analogique et numérique, microcontrôleurs, traitement du signal, circuits intégrés.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 13.80, M: 13.60, MT: 15.40 },
    duration: "Licence – 3 ans"
  },
  {
    id: "genie-civil",
    name: "Licence Génie Civil",
    mention: "Génie Civil",
    domain: "Sciences et Technologies",
    type: "Sciences et Technologie",
    description: "Structures, béton armé, mécanique des sols, routes et ouvrages d'art.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 13.50, M: 13.20, MT: 15.20 },
    duration: "Licence – 3 ans"
  },
  {
    id: "genie-mecanique",
    name: "Licence Génie Mécanique",
    mention: "Génie Mécanique",
    domain: "Sciences et Technologies",
    type: "Sciences et Technologie",
    description: "Mécanique des solides et des fluides, thermodynamique, fabrication et productique.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 13.70, M: 13.50, MT: 15.50 },
    duration: "Licence – 3 ans"
  },
  {
    id: "genie-electrique",
    name: "Licence Génie Électrique",
    mention: "Génie Électrique",
    domain: "Sciences et Technologies",
    type: "Sciences et Technologie",
    description: "Électrotechnique, machines électriques, réseaux électriques, production et distribution d'énergie.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 13.60, M: 13.30, MT: 15.30 },
    duration: "Licence – 3 ans"
  },
  {
    id: "automatique",
    name: "Licence Automatique",
    mention: "Automatique",
    domain: "Sciences et Technologies",
    type: "Sciences et Technologie",
    description: "Systèmes de contrôle et régulation, automatismes industriels, robotique et traitement du signal.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 14.00, M: 13.80, MT: 15.60 },
    duration: "Licence – 3 ans"
  },
  {
    id: "genie-chimique",
    name: "Licence Génie Chimique",
    mention: "Génie Chimique",
    domain: "Sciences et Technologies",
    type: "Sciences et Technologie",
    description: "Génie des procédés, thermodynamique chimique, opérations unitaires et génie des réacteurs.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 13.40, M: 13.00, MT: 13.80 },
    duration: "Licence – 3 ans"
  },
  {
    id: "hydraulique",
    name: "Licence Hydraulique",
    mention: "Hydraulique",
    domain: "Sciences et Technologies",
    type: "Sciences et Technologie",
    description: "Hydraulique fluviale, hydrogéologie, gestion des ressources en eau et irrigation.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 13.20, M: 13.00, MT: 14.80 },
    duration: "Licence – 3 ans"
  },
  {
    id: "architecture",
    name: "Licence Architecture",
    mention: "Architecture",
    domain: "Architecture et Urbanisme",
    type: "Sciences et Technologie",
    description: "Conception architecturale, dessin technique, urbanisme, histoire de l'architecture et patrimoine.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 14.20, M: 13.80, MT: 15.00 },
    duration: "Licence – 3 ans (+ 2 ans Master)"
  },
  {
    id: "statistique",
    name: "Licence Statistique et Informatique Décisionnelle",
    mention: "Statistique",
    domain: "Mathématiques et Informatique",
    type: "Sciences Fondamentales",
    description: "Statistiques inférentielles, analyse de données, aide à la décision, bases de données et R/Python.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 14.00, M: 14.50, MT: 13.80 },
    duration: "Licence – 3 ans"
  },
  {
    id: "topographie",
    name: "Licence Topographie",
    mention: "Topographie",
    domain: "Sciences et Technologies",
    type: "Sciences et Technologie",
    description: "Levé topographique, cartographie, photogrammétrie et systèmes d'information géographique (SIG).",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 13.50, M: 13.20, MT: 14.50 },
    duration: "Licence – 3 ans"
  },
  {
    id: "geologie",
    name: "Licence Géologie",
    mention: "Géologie",
    domain: "Sciences de la Terre et de l'Univers",
    type: "Sciences de la Terre",
    description: "Géologie structurale, minéralogie, pétrologie, paléontologie et hydrogéologie.",
    bacTypes: ["S","M","MT"],
    minAverages: { S: 12.80, M: 12.50, MT: 12.60 },
    duration: "Licence – 3 ans"
  },

  // ── Sciences Biologiques ─────────────────────────────────
  {
    id: "sciences-nature-vie",
    name: "Licence Sciences de la Nature et de la Vie",
    mention: "SNV",
    domain: "Sciences de la Nature et de la Vie",
    type: "Sciences Biologiques",
    description: "Biologie cellulaire, écologie, génétique, microbiologie, physiologie végétale et animale.",
    bacTypes: ["S"],
    minAverages: { S: 12.50 },
    duration: "Licence – 3 ans"
  },
  {
    id: "biologie",
    name: "Licence en Biologie",
    mention: "Biologie",
    domain: "Sciences de la Nature et de la Vie",
    type: "Sciences Biologiques",
    description: "Biologie moléculaire, biochimie, biologie des organismes, embryologie et histologie.",
    bacTypes: ["S"],
    minAverages: { S: 13.20 },
    duration: "Licence – 3 ans"
  },
  {
    id: "biotechnologie",
    name: "Licence Biotechnologie",
    mention: "Biotechnologie",
    domain: "Sciences de la Nature et de la Vie",
    type: "Sciences Biologiques",
    description: "Génie génétique, culture cellulaire, bioprocédés, biotechnologies végétale et animale.",
    bacTypes: ["S"],
    minAverages: { S: 15.00 },
    duration: "Licence – 3 ans"
  },
  {
    id: "agronomie",
    name: "Licence Sciences Agronomiques",
    mention: "Agronomie",
    domain: "Sciences Agronomiques",
    type: "Sciences Agronomiques",
    description: "Productions végétales, zootechnie, pédologie, irrigation, économie rurale et développement agricole.",
    bacTypes: ["S"],
    minAverages: { S: 12.80 },
    duration: "Licence – 3 ans"
  },
  {
    id: "sciences-alimentaires",
    name: "Licence Sciences Alimentaires",
    mention: "Sciences Alimentaires",
    domain: "Sciences Agronomiques",
    type: "Sciences Agronomiques",
    description: "Technologie alimentaire, contrôle qualité, hygiène et sécurité sanitaire des aliments.",
    bacTypes: ["S"],
    minAverages: { S: 13.80 },
    duration: "Licence – 3 ans"
  },

  // ── Sciences Médicales ───────────────────────────────────
  {
    id: "medecine",
    name: "Doctorat en Médecine",
    mention: "Médecine",
    domain: "Sciences Médicales",
    type: "Sciences Médicales",
    description: "Formation médicale complète : anatomie, physiologie, sémiologie, pathologie et stages cliniques hospitaliers.",
    bacTypes: ["S"],
    minAverages: { S: 17.50 },
    duration: "Doctorat – 7 ans"
  },
  {
    id: "pharmacie",
    name: "Doctorat en Pharmacie",
    mention: "Pharmacie",
    domain: "Sciences Médicales",
    type: "Sciences Médicales",
    description: "Pharmacologie, chimie pharmaceutique, galénique, pharmacie clinique et officinale.",
    bacTypes: ["S"],
    minAverages: { S: 16.80 },
    duration: "Doctorat – 5 ans"
  },
  {
    id: "dentisterie",
    name: "Doctorat en Chirurgie Dentaire",
    mention: "Chirurgie Dentaire",
    domain: "Sciences Médicales",
    type: "Sciences Médicales",
    description: "Stomatologie, odontologie conservatrice, prothèse dentaire, orthodontie et chirurgie buccale.",
    bacTypes: ["S"],
    minAverages: { S: 16.20 },
    duration: "Doctorat – 5 ans"
  },
  {
    id: "sciences-veterinaires",
    name: "Doctorat Vétérinaire",
    mention: "Sciences Vétérinaires",
    domain: "Sciences Vétérinaires",
    type: "Sciences Médicales",
    description: "Anatomie animale, pathologie, clinique vétérinaire, zoonoses et inspection des denrées alimentaires.",
    bacTypes: ["S"],
    minAverages: { S: 15.50 },
    duration: "Doctorat – 5 ans"
  },

  // ── Sciences Économiques ─────────────────────────────────
  {
    id: "economie",
    name: "Licence en Économie",
    mention: "Économie",
    domain: "Sciences Économiques, Commerciales et de Gestion",
    type: "Sciences Économiques",
    description: "Microéconomie, macroéconomie, économétrie, économie internationale et politique économique.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.50, M: 13.20 },
    duration: "Licence – 3 ans"
  },
  {
    id: "gestion",
    name: "Licence en Gestion",
    mention: "Gestion",
    domain: "Sciences Économiques, Commerciales et de Gestion",
    type: "Sciences Économiques",
    description: "Management, ressources humaines, comptabilité analytique, finance et contrôle de gestion.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.30, M: 13.00 },
    duration: "Licence – 3 ans"
  },
  {
    id: "sciences-commerciales",
    name: "Licence Sciences Commerciales",
    mention: "Sciences Commerciales",
    domain: "Sciences Économiques, Commerciales et de Gestion",
    type: "Sciences Économiques",
    description: "Marketing, commerce international, techniques de vente, logistique et distribution.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.20, M: 13.10 },
    duration: "Licence – 3 ans"
  },
  {
    id: "sciences-financieres",
    name: "Licence Sciences Financières et Comptabilité",
    mention: "Sciences Financières",
    domain: "Sciences Économiques, Commerciales et de Gestion",
    type: "Sciences Économiques",
    description: "Comptabilité générale, finance d'entreprise, audit, fiscalité et marchés financiers.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.50, M: 13.50 },
    duration: "Licence – 3 ans"
  },

  // ── Sciences Juridiques ──────────────────────────────────
  {
    id: "droit",
    name: "Licence en Droit",
    mention: "Droit",
    domain: "Droit et Sciences Politiques",
    type: "Sciences Juridiques",
    description: "Droit civil, pénal, public, administratif, commercial et droit international public et privé.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.80, M: 13.30 },
    duration: "Licence – 3 ans"
  },
  {
    id: "sciences-politiques",
    name: "Licence Sciences Politiques",
    mention: "Sciences Politiques",
    domain: "Droit et Sciences Politiques",
    type: "Sciences Juridiques",
    description: "Théorie politique, institutions comparées, relations internationales et gouvernance.",
    bacTypes: ["S","M"],
    minAverages: { S: 13.00, M: 13.50 },
    duration: "Licence – 3 ans"
  },

  // ── Sciences Humaines ────────────────────────────────────
  {
    id: "sociologie",
    name: "Licence en Sociologie",
    mention: "Sociologie",
    domain: "Sciences Sociales",
    type: "Sciences Humaines",
    description: "Sociologie générale, anthropologie sociale, méthodes de recherche et sociologie algérienne.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.00, M: 12.50 },
    duration: "Licence – 3 ans"
  },
  {
    id: "psychologie",
    name: "Licence en Psychologie",
    mention: "Psychologie",
    domain: "Sciences Sociales",
    type: "Sciences Humaines",
    description: "Psychologie clinique, cognitive, sociale, du développement et psychopathologie.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.50, M: 13.00 },
    duration: "Licence – 3 ans"
  },
  {
    id: "histoire",
    name: "Licence en Histoire",
    mention: "Histoire",
    domain: "Sciences Humaines",
    type: "Sciences Humaines",
    description: "Histoire ancienne, médiévale, moderne, contemporaine et histoire de l'Algérie et du Maghreb.",
    bacTypes: ["S","M"],
    minAverages: { S: 11.80, M: 12.20 },
    duration: "Licence – 3 ans"
  },
  {
    id: "geographie",
    name: "Licence en Géographie",
    mention: "Géographie",
    domain: "Sciences Humaines",
    type: "Sciences Humaines",
    description: "Géographie physique, humaine, aménagement du territoire, cartographie et SIG.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.00, M: 12.50 },
    duration: "Licence – 3 ans"
  },
  {
    id: "philosophie",
    name: "Licence en Philosophie",
    mention: "Philosophie",
    domain: "Sciences Humaines",
    type: "Sciences Humaines",
    description: "Logique, épistémologie, éthique, métaphysique et histoire de la philosophie.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.00, M: 12.50 },
    duration: "Licence – 3 ans"
  },
  {
    id: "information-communication",
    name: "Licence Sciences de l'Information et de la Communication",
    mention: "SIC",
    domain: "Sciences de l'Information et de la Communication",
    type: "Sciences Humaines",
    description: "Journalisme, communication institutionnelle, médias numériques et sciences documentaires.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.70, M: 13.00 },
    duration: "Licence – 3 ans"
  },

  // ── Lettres et Langues ───────────────────────────────────
  {
    id: "lettres-arabes",
    name: "Licence Langue et Littérature Arabes",
    mention: "Lettres Arabes",
    domain: "Lettres et Langues",
    type: "Lettres et Langues",
    description: "Linguistique arabe, littérature classique et contemporaine, rhétorique et civilisation arabo-islamique.",
    bacTypes: ["S","M"],
    minAverages: { S: 11.50, M: 12.00 },
    duration: "Licence – 3 ans"
  },
  {
    id: "lettres-francaises",
    name: "Licence Langue et Littérature Françaises",
    mention: "Lettres Françaises",
    domain: "Lettres et Langues",
    type: "Lettres et Langues",
    description: "Linguistique française, littérature francophone, didactique du FLE et stylistique.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.00, M: 12.30 },
    duration: "Licence – 3 ans"
  },
  {
    id: "lettres-anglaises",
    name: "Licence Langue et Littérature Anglaises",
    mention: "Lettres Anglaises",
    domain: "Lettres et Langues",
    type: "Lettres et Langues",
    description: "Linguistique anglaise, littérature britannique et américaine, civilisation anglosaxonne.",
    bacTypes: ["S","M"],
    minAverages: { S: 12.50, M: 13.00 },
    duration: "Licence – 3 ans"
  },
  {
    id: "lettres-berberes",
    name: "Licence Langue et Culture Amazighes (Tamazight)",
    mention: "Tamazight",
    domain: "Lettres et Langues",
    type: "Lettres et Langues",
    description: "Linguistique berbère, littérature orale et écrite amazighe, dialectologie et culture kabyle.",
    bacTypes: ["S","M"],
    minAverages: { S: 11.00, M: 11.50 },
    duration: "Licence – 3 ans"
  },
  {
    id: "traduction",
    name: "Licence Traduction et Interprétation",
    mention: "Traduction",
    domain: "Lettres et Langues",
    type: "Lettres et Langues",
    description: "Traduction arabe-français-anglais, interprétation consécutive, terminologie et localisation.",
    bacTypes: ["S","M"],
    minAverages: { S: 13.50, M: 13.80 },
    duration: "Licence – 3 ans"
  },

  // ── Sciences Islamiques ──────────────────────────────────
  {
    id: "sciences-islamiques",
    name: "Licence Sciences Islamiques",
    mention: "Sciences Islamiques",
    domain: "Sciences Islamiques",
    type: "Sciences Islamiques",
    description: "Coran, Hadith, Fiqh, Oussoul el Fiqh, Akida et civilisation islamique.",
    bacTypes: ["S","M"],
    minAverages: { S: 11.50, M: 12.00 },
    duration: "Licence – 3 ans"
  }
];

// Build a quick lookup map: formationId → universities[]
const formationUniversities = {};
formations.forEach(f => { formationUniversities[f.id] = []; });
universities.forEach(u => {
  u.formations.forEach(fId => {
    if (formationUniversities[fId]) {
      formationUniversities[fId].push(u.id);
    }
  });
});
