/**
 * @fileoverview Tapsell custom eslint plugin
 * @author Vahid Mohammadi
 */

import requireIndex from 'requireindex';
import angular from './configs/angular';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
export = {
  rules: requireIndex(__dirname + '/rules'),
  configs: {
    angular,
  },
};
