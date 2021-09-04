![eslint-plugin](https://socialify.git.ci/tapsellorg/eslint-plugin/image?description=1&font=Inter&logo=https%3A%2F%2Ftapsell.ir%2Fwp-content%2Fthemes%2Ftapsell2018%2Fimages%2Ffav%2Fandroid-icon-192x192.png&owner=1&pattern=Circuit%20Board&theme=Light)

# @tapsellorg/eslint-plugin

Tapsell custom eslint plugin

## Installation

```
npm i -D @tapsellorg/eslint-plugin eslint
```

## Usage

In your ESLint config file `.eslintrc`:

```js
module.exports = {
  extends: 'plugin:@tapsellorg/angular',
  root: true,
};
```

**Note:** This configuration is for angular workspaces (monorepo). If you have a single Angular project, use this config:

```js
module.exports = {
  extends: 'plugin:@tapsellorg/angular',
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: false,
      },
    },
  ],
};
```

Run your eslint command. If you get any `The file does not match your project config, The file must be included in at least one of the projects provided` errors, read these docs:

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)
- [angular-eslint](https://github.com/angular-eslint/angular-eslint#eslint-configs-and-performance)
