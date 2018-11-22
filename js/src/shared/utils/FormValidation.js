const selector = {
  field: '[data-validate]',
  errorPlaceholder: '.validation-error-placeholder'
}

const defaultRules = { required: null, pattern: '(.*?)', patternMessage: '' }

const extractField = field => {
  const $field = $(field)
  const { validate, ...rules } = $field.data()
  return {
    rules: { ...defaultRules, ...rules },
    $el: $field
  }
}

export default class FormValidation {
  constructor({ $form, validateOnChange = true }) {
    if (!$form) {
      throw new Error('FormValidation constructor - Invalid $form')
    }
    this.$form = $form
    this.fields = this.$form
      .find(selector.field)
      .toArray()
      .map(extractField)
    if (validateOnChange) {
      this.fields.forEach(field => {
        field.$el.on('change', () => {
          this.validateField(field)
        })
      })
    }
  }

  validate() {
    const fieldValidities = this.fields.map(this.validateField.bind(this))
    return fieldValidities.every(v => v)
  }

  validateField(field) {
    let errorMessages = []
    const { rules, $el } = field
    const value = $el.val()
    if (rules.required && !value) {
      errorMessages.push(rules.required)
    }
    if (rules.pattern && !new RegExp(rules.pattern).test(value)) {
      errorMessages.push(rules.patternMessage)
    }
    if (errorMessages.length > 0) {
      this.showErrorMessage($el, errorMessages.join('<br />'))
      return false
    }
    this.removeErrorMessage($el)
    return true
  }

  showErrorMessage($el, message) {
    let $placeholder = $el.siblings(selector.errorPlaceholder).first()
    if ($placeholder.length === 0) {
      $el.after(`<div class="${selector.errorPlaceholder.slice(1)}"></div>`)
      $placeholder = $el.next()
    }
    $placeholder.html(message)
  }

  removeErrorMessage($el) {
    $el.siblings(selector.errorPlaceholder).remove()
  }
}
