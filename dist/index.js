/**
 * @fileoverview Tapsell custom eslint plugin
 * @author Vahid Mohammadi
 */
'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const requireIndex = require('requireindex');
const angular = require('./configs/angular');
//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
// import all rules in lib/rules
module.exports = {
    rules: requireIndex(__dirname + '/rules'),
    configs: {
        angular,
    },
};
//# sourceMappingURL=index.js.map