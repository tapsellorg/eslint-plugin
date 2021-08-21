module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'refactor', 'style', 'improve', 'chore', 'docs', 'test', 'perf'],
    ],
    'scope-enum': [2, 'always', ['angular', 'rules']],
  },
};
