/**
 * @fileoverview Tapsell custom eslint plugin
 * @author Vahid Mohammadi
 */

import angular from './configs/angular';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  configs: {
    angular,
  },
};
