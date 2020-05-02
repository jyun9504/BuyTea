<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <section>
      <OrderCard
        v-for="order in orders"
        :key="order.index"
        :order="order"
      />
      <p class="total" v-show="orders.length > 0">共計：${{ total }}</p>
    </section>
  </div>
</template>

<script>
import NavBar from './components/navBar.vue'
import OrderCard from './components/orderCard.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    OrderCard
  },
  data () {
    return {
    }
  },
  computed: {
    total() {
      let total = 0
      return this.orders.length === 0?
        total:
        this.orders.reduce(
          function(total, el) {
            return total + (el.price * el.quantity);
          }, 0
        );
    },
    orders() {
      return this.$store.getters.orders
    }
  }
}
</script>

<style lang="scss">

.total {
  margin: 15px 0;
  font-size: 30px;
  text-align: right;
  color: $color-orangered;
}
</style>
