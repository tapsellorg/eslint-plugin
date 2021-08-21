module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'improve', release: 'patch' },
          { breaking: true, release: 'minor' },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'refactor', section: 'Refactors' },
            { type: 'improve', section: 'Improvements' },
          ],
        },
      },
    ],
    '@semantic-release/changelog',
    // ['@semantic-release/exec', {}],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        message: 'chore: release <%= nextRelease.version %>',
        assets: ['package.json', 'CHANGELOG.md'],
      },
    ],
    '@semantic-release/github',
  ],
  branches: ['master', { name: 'beta', prerelease: true }],
};
