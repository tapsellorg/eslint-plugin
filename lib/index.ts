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
export = {
  rules,
  configs: {
    angular,
  },
};
