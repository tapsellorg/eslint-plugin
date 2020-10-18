"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'The name of the injected service should be the camelCase form of the service',
            category: 'Best Practices',
            recommended: 'warn',
            url: '',
        },
        fixable: 'code',
        schema: [
            {
                enum: ['always', 'never'],
            },
        ],
        messages: {
            wrongInjectedServiceName: `Injected service's name should be the camel case form of the service name`,
        },
    },
    create: function (context) {
        function convertToCamelCase(str) {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            });
        }
        return {
            MethodDefinition: function (node) {
                var _a;
                if ((node === null || node === void 0 ? void 0 : node.kind) !== 'constructor')
                    return;
                (((_a = node === null || node === void 0 ? void 0 : node.value) === null || _a === void 0 ? void 0 : _a.params) || []).forEach(p => {
                    var _a, _b, _c;
                    if (!('parameter' in p))
                        return;
                    const parameter = p === null || p === void 0 ? void 0 : p.parameter;
                    const typeName = (_c = (_b = (_a = parameter === null || parameter === void 0 ? void 0 : parameter.typeAnnotation) === null || _a === void 0 ? void 0 : _a.typeAnnotation) === null || _b === void 0 ? void 0 : _b.typeName) === null || _c === void 0 ? void 0 : _c.name;
                    if (!(typeName === null || typeName === void 0 ? void 0 : typeName.endsWith('Service'))) {
                        return;
                    }
                    const parameterName = parameter === null || parameter === void 0 ? void 0 : parameter.name;
                    if (!parameterName) {
                        return;
                    }
                    if (parameterName === convertToCamelCase(typeName)) {
                        return true;
                    }
                    context.report({
                        messageId: 'wrongInjectedServiceName',
                        node: p,
                        fix: fixer => {
                            return fixer.replaceText(parameter, `${convertToCamelCase(typeName)}: ${typeName}`);
                        },
                    });
                });
            },
        };
    },
};
module.exports = rule;
//# sourceMappingURL=injected-service-name.js.map