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
                if (node.kind !== 'constructor')
                    return;
                (node.value.params || []).forEach(function (p) {
                    var _a, _b, _c, _d, _e;
                    var typeName = (_d = (_c = (_b = (_a = p === null || p === void 0 ? void 0 : p.parameter) === null || _a === void 0 ? void 0 : _a.typeAnnotation) === null || _b === void 0 ? void 0 : _b.typeAnnotation) === null || _c === void 0 ? void 0 : _c.typeName) === null || _d === void 0 ? void 0 : _d.name;
                    if (!(typeName === null || typeName === void 0 ? void 0 : typeName.endsWith('Service'))) {
                        return;
                    }
                    var parameterName = (_e = p === null || p === void 0 ? void 0 : p.parameter) === null || _e === void 0 ? void 0 : _e.name;
                    if (!parameterName) {
                        return;
                    }
                    if (parameterName === convertToCamelCase(typeName)) {
                        return true;
                    }
                    context.report({
                        message: "Injected service's name should be the camel case form of the service name",
                        node: p,
                    });
                });
            },
        };
    },
};
//# sourceMappingURL=injected-service-name.js.map