### [5.0.1](https://github.com/tapsellorg/eslint-plugin/compare/v5.0.0...v5.0.1) (2022-01-04)


### Improvements

* **angular:** allow console.assert ([918a847](https://github.com/tapsellorg/eslint-plugin/commit/918a847ec78aadaaa5db3c9c6388a38f3f691168))

## [5.0.0](https://github.com/tapsellorg/eslint-plugin/compare/v4.2.7...v5.0.0) (2021-12-25)


### Bug Fixes

* **rules:** update injected-service-name to match eslintv8 ([376ce84](https://github.com/tapsellorg/eslint-plugin/commit/376ce8455e56d41953c36d685c44c17b2dc3d5f2))

### [4.2.7](https://github.com/tapsellorg/eslint-plugin/compare/v4.2.6...v4.2.7) (2021-12-01)


### Bug Fixes

* **angular:** update dependencies and versions ([762bce4](https://github.com/tapsellorg/eslint-plugin/commit/762bce4bd2de10dca3f01497c92b3e8c669d4b84))
* **angular:** update dependencies and versions ([e20bbb4](https://github.com/tapsellorg/eslint-plugin/commit/e20bbb40973d5b7ca539e7e06a31b878b09a729c))
* **angular:** update dependencies and versions ([798bbae](https://github.com/tapsellorg/eslint-plugin/commit/798bbae2bf8aeeb631dcd7c47c1732f0fd46add8))

### [4.2.6](https://github.com/tapsellorg/eslint-plugin/compare/v4.2.5...v4.2.6) (2021-11-24)


### Bug Fixes

* **angular:** peer dependencies and versions of peerdeps packages ([e89197a](https://github.com/tapsellorg/eslint-plugin/commit/e89197af94f6efa879cf71801283bc95b111c03c))

### [4.2.5](https://github.com/tapsellorg/eslint-plugin/compare/v4.2.4...v4.2.5) (2021-10-30)


### Bug Fixes

* remove member-ordering warnings ([3962aa9](https://github.com/tapsellorg/eslint-plugin/commit/3962aa9824057bf37736d16c9e27e4fc7dbf1027))

### [4.2.4](https://github.com/tapsellorg/eslint-plugin/compare/v4.2.3...v4.2.4) (2021-10-11)


### Bug Fixes

* peer dependencies ([f8d80de](https://github.com/tapsellorg/eslint-plugin/commit/f8d80de857260ef61475601633ca895bab568093))

### [4.2.3](https://github.com/tapsellorg/eslint-plugin/compare/v4.2.2...v4.2.3) (2021-09-18)


### Improvements

* **angular:** change eqeqeq in html to warn ([953f702](https://github.com/tapsellorg/eslint-plugin/commit/953f7029199c2e7439ebde80d0042065fb117dbc))
* **angular:** change no-console to error ([6c0c31b](https://github.com/tapsellorg/eslint-plugin/commit/6c0c31bbea429133843075b24ba29183166801a6))

### [4.2.2](https://github.com/tapsellorg/eslint-plugin/compare/v4.2.1...v4.2.2) (2021-09-06)


### Bug Fixes

* **angular:** disable some rules as they're producing a lot of warnings that aren't really important ([dad212f](https://github.com/tapsellorg/eslint-plugin/commit/dad212f005b3151703b5e05d3b68e0e463c097f7))

### [4.2.1](https://github.com/tapsellorg/eslint-plugin/compare/v4.2.0...v4.2.1) (2021-09-04)


### Bug Fixes

* **angular:** remove prefer-readonly rule ([6ae4e40](https://github.com/tapsellorg/eslint-plugin/commit/6ae4e407428bee93d8997cc944dad6cacdea9424))


### Improvements

* update [@typescript-eslint](https://github.com/typescript-eslint) ([b69939d](https://github.com/tapsellorg/eslint-plugin/commit/b69939d08089a9a69cb6bb56a10488b1f44c61bd))

## [4.2.0](https://github.com/tapsellorg/eslint-plugin/compare/v4.1.0...v4.2.0) (2021-09-04)


### Features

* **angular:** update `parserOptions.project` option to support angular monorepo multiple tsconfig files ([da78466](https://github.com/tapsellorg/eslint-plugin/commit/da784661108bbd217a7a6c4e923ea6936dc94b4a))

## [4.1.0](https://github.com/tapsellorg/eslint-plugin/compare/v4.0.0...v4.1.0) (2021-08-31)


### Features

* **angular:** add more rules from eslint and typescript-eslint. remove rxjs and import plugins ([cfaef40](https://github.com/tapsellorg/eslint-plugin/commit/cfaef407e134592b9b50ba637008335c92e3f003))

## [4.0.0](https://github.com/tapsellorg/eslint-plugin/compare/v3.1.5...v4.0.0) (2021-08-21)


### ⚠ BREAKING CHANGES

* **angular:** Now you must have a tsconfig.json file in the root of the project. Inside it, include all projects files ("include": ["projects/**/*.ts"])

### Bug Fixes

* **angular:** install deps ([2e50f70](https://github.com/tapsellorg/eslint-plugin/commit/2e50f708456d9c730837d2c9de5256f317048f5c))
* **angular:** use tsconfig.json instead of tsconfig.app.json ([462e140](https://github.com/tapsellorg/eslint-plugin/commit/462e14098602469a588af7b8862b4030bdcf5149))


### Improvements

* **angular:** update sonarjs plugin ([816c3ee](https://github.com/tapsellorg/eslint-plugin/commit/816c3ee8398f1c2c03f5383fbb4485df694695da))

### [3.1.5](https://github.com/tapsellorg/eslint-plugin/compare/v3.1.4...v3.1.5) (2021-05-26)


### Bug Fixes

* **angular:** remove quotes rule ([4f4db03](https://github.com/tapsellorg/eslint-plugin/commit/4f4db036f1abf44a6ae0df2397db9c5151c06311))

### [3.1.4](https://github.com/tapsellorg/eslint-plugin/compare/v3.1.3...v3.1.4) (2021-05-14)


### Bug Fixes

* **angular:** remove max-len rule ([e751c35](https://github.com/tapsellorg/eslint-plugin/commit/e751c3584fc4785811c1387d49a3d3262972c2bd))
* **angular:** reorder rules ([539c8ef](https://github.com/tapsellorg/eslint-plugin/commit/539c8ef9e10ffc7854f5340b3bd0d952d1fef25f))

### [3.1.3](https://github.com/tapsellorg/eslint-plugin/compare/v3.1.2...v3.1.3) (2021-04-30)

- No changes
