# UnivDZ – Portail Universitaire Algérien

Site web interactif pour explorer les universités et formations (licences) en Algérie après le baccalauréat.

## Fonctionnalités

- 🗺️ **Carte interactive** – Localisation de toutes les universités algériennes sur OpenStreetMap
- 📚 **42 formations** – Toutes les licences disponibles avec domaine, durée et description
- 🏛️ **42 universités** – Couvrant les principales wilayas d'Algérie
- 🔍 **Moteur de recherche** – Recherche par nom de formation, université, wilaya ou ville
- 🎛️ **Filtres latéraux**
  - Wilaya / Ville
  - Type de formation (Sciences & Tech., Médical, Économie, Lettres, etc.)
  - Type de baccalauréat : **Bac S** (Scientifique), **Bac M** (Mathématiques), **Bac MT** (Math-Technique)
  - Moyenne maximale requise (curseur)
- 📊 **Moyennes minimales d'orientation** – Par bac pour chaque formation  
  (ex : Informatique – Bac S : 15.33 | Bac M : 14.27 | Bac MT : 14.50)
- 📋 **Vue grille / liste** – Basculement entre les modes d'affichage
- 🪟 **Modal détails** – Fiche complète pour chaque formation ou université

## Stack technique

- HTML5 / CSS3 / JavaScript vanilla (aucune dépendance côté serveur)
- [Leaflet.js](https://leafletjs.com/) pour la carte interactive
- [OpenStreetMap](https://www.openstreetmap.org/) comme fond de carte
- [Font Awesome](https://fontawesome.com/) pour les icônes
- [Google Fonts – Inter](https://fonts.google.com/specimen/Inter)

## Lancement

Ouvrez simplement `index.html` dans un navigateur ou servez le dossier via un serveur HTTP statique :

```bash
python3 -m http.server 8080
# Puis ouvrir http://localhost:8080
```
