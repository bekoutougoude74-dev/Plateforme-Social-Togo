# 🇹🇬 Plateforme Sociale Togo

Bienvenue sur la **Plateforme Sociale Togo**, une application moderne dédiée au recensement, au scoring social et à l'inclusion des ménages vulnérables.

## 🚀 Démarrage Rapide

1.  **Installation des dépendances :**
    ```powershell
    npm install
    ```

2.  **Lancement de l'application :**
    ```powershell
    npm start
    ```
    L'application sera accessible sur `http://localhost:4200` (ou le port indiqué dans la console).

---

## 🔐 Comptes de Test

Pour tester les différentes interfaces (Chef de Ménage, Agent/Admin), utilisez les identifiants suivants :

| Rôle | Nom d'utilisateur | Mot de passe |
| :--- | :--- | :--- |
| **Administrateur / Agent** | `admin` | `admin` |
| **Chef de Ménage** | `chef` | `chef` |

---

## 🏗️ Structure du Projet

L'application est découpée en deux grandes parties :

### 1. Section Publique (`/`)
Accesible à tous sans connexion :
- **Accueil** : Présentation de la plateforme.
- **À Propos** : Mission et objectifs.
- **Contact** : Support et informations.
- **Services** : Recensement, Scoring Social, Inclusion (Explications).

### 2. Section Privée (`/app`)
Nécessite une authentification :
- **Tableau de Bord** : Statistiques et aperçu global.
- **Ménages** : Gestion des familles (Liste, Nouveau ménage).
- **Programmes Sociaux** : Gestion des aides (Liste, Nouveau programme).
- **Résidents** : Liste de toutes les personnes recensées.

---

## �️ Technologies Utilisées

- **Frontend** : Angular 19+
- **UI Components** : Angular Material (Thème Premium Light)
- **Styles** : SCSS modulaire & Glassmorphism
- **Animations** : Angular Animations (`@angular/animations`)

---

## 📝 Fonctionnalités Clés

- **Formulaire Multi-étapes** : Recensement complet avec stepper intelligent.
- **Gestion des Rôles** : Navigation dynamique selon l'utilisateur.
- **Architecture Scalable** : Lazy loading pour des performances optimales.
- **Design Réactif** : Compatible desktop et mobile (Premium Experience).

---
© 2026 Plateforme Sociale Togo • ESGIS Adidogomé
