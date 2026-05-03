# UnivDZ — Portail Universitaire Algérien

Portail web interactif répertoriant toutes les universités algériennes et les formations en **Licence** disponibles après le Baccalauréat algérien.

## Fonctionnalités

- 🗺 **Carte interactive** de toutes les universités d'Algérie (Leaflet + OpenStreetMap)
- 📋 **Catalogue complet** des licences et formations disponibles
- 🔍 **Moteur de recherche** (formations, filières, universités, villes)
- ⚙ **Filtres** :
  - Wilaya / Ville
  - Domaine de formation
  - Type de bac : **S** (Sciences Exactes), **M** (Mathématiques), **MT** (Math & Techniques), **L** (Lettres), **TM** (Techniques Math)
  - Moyenne minimale (curseur de 10 à 19)
- 📊 **Moyennes minimales d'orientation** par formation et par type de bac
- 🖱 Clic sur une université → liste de ses formations + moyennes
- 🖱 Clic sur une carte formation → détail + tableau des moyennes + liste des universités

## Structure

```
UnivDZ/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles modernes (CSS custom properties, responsive)
├── js/
│   ├── data.js         # Données : 48 universités, 40+ formations
│   └── app.js          # Logique : carte, filtres, recherche, modales
└── README.md
```

## Données incluses

| Catégorie | Nombre |
|-----------|--------|
| Universités / Écoles | 48 |
| Formations (licences) | 42 |
| Wilayas couvertes | 38 |

## Utilisation

Ouvrir `index.html` dans un navigateur (connexion Internet requise pour les tuiles de carte et la police Poppins).

## Technologies

- HTML5 / CSS3 (sans framework)
- JavaScript vanilla (ES6+)
- [Leaflet.js](https://leafletjs.com/) 1.9.4 pour la carte
- [OpenStreetMap](https://www.openstreetmap.org/) pour les tuiles cartographiques
- Google Fonts — Poppins