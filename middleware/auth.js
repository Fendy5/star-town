export default function ({ store }) {
  // console.log('commit')
  console.log(store.state)
  if (!store.state.token) {
    store.commit('SET_DIALOG', 'block')
  }
}
