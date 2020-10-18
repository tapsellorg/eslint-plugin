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
        fixable: null,
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
                if (node.kind !== 'constructor')
                    return;
                (node.value.params || []).forEach(function (p) {
                    var _a;
                    if ((_a = p === null || p === void 0 ? void 0 : p.parameter) === null || _a === void 0 ? void 0 : _a.typeAnnotation.typeAnnotation.typeName.name.endsWith('Service')) {
                        if (p.parameter.name) {
                        }
                    }
                    console.log('#ee node', p.parameter, p.parameter.typeAnnotation.typeAnnotation.typeName.name);
                });
            },
        };
    },
};
//# sourceMappingURL=injected-service-name.ts.map
