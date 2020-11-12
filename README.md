![eslint-plugin](https://socialify.git.ci/tapsellorg/eslint-plugin/image?description=1&font=Inter&logo=https%3A%2F%2Ftapsell.ir%2Fwp-content%2Fthemes%2Ftapsell2018%2Fimages%2Ffav%2Fandroid-icon-192x192.png&owner=1&pattern=Circuit%20Board&theme=Light)

# @tapsellorg/eslint-plugin

Tapsell custom eslint plugin

## Installation

```
npm i -D @tapsellorg/eslint-plugin eslint
```

## Usage

In your ESLint config file `.eslintrc`:

```json
{
  "extends": "plugin:@tapsellorg/angular"
}
```

Or you can use the `tapsell` plugin.

```json
{
  "plugins": ["tapsell"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "tapsell/rule-name": 2
  }
}
```
