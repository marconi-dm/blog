import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import withNuxt from './.nuxt/eslint.config.mjs';
import vueParser from 'vue-eslint-parser';
import espree from 'espree';
import tsParser from '@typescript-eslint/parser';

export default withNuxt([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: { ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      'indent': ['error', 2],
      //... outras regras
    }
  },
  {
    files: ['**/*.vue'],
    plugins: { vue: pluginVue },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          'js': espree,
          'ts': tsParser,
          '<template>': espree
        },
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      ...pluginVue.configs['flat/recommended'].rules,
      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true
      }],
      'vue/script-indent': ['error', 2, {
        baseIndent: 1,
        switchCase: 1,
        ignores: []
      }],
      'indent': 'off'
    }
  }
]);