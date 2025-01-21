import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Configurações globais para JavaScript/TypeScript/Vue
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"], // Alvo: arquivos JavaScript, TypeScript e Vue
    languageOptions: {
      globals: {
        ...globals.browser, // Adiciona globais do navegador
        ...globals.node, // Adiciona globais do Node.js
      },
      parser: tsParser, // Parser do TypeScript
      parserOptions: {
        ecmaVersion: "latest", // Suporte a ESNext
        sourceType: "module", // Usa módulos ES6+
        ecmaFeatures: {
          jsx: true, // Suporte a JSX, se necessário
        },
      },
    },
    rules: {
      // Regras gerais de boas práticas
      "no-unused-vars": "warn", // Aviso para variáveis não usadas
      "no-console": "warn", // Aviso para uso de `console.log`
      eqeqeq: ["error", "always"], // Uso estrito de comparações (`===` e `!==`)
    },
  },
  // Regras específicas para TypeScript
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules, // Regras recomendadas do TypeScript
      "@typescript-eslint/no-unused-vars": "warn", // Aviso para variáveis TypeScript não usadas
      "@typescript-eslint/explicit-module-boundary-types": "off", // Não exige tipos explícitos em funções exportadas
    },
  },
  // Configurações específicas para Vue
  {
    files: ["**/*.vue"],
    plugins: {
      vue: pluginVue,
    },
    rules: {
      ...pluginVue.configs["flat/essential"].rules, // Regras essenciais do Vue
      "vue/multi-word-component-names": "off", // Permite nomes de componentes com uma palavra
      "vue/no-v-html": "warn", // Evita o uso inseguro de `v-html`
      "vue/require-default-prop": "warn", // Exige `default` para propriedades opcionais
    },
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".vue"], // Suporte a arquivos `.vue`
      },
    },
  },
  // Regras de Prettier (opcional, se usado no projeto)
  {
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "error", // Integra Prettier com ESLint
    },
  },
];
