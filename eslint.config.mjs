import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended, // Configuration recommandée par ESLint
  {
    languageOptions: {
      ecmaVersion: "latest", // Utilisation de la dernière version ECMAScript
      sourceType: "module",
      globals: {
        ...globals.node, // Ajoute les globales de Node.js (console, require, module, etc.)
      },
    },
    rules: {
      "no-undef": "error", // Erreur si une variable est indéfinie
      "no-unused-vars": "warn", // Avertissement pour les variables non utilisées
      eqeqeq: "error", // Erreur si == est utilisé au lieu de ===
    },
  },
];
