export default {
  fetchAll: () => fetch('/api/categories.json').then(res => res.json())
}
