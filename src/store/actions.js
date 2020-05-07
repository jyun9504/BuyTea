const actions = {
	async newOrder ({commit, getters}, data) {
		await commit('newOrder', data)
		localStorage.setItem('orders', JSON.stringify(getters.orders))
	},
	async removeOrder ({ commit, getters }, data) {
		await commit('removeOrder', data)
		localStorage.setItem('orders', JSON.stringify(getters.orders))
  },
  async updateOrder ({ commit, getters }, data) {
		await commit('updateOrder', data)
		localStorage.setItem('orders', JSON.stringify(getters.orders))
  }
}

export default actions;
