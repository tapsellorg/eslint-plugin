module.exports = {
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json', './projects/*/tsconfig.json'],
        createDefaultProgram: false,
      },
      plugins: [/*'rxjs',*/ 'sonarjs', 'unused-imports'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:sonarjs/recommended', 'plugin:@angular-eslint/recommended', 'prettier'],
      rules: {
        // Eslint
        'no-negated-in-lhs': 'error',
        'no-invalid-regexp': 'error',
        'no-regex-spaces': 'warn',
        'no-delete-var': 'error',
        'no-octal': 'error',
        'use-isnan': 'error',
        'no-debugger': 'error',
        'no-func-assign': 'error',
        'max-lines-per-function': ['warn', { max: 40, skipBlankLines: true, skipComments: true }],
        'max-lines': ['warn', { max: 200 }],
        'max-depth': ['warn', { max: 4 }],
        'no-constant-condition': 'warn',
        'no-cond-assign': 'error',
        'no-empty': 'warn',
        'no-redeclare': 'warn',
        'class-methods-use-this': 'off', // This is producing a lot of warnings that aren't really important.
        'prefer-const': 'warn',
        'no-console': ['error', { allow: ['error', 'warn'] }],
        eqeqeq: ['warn', 'smart'],
        'prefer-destructuring': ['warn', { object: true, array: false }],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'rxjs/Rx',
                message: 'Please import directly from \'rxjs\' instead',
              },
            ],
            patterns: ['../../*'],
          },
        ],
        'arrow-body-style': 'warn',
        // Typescript eslint
        // angular eslint
        '@angular-eslint/no-input-rename': 'off',
        '@angular-eslint/no-empty-lifecycle-method': 'off',
        '@angular-eslint/no-output-rename': 'off',
        // tapsell
        // '@tapsellorg/injected-service-name': 'warn',
        // sonar js
        'sonarjs/no-duplicate-string': 'warn',
        'sonarjs/no-identical-functions': 'warn',
        // unused imports
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn', // This is producing a lot of warnings that aren't really important.
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'off', // TODO: uncomment when all projects are strict:true
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      },
    },
  ],
};
