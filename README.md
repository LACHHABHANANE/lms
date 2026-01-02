# 📚 Documentation Technique du Projet LMS (Learning Management System)

Bienvenue dans la documentation complète du projet LMS. Ce fichier détaille l'architecture, la structure des dossiers, les fonctionnalités et le fonctionnement technique de l'application.

## 🚀 Vue d'ensemble

Ce projet est une plateforme d'apprentissage en ligne développée avec **Next.js 16 (App Router)**. Elle permet de gérer :
- Une partie publique (Vitrine, Catalogue de cours).
- Une partie authentification (Inscription, Connexion).
- Une partie privée (Dashboards étudiants et instructeurs).

**Technologies principales :**
- **Frontend :** Next.js, React, Tailwind CSS 4.
- **Backend :** Next.js API Routes.
- **Base de données :** MongoDB avec Mongoose.
- **Authentification :** JWT (JSON Web Tokens) via `jose` et `bcryptjs`.

---

## 📂 Structure du Projet

Voici une analyse détaillée de l'arborescence des fichiers :

### 1. Racine du projet (`/`)
- **`README.md`** : Ce fichier de documentation.
- **`package.json`** : Gestion des dépendances et scripts du projet.
- **`middleware.ts`** : Le gardien de l'application. Il s'exécute avant chaque requête pour :
    - Vérifier si l'utilisateur est connecté (présence du token).
    - Rediriger les utilisateurs non authentifiés qui tentent d'accéder aux pages `/dashboard`.
    - Gérer les protections de routes basées sur les rôles.
- **`.env.local`** : Fichier (non commité) contenant les variables sensibles (URI MongoDB, clés secrètes).
- **`next.config.ts`** : Configuration du compilateur et du serveur Next.js.
- **`tsconfig.json`** : Configuration TypeScript.

### 2. Le dossier `app/` (Le cœur de l'application)
C'est ici que réside toute la logique de routing (App Router).

#### 🔐 `app/(auth)/` - Authentification
Ce groupe de routes gère les pages d'accès. Les parenthèses `()` indiquent que ce nom de dossier ne fait pas partie de l'URL.
- **`auth/login/page.tsx`** : Page de connexion.
- **`auth/register/page.tsx`** : Page d'inscription (Étudiant ou Instructeur).

#### 📊 `app/(dashboard)/` - Espaces Privés
Ces routes sont protégées par le `middleware.ts`.
- **`layout.tsx`** : Le squelette commun des dashboards (barre latérale, header spécifique au dashboard).
- **`dashboard/student/page.tsx`** : Tableau de bord de l'étudiant (Mes cours, Progression).
- **`dashboard/instructor/page.tsx`** : Tableau de bord de l'instructeur (Créer un cours, Voir les inscrits).

#### 🌍 `app/(public)/` (Implicite ou explicite) et Pages Publiques
- **`page.tsx`** : La page d'accueil (Landing page).
- **`components/`** : Composants réutilisables.
    - **`Navbar.tsx`** : Barre de navigation principale.
    - **`Footer.tsx`** : Pied de page.
    - **`ui/`** : Composants d'interface génériques (boutons, cards...).

#### ⚙️ `app/api/` - Le Backend
C'est ici que sont définies les routes API serveur.
- **`auth/register/route.ts`** :
    - Reçoit les données d'inscription.
    - Hash le mot de passe avec `bcryptjs`.
    - Crée l'utilisateur dans MongoDB via le modèle `User`.
- **`auth/login/route.ts`** :
    - Vérifie les identifiants.
    - Génère un JWT signé avec `jose`.
    - Renvoie un cookie de session.
- **`courses/route.ts`** :
    - `GET` : Récupère la liste des cours (avec filtres possibles).
    - `POST` : Permet aux instructeurs de créer un nouveau cours.

### 3. Le dossier `models/` (Base de Données)
Contient les schémas Mongoose qui définissent la structure des données dans MongoDB.

- **`User.ts`** :
    - `name`, `email`, `password` (hashé).
    - `role` : 'student' ou 'instructor'.
- **`Course.ts`** :
    - `title`, `description`, `price`.
    - `level` : 'Collège', 'Lycée', etc.
    - `instructor` : Référence vers l'ID de l'instructeur créateur.
- **`Enrollment.ts`** :
    - Table de liaison entre `User` (Étudiant) et `Course`.
    - `progress` : Pourcentage d'avancement (0-100).
    - `completed` : Statut de complétion.

### 4. Le dossier `lib/` (Utilitaires)
- **`mongodb.ts`** : Fichier singleton pour établir et mettre en cache la connexion à MongoDB. Évite de créer de multiples connexions lors des rechargements à chaud en développement.

---

## 🛠 Fonctionnalités Clés et Flux

### 1. Authentification
Le système distingue deux rôles :
- **Étudiant** : Peut s'inscrire, se connecter, voir le catalogue, s'inscrire aux cours.
- **Instructeur** : Peut créer des cours, suivre les inscriptions.
Le token JWT est stocké de manière sécurisée (souvent HttpOnly Cookie) pour maintenir la session.

### 2. Gestion des Cours
- Les instructeurs remplissent un formulaire pour ajouter un cours.
- Les données sont validées et stockées dans la collection `courses`.
- Les cours sont affichés dynamiquement sur la page publique et le dashboard étudiant.

### 3. Inscription et Progression
- Lorsqu'un étudiant clique sur "S'inscrire", un document `Enrollment` est créé.
- Le dashboard étudiant requête cette collection pour afficher "Mes Cours".

---

## 🏁 Guide de Démarrage Rapide

1. **Installation des dépendances :**
   ```bash
   npm install
   ```

2. **Configuration Environmentale :**
   Créez un fichier `.env.local` à la racine :
   ```env
   MONGODB_URI=mongodb://localhost:27017/lms
   JWT_SECRET=votre_cle_secrete_super_longue
   ```

3. **Lancement en développement :**
   ```bash
   npm run dev
   ```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## 🔍 Commandes Utiles

- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Compile l'application pour la production.
- `npm run start` : Lance l'application compilée.
- `npm run lint` : Vérifie la qualité du code.
