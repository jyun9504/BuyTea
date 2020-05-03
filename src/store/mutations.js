const mutations = {
  updateOrder (state, data) {
    state.orders = state.orders.map(el => {
      return el.id === data.id ? data : el
    })
  },
  newOrder (state, data) {
    state.orders = state.orders.concat(data)
  },
  removeOrder (state, data) {
    state.orders.splice(state.orders.indexOf(data), 1)
  }
}

export default mutations