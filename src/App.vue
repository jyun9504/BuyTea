<template>
  <div id="app">
    <header class="header">
      <NavBar 
        @togglePopup="togglePopup"
      />
    </header>
    <main class="main">
      <h1 class="main__heading">your order</h1>
      <OrderCard
        v-for="order in orders"
        :key="order.id"
        :order="order"
        @handleEdit="handleEdit"
      />
    </main>
    <div class="footer" v-show="orders.length > 0">
      <p class="footer__total">Total：</p>    
      <p class="footer__total">${{ total }}</p>
    </div>
    <Popup 
      v-show="isPopupShow"
      @togglePopup="togglePopup"
      @submit="addOrder"
      @edit="editOrder"
      :type="popupType"
    >
      <OrderForm 
        :isWarningShow="isWarningShow"
        :name="newName"
        :description="newDescription"
        :price="newPrice"
        :quantity="newQuantity"
        @handleName="(val) => { this.newName = val }"
        @handleDescription="(val) => { this.newDescription = val }"
        @handlePrice="(val) => { this.newPrice = val }"
        @handleQuantity="(val) => { this.newQuantity = val }"
      />
    </Popup>
  </div>
</template>

<script>
import NavBar from './components/navBar.vue'
import OrderCard from './components/orderCard.vue'
import OrderForm from './components/orderForm.vue'
import Popup from './components/popup.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    OrderCard,
    OrderForm,
    Popup
  },
  data () {
    return {
      isPopupShow: false,
      isWarningShow: false,
      popupType: 'add',
      orderID: '',
      newName: '',
      newDescription: '',
      newPrice: 20,
      newQuantity: 1,
    }
  },
  computed: {
    total() {
      let total = 0
      return this.orders.length === 0?
        total:
        this.orders.reduce(
          function(total, el) {
            return total + (el.price * el.quantity)
          }, 0
        );
    },
    orders() {
      return this.$store.getters.orders
    }
  },
  methods: {
    togglePopup(type = 'add') {
      this.popupType = type;
      this.isPopupShow = !this.isPopupShow;
    },
    addOrder() {
      if (this.newName === ''){
        this.isWarningShow = true;
        return
      }
      this.isWarningShow = false;
      const data = {
        id: this.randomId(),
        name: this.newName,
        description: this.newDescription,
        price: this.newPrice,
        quantity: this.newQuantity
      };
      this.$store.dispatch('newOrder', data);
      this.clearForm();
      this.togglePopup();
    },
    editOrder() {
      const data = {
        id: this.orderID,
        name: this.newName,
        description: this.newDescription,
        price: this.newPrice,
        quantity: this.newQuantity
      }
      this.$store.dispatch('updateOrder', data)
      this.clearForm();
      this.togglePopup();
    },
    randomId() {
      return Math.random().toString(36).substr(2);
    },
    clearForm() {
      this.newName = '';
      this.newDescription = '';
      this.newPrice = 20;
      this.newQuantity = 1;
    },
    handleEdit(data) {
      this.orderID = data.id;
      this.newName = data.name;
      this.newDescription = data.description;
      this.newPrice = data.price;
      this.newQuantity = data.quantity;
      this.togglePopup('edit');
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: $color-green-light;
}

.main {
  max-width: 114rem;
  margin: 0 auto;

  &__heading {
    text-transform: uppercase;
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: .2rem;
    padding: 1rem 0;
    color: $color-green;
    border-bottom: solid .3rem $color-green-light;
  }
}

.footer {
  max-width: 114rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  &__total {
    padding: 2rem;
    font-size: 30px;
    text-align: right;
    color: $color-black;
    font-style: italic;
  }
}
</style>
