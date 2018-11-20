export default class View {
  constructor(getHTML) {
    this.getHTML = getHTML
  }
  static render(getHTML, item, selector) {
    $(selector).html(getHTML(item))
  }
  static renderList(getHTML, items, selector) {
    $(selector).html(items.map(getHTML).join(''))
  }

  render(...args) {
    View.render(this.getHTML, ...args)
  }
  renderList(...args) {
    View.renderList(this.getHTML, ...args)
  }
}
