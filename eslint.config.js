import js from '@eslint/js';

export default [
  js.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      // ✅ Add Node.js globals (fix your error)
      globals: {
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },

    rules: {
      // 🔹 Basic rules
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'error',

      // ❌ Disable formatting rules (Prettier will handle)
      semi: 'off',
      quotes: 'off',

      // 🔹 Best practices
      eqeqeq: 'error',
      curly: 'error',
    },
  },
];
