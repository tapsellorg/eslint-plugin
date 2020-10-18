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
    {
      code: 'class Test { constructor(private userService: UserService) {} }',
    },
  ],

  invalid: [
    {
      code: 'class Test { constructor(private user: UserService) {} }',
      errors: [
        {
          message: "Injected service's name should be the camel case form of the service name",
        },
      ],
    },
  ],
});
