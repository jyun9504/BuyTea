const mutations = {
  newOrder (state, data) {
    state.orders = state.orders.concat(data)
  },
  removeOrder (state, data) {
    state.orders.splice(state.orders.indexOf(data), 1)
  },
  updateOrder (state, data) {
    state.orders = state.orders.map(el => {
      return el.id === data.id ? data : el
    })
  }
}

export default mutations