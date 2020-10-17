# eslint-plugin-tapsell

Tapsell custom eslint plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-tapsell`:

```
$ npm install eslint-plugin-tapsell --save-dev
```


## Usage

Add `tapsell` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "tapsell"
    ]
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

## Supported Rules

* Fill in provided rules here





