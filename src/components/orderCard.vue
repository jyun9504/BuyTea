<template>
  <div class="order-card">
    <div class="cancel">
      <a class="btn btn--cancel" href="#" @click="removeOrder">×</a>
    </div>
    <div class="content">
      <h1 class="content__name">
        {{ order.name }}
        <a class="btn btn--edit" @click="$emit('handleEdit', order)" href="#" >
          <img class="btn--edit-img" src="../assets/imgs/edit.svg" alt="Edit">
        </a>
      </h1>
      <p class="content__description">{{ order.description }}</p>
    </div>
    <div class="price">
      <em class="price__text">${{ order.price }}</em>
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
    removeOrder () {
      this.$store.commit('removeOrder', this.order);
    },
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
  border-bottom: solid .3rem $color-green-light;
  padding-bottom: 1rem;
  max-width: 114rem;
  margin: 0 auto;
}

.cancel {
  width: 7.5rem;
}

.content {
  width: 82.5rem;
  min-width: 6rem;

  &__name {
    font-size: 3rem;
    line-height: 6.5rem;
    color: $color-black;
  }
  &__description {
    font-size: 1.7rem;
    line-height: 2rem;
    color: $color-grey;
  }
}

.price {
  min-width: 10rem;
  word-break: break-all;

  &__text {
    font-size: 3rem;
    line-height: 6.5rem;
    font-style: italic;
  }
}

.quantity {
  min-width: 15rem;
  padding-top: 1rem;
  
  display: flex;
  &__text {
    font-size: 3rem;
    line-height: 4.5rem;
  }
}

.btn {
  text-decoration: none;
  color: $color-orangered;

  &--cancel {
    display: flex;
    justify-content: center;
    min-width: 7.5rem;
    font-size: 6rem;
  }

  &--quantity {
    height: 4rem;
    width: 4rem;
    @include verticalCenter;
    border-radius: 5rem;
    font-size: 3rem;
    color: $color-white;
    margin: 0 1rem;
    background-color: $color-green-light;
  }

  &--edit-img {
      height: 2.5rem;
      width: 2.5rem;
  }
}
</style>
