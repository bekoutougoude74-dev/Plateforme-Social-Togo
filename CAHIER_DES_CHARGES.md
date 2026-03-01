# CAHIER DES CHARGES - PLATEFORME SOCIALE (TOGO)

## 1. Introduction
Ce document présente les spécifications fonctionnelles et techniques de la plateforme en charge de la question sociale au Togo. Le but est d’aider les personnes en situation de précarité à une meilleure inclusion sociale par le recensement et la classification des ménages.

## 2. Objectifs du Projet
- Recenser les ménages et leurs résidents.
- Classifier les ménages selon leur niveau de vulnérabilité.
- Identifier les ménages éligibles aux programmes sociaux.
- Offrir une interface sécurisée (2FA) pour les agents et les chefs de ménage.

## 3. Spécifications Fonctionnelles

### 3.1. Back Office (Agent)
- **Connexion sécurisée** : Authentification par login/mot de passe avec support JWT.
- **Enregistrement des ménages** : Formulaire complet incluant les équipements (TV, Radio, Moto, Voiture, Statut de propriété).
- **Gestion des résidents** : Ajout des membres du ménage avec CNI, diplôme, tranche salariale et date de naissance.
- **Calcul automatique du score** : Algorithme de classification basé sur les points définis.
- **Consultation** : Liste filtrable des ménages et visualisation des détails.
- **Programmes Sociaux** : Enregistrement de nouveaux programmes et visualisation automatique des ménages éligibles (vulnérables).

### 3.2. Front Office (Chef de Ménage)
- **Connexion** : Espace dédié pour consulter les informations du ménage.
- **Consultation** : Liste des résidents et catégorie sociale du ménage.

## 4. Spécifications Techniques

### 4.1. Architecture
- **Microservices** : Utilisation de Spring Boot pour le back-end et Angular pour le front-end.
- **Base de données** : PostgreSQL pour la persistance des données.
- **Sécurité** : JWT (JSON Web Tokens) et Authentification à 2 facteurs (2FA).
- **ORM** : Hibernate avec Envers pour l'audit des données.

### 4.2. Algorithme de Classification
Le score est calculé comme suit :
- **Équipements** : TV/Radio (5 pts), Moto (5 pts), Voiture (10 pts).
- **Habitat** : Propriétaire (20 pts).
- **Revenus** : Basé sur la tranche salariale la plus élevée du ménage (de 10 à 55 pts).

**Catégories :**
- < 20 : Très vulnérable
- 20 - 45 : Vulnérable
- 45 - 55 : À risque
- 55 - 70 : Non vulnérable
- 70 - 85 : Riche
- > 85 : Très riche

## 5. Design & Ergonomie
- **Thème** : Dark Premium (Deep Teal #006064 / Amber #FFB300).
- **Composants** : Angular Material 3 avec effets Glassmorphism.
- **Réactivité** : Layout adaptatif pour tablettes et ordinateurs.

## 6. Livrables
- Code source complet (Angular / Spring Boot).
- Ressources de conteneurisation (Docker).
- Guide utilisateur et rapport de test.
