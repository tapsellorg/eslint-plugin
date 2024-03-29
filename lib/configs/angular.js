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
      plugins: [/*'rxjs',*/ 'sonarjs', '@tapsellorg', 'unused-imports'],
      extends: [
        'plugin:sonarjs/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
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
        'no-console': ['error', { allow: ['error', 'warn', 'assert'] }],
        eqeqeq: ['warn', 'smart'],
        'prefer-destructuring': ['warn', { object: true, array: false }],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'rxjs/Rx',
                message: "Please import directly from 'rxjs' instead",
              },
            ],
            patterns: ['../../*'],
          },
        ],
        'arrow-body-style': 'warn',
        // Typescript eslint
        '@typescript-eslint/no-unused-vars': 'off', // turned off because of unused-imports/no-unused-vars
        '@typescript-eslint/no-empty-function': [
          'warn',
          { allow: ['constructors', 'arrowFunctions'] },
        ],
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'default',
            format: ['camelCase'],
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'memberLike',
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/array-type': ['warn', { default: 'array' }],
        '@typescript-eslint/no-this-alias': 'warn',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-as-const': 'warn',
        'prefer-optional-chain': 'off',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        // angular eslint
        '@angular-eslint/no-input-rename': 'off',
        '@angular-eslint/no-empty-lifecycle-method': 'off',
        '@angular-eslint/no-output-rename': 'off',
        // sonar js
        'sonarjs/no-duplicate-string': 'warn',
        'sonarjs/no-identical-functions': 'warn',
        // unused imports
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'off', // TODO: uncomment when all projects are strict:true
        '@typescript-eslint/no-unsafe-member-access': 'warn', // This is producing a lot of warnings that aren't really important.
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        'prefer-rest-params': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/consistent-indexed-object-style': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-extraneous-class': [
          'warn',
          {
            allowConstructorOnly: true,
            allowEmpty: true,
          },
        ],
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-lines': ['warn', { max: 300 }],
        '@angular-eslint/template/eqeqeq': 'warn',
      },
    },
  ],
};
