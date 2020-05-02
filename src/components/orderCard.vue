<template>
  <div class="order-card">
    <div class="cancel">
      <a class="btn btn--cancel" href="#">×</a>
    </div>
    <div class="content">
      <h1 class="content__name">{{ order.name }}</h1>
      <p class="content__description">{{ order.description }}</p>
    </div>
    <div class="price">
      <p class="price__text">${{ order.price }}</p>
    </div>
    <div class="quantity">
      <a class="btn btn--quantity" href="#" @click="decreaseQuantity">−</a>
      <p class="quantity__text">{{ order.quantity }}</p>
      <a class="btn btn--quantity" href="#" @click="increaseQuantity">+</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      order: Object
  },
  methods: {
    increaseQuantity () {
      let data = Object.assign({}, this.order);
      data.quantity++;
      this.$store.commit('updateOrder', data);
    },
    decreaseQuantity () {
      if (this.order.quantity === 1) {
        this.$store.commit('removeOrder', this.order);
      }else{
        let data = Object.assign({}, this.order);
        data.quantity--;
        this.$store.commit('updateOrder', data);
      }
    }
  }
}
</script>

<style scoped lang="scss">

.order-card {
  display: flex;
  border-bottom: solid .5rem $color-green-light;
  padding-bottom: 1rem;
}

.cancel {
  width: 7.5rem;
}

.content {
  width: 66.5rem;
  min-width: 7rem;

  &__name {
    font-size: 4rem;
    line-height: 7rem;
    color: $color-black;
  }
  &__description {
    font-size: 2rem;
    line-height: 2rem;
    color: $color-grey;
  }
}

.price {
  min-width: 20rem;
  word-break: break-all;
  @include verticalCenter;

  &__text {
    font-size: 4rem;
    color: $color-orangered;
  }
}

.quantity {
  min-width: 20rem;
  @include verticalCenter;

  &__text {
    font-size: 4rem;
    color: $color-black;
  }
}

.btn {
  text-decoration: none;
  color: $color-orangered;

  &--cancel {
    display: flex;
    justify-content: center;
    min-width: 7.5rem;
    font-size: 7.5rem;
  }

  &--quantity {
    font-size: 5rem;
    margin: 0 1rem;
  }
}
</style>
