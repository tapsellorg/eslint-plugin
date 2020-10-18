# @tapsellorg/eslint-config

Tapsell custom eslint plugin

## Installation

```
npm i -D @tapsellorg/eslint-config eslint
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
