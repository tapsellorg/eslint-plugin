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

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      MethodDefinition: function (node) {
        if (node.kind !== 'constructor') return;

        (node.value.params || []).forEach(p => {
          if (p.parameter.typeAnnotation.typeAnnotation.typeName.name.endsWith('Service')) {
            if (p.parameter.name) {
            }
          }
          console.log(
            '#ee node',
            p.parameter,
            p.parameter.typeAnnotation.typeAnnotation.typeName.name,
          );
        });
      },
    };
  },
};
