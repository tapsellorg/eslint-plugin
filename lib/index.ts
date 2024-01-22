/**
 * @fileoverview Tapsell custom eslint plugin
 * @author Vahid Mohammadi
 */

import rules from './rules';
import angular from './configs/angular';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules,
  configs: {
    angular,
  },
};
