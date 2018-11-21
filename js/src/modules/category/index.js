import view from './view'

export default {
  view,
  init({ categories }) {
    view.renderList(categories, '#collection-row')
  }
}
