# CLAUDE.md

Ce fichier fournit des instructions a Claude Code (claude.ai/code) pour travailler avec le code de ce depot.

## Vue d'ensemble du projet

Projet de site statique Astro 6.0 (beta), initialise a partir du modele de demarrage "basics". Utilise Bun comme gestionnaire de paquets. La seule dependance directe est `astro@6.0.0-beta.9`.

## Commandes

```sh
bun install          # Installer les dependances
bun dev              # Lancer le serveur de dev sur localhost:4321
bun build            # Build de production dans ./dist/
bun preview          # Previsualiser le build de production en local
bun astro check      # Lancer les diagnostics Astro (verification des types)
bun astro add <pkg>  # Ajouter une integration Astro
```

Aucun outil de test ou de linting n'est configure.

## Architecture

- **`src/pages/`** — Routage base sur les fichiers. Chaque fichier `.astro` devient une route.
- **`src/layouts/`** — Enveloppes de mise en page (actuellement `Layout.astro` avec les styles globaux).
- **`src/components/`** — Composants Astro reutilisables.
- **`src/assets/`** — Images et ressources traitees par le pipeline de build d'Astro.
- **`public/`** — Fichiers statiques servis tels quels (favicons, etc.).

## Configuration

- **`astro.config.mjs`** — Configuration Astro (actuellement minimale/par defaut).
- **`tsconfig.json`** — Etend `astro/tsconfigs/strict` pour une verification TypeScript stricte.

## Styles

CSS scope dans les blocs `<style>` des composants `.astro`. Aucun framework CSS (Tailwind, etc.) n'est configure. Les styles globaux se trouvent dans `Layout.astro`.
