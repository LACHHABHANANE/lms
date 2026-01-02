# Documentation du Projet LMS (Learning Management System)

Ce document fournit une vue d'ensemble complète du projet LMS, de ses fonctionnalités à son architecture technique, ainsi que les instructions d'installation et d'utilisation.

---

## 1. Introduction

Ce projet est une plateforme d'apprentissage en ligne (LMS) moderne construite avec **Next.js**. Elle permet de gérer deux types d'utilisateurs distincts : les **étudiants** et les **instructeurs**, avec des interfaces et des fonctionnalités adaptées à chaque rôle.

## 2. Fonctionnalités Principales

### Authentification & Sécurité
- **Inscription & Connexion** : Système complet pour créer un compte et se connecter.
- **Gestion des Rôles** : Distinction stricte entre `student` (étudiant) et `instructor` (instructeur).
- **Sécurité** :
  - Mots de passe chiffrés avec **bcryptjs**.
  - Sessions gérées via Tokens (JWT/Cookies) ou sessions sécurisée.
  - Protection des routes (Middleware) pour rediriger les utilisateurs non authentifiés.

### Tableaux de Bord (Dashboards)
Une fois connecté, l'utilisateur est redirigé vers son espace dédié :
- **Espace Étudiant** (`/dashboard/student`) : Pour suivre les cours, voir les progrès, etc.
- **Espace Instructeur** (`/dashboard/instructor`) : Pour gérer les cours, suivre les étudiants, etc.

### Pages Publiques
L'application dispose de plusieurs pages accessibles à tous :
- **Accueil** : Présentation de la plateforme.
- **À propos** (`/a-propos`) : Information sur l'équipe/projet.
- **Contact** (`/contact`) : Formulaire de contact.
- **Cours** (`/cours`) : Catalogue des cours (vue publique).
- **Forum** (`/forum`) : Espace de discussion communautaire.

## 3. Architecture Technique

Le projet repose sur une stack technique moderne et performante :

- **Frontend Framework** : [Next.js 16](https://nextjs.org/) (App Router).
- **Langage** : TypeScript.
- **Interface Utilisateur (UI)** : [React 19](https://react.dev/) avec [Tailwind CSS 4](https://tailwindcss.com/) pour le stylisme.
- **Base de Données** : [MongoDB](https://www.mongodb.com/) (NoSQL).
- **ORM/ODM** : [Mongoose](https://mongoosejs.com/) pour la modélisation des données.
- **Authentification** : Gestion customisée via API Routes (`jose`, `bcryptjs`).

### Structure des Dossiers Clés
- `app/` : Contient les routes de l'application (Pages, Layouts, API).
  - `(auth)/` : Groupes de routes pour l'authentification (login/register).
  - `(dashboard)/` : Groupes de routes pour les tableaux de bord.
  - `api/` : Les points de terminaison Backend (ex: `/api/auth/login`).
  - `models/` : Définition des schémas de base de données (ex: `User.ts`).
  - `lib/` : Utilitaires et configurations partagées (connexion DB, helpers).

## 4. API & Endpoints

Le backend expose plusieurs routes API pour interagir avec la base de données :

- **POST** `/api/auth/register` : Création d'un nouveau compte utilisateur.
- **POST** `/api/auth/login` : Authentification d'un utilisateur existant.
- **POST** `/api/auth/logout` : Déconnexion de l'utilisateur.

## 5. Guide d'Installation

Suivez ces étapes pour installer et lancer le projet localement.

### Prérequis
- **Node.js** (version 18 ou supérieure recommandée).
- **MongoDB** (Une instance locale ou une URI de connexion Atlas).

### Étapes
1. **Cloner ou télécharger le projet**.
2. **Installer les dépendances** :
   ```bash
   npm install
   ```
3. **Configurer les variables d'environnement** :
   Créez un fichier `.env.local` à la racine du projet et ajoutez votre chaîne de connexion MongoDB :
   ```env
   MONGODB_URI=mongodb://localhost:27017/lms
   # Ajoutez d'autres clés si nécessaire (JWT_SECRET, etc.)
   ```
4. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
5. **Accéder à l'application** : Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 6. Export en PDF

Ce fichier est au format Markdown (`.md`). Pour obtenir un PDF :
1. Ouvrez ce fichier dans un éditeur comme VS Code.
2. Utilisez un plugin comme "Markdown PDF" pour l'exporter.
3. OU visualisez le fichier sur GitHub/GitLab et utilisez la fonction d'impression du navigateur ("Imprimer" -> "Enregistrer au format PDF").
