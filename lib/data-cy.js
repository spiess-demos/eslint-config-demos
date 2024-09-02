import defineTemplateBodyVisitor from 'eslint-plugin-vuejs-accessibility/dist/utils/defineTemplateBodyVisitor'
import getAttributeValue from 'eslint-plugin-vuejs-accessibility/dist/utils/getAttributeValue'
import getElementAttribute from 'eslint-plugin-vuejs-accessibility/dist/utils/getElementAttribute'
import hasOnDirectives from 'eslint-plugin-vuejs-accessibility/dist/utils/hasOnDirectives'
import interactiveHandlers from 'eslint-plugin-vuejs-accessibility/dist/utils/interactiveHandlers'

const interactiveHtmlElements = new Set([
  'button', 'input', 'select', 'textarea', 'a', 'area', 'details', 'embed',
  'iframe', 'label', 'summary', 'video', 'audio', '[tabindex]'
])

const dataCyName = 'data-cy'

const dataCyFormat = /^[a-z]+[a-zA-Z0-9]+:[a-z]+[a-zA-Z0-9]+$/

const dataCyMessage = `Interactive elements must have a "${dataCyName}" attribute with a valid value.`

export default {
  rules: {
    'data-cy': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce data-cy attribute on interactive elements and elements with event handlers in Vue templates',
          category: 'Best Practices',
          recommended: false,
        },
        schema: [],
      },
      create: function (context) {
        return defineTemplateBodyVisitor(context, {
          VElement(node) {
            const isNativeInteractiveElement = interactiveHtmlElements.has(node.rawName)
            const isVueBoundInteractiveElement = hasOnDirectives(node, interactiveHandlers)

            if (!(isNativeInteractiveElement || isVueBoundInteractiveElement)) {
              return
            }

            const dataCyAttr = getElementAttribute(node, dataCyName)
            if (!dataCyAttr) {
              context.report({
                node,
                message: dataCyMessage
              })
            } else {
              const dataCyAttrValue = getAttributeValue(dataCyAttr)
              const isValidDataCyValue = dataCyFormat.test(dataCyAttrValue)
              if (!isValidDataCyValue) {
                context.report({
                  node,
                  message: dataCyMessage
                })
              }
            }
          }
        })
      }
    }
  }
}
