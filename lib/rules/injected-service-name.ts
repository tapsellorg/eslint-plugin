/**
 * @fileoverview The name of the injected service should be the camelCase form of the service
 * @author Vahid Mohammadi
 */
import { TSESTree } from '@typescript-eslint/experimental-utils';
import { RuleModule } from '@typescript-eslint/utils/dist/ts-eslint';

type MessageIds = 'wrongInjectedServiceName';

const rule: RuleModule<MessageIds, any> = {
  defaultOptions: [],
  meta: {
    type: 'suggestion',
    docs: {
      description: 'The name of the injected service should be the camelCase form of the service',
      recommended: 'recommended',
      url: '',
    },
    // fixable: 'code',
    schema: [
      {
        type: 'string',
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
      MethodDefinition: function (node: TSESTree.MethodDefinition) {
        if (node?.kind !== 'constructor') return;

        (node?.value?.params || []).forEach(p => {
          if (!('parameter' in p)) return;

          const parameter = p?.parameter as TSESTree.Identifier | undefined;

          const typeName = (
            (parameter?.typeAnnotation?.typeAnnotation as TSESTree.TSTypeReference)
              ?.typeName as TSESTree.Identifier
          )?.name;

          if (!typeName?.endsWith('Service')) {
            return;
          }

          const parameterName = parameter?.name;
          if (!parameterName) {
            return;
          }

          if (parameterName === convertToCamelCase(typeName)) {
            return true;
          }

          context.report({
            messageId: 'wrongInjectedServiceName',
            node: p,
            // fix: fixer => {
            //   return fixer.replaceText(parameter, `${convertToCamelCase(typeName)}: ${typeName}`);
            // },
          });
        });
      },
    };
  },
};

export = rule;
