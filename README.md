# 🚗 Lustro Detailing - Site Web Premium

Site web one-page élégant et premium pour **Lustro Detailing**, spécialisé dans la préparation esthétique automobile.

## 🎨 Caractéristiques

### Design
- **Palette de couleurs** : Noir profond (#0B0B0B) & Doré élégant (#C9A24D)
- **Typographies** : Playfair Display (titres) & Inter (textes)
- **Style** : Luxe, épuré, haut de gamme
- **Responsive** : Mobile-first, optimisé pour tous les écrans

### Sections
1. **Hero** - Bannière d'accueil immersive avec CTA
2. **Présentation** - Expertise et savoir-faire
3. **Prestations** - 6 services détaillés avec icônes
4. **Galerie** - Portfolio avant/après avec lightbox
5. **Réservation** - Système de prise de rendez-vous
6. **Avantages** - 4 points forts de l'entreprise
7. **Contact** - Formulaire et coordonnées
8. **Footer** - Navigation et réseaux sociaux

### Fonctionnalités JavaScript
- Navigation fixe avec effet au scroll
- Menu hamburger mobile
- Animations au scroll (Intersection Observer)
- Lightbox pour la galerie
- Compteurs animés pour les statistiques
- Formulaire de contact avec validation
- Système de notifications
- Effet parallax sur le hero
- Smooth scroll avec offset
- Performance optimisée (debounce, lazy loading)

## 📁 Structure du projet

```
lustro-detailing/
├── index.html          # Structure HTML
├── styles.css          # Styles CSS
├── script.js           # Interactions JavaScript
└── README.md           # Documentation
```

## 🚀 Installation

1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans votre navigateur
3. Aucune dépendance externe requise !

## 🛠️ Personnalisation

### Modifier les couleurs
Dans `styles.css`, section `:root` :
```css
--noir-profond: #0B0B0B;
--dore-principal: #C9A24D;
```

### Ajouter des images
Remplacez les URLs Unsplash dans :
- Hero section (background-image)
- Galerie (src des images)

### Configurer la réservation
Dans `script.js`, fonction `bookingBtn` :
```javascript
// Ajoutez votre lien de réservation (SumUp, Calendly, etc.)
window.location.href = 'https://votre-lien-reservation.com';
```

### Configurer le formulaire de contact
Dans `script.js`, fonction `contactForm` :
```javascript
// Ajoutez votre logique d'envoi (EmailJS, API backend, etc.)
```

## 📱 Responsive Breakpoints

- **Desktop** : > 1024px
- **Tablet** : 768px - 1024px
- **Mobile** : < 768px
- **Small Mobile** : < 480px

## ⚡ Performance

- Images optimisées avec lazy loading
- Animations GPU-accelerated
- Debounce sur les événements scroll
- Code minifiable pour la production

## 🎯 SEO

- Balises meta optimisées
- Structure sémantique HTML5
- Attributs alt sur les images
- Hiérarchie H1-H6 respectée

## 📞 Contact & Support

Pour toute question ou personnalisation :
- Email : contact@lustro-detailing.fr
- Téléphone : 06 XX XX XX XX

## 📄 Licence

© 2026 Lustro Detailing. Tous droits réservés.

---

**Développé avec passion pour l'excellence automobile** ✨
