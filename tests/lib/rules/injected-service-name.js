/**
 * @fileoverview The name of the injected service should be the camelCase form of the service
 * @author Vahid Mohammadi
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/injected-service-name'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run('injected-service-name', rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: 'class Test { constructor(private user: UserService) {} }',
      errors: [
        {
          message: 'Fill me in.',
          type: 'Me too',
        },
      ],
    },
  ],
});
