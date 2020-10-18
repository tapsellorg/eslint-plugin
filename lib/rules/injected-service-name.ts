/**
 * @fileoverview The name of the injected service should be the camelCase form of the service
 * @author Vahid Mohammadi
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'Suggestion',
    docs: {
      description: 'The name of the injected service should be the camelCase form of the service',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        enum: ['always', 'never'],
      },
    ],
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    function convertToCamelCase(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      });
    }

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      MethodDefinition: function (node) {
        if (node.kind !== 'constructor') return;

        (node.value.params || []).forEach(p => {
          const typeName: string | undefined =
            p?.parameter?.typeAnnotation?.typeAnnotation?.typeName?.name;

          if (!typeName?.endsWith('Service')) {
            return;
          }

          const parameterName = p?.parameter?.name;
          if (!parameterName) {
            return;
          }

          if (parameterName === convertToCamelCase(typeName)) {
            return true;
          }

          context.report({
            message: `Injected service's name should be the camel case form of the service name`,
            node: p,
          });
        });
      },
    };
  },
};
