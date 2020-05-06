<template>
  <form class="orderForm">
    <div class="orderForm__group">
      <label for="orderName">飲料名稱:</label>
      <input type="text" class="orderForm__control" id="orderName" v-model="modelName" placeholder="高山茶">
      <label class="orderForm__warning" v-show="isWarningShow">＊請輸入飲料名稱</label>
    </div>
    <div class="orderForm__group">
      <label for="orderDescription">備註:</label>
      <textarea type="text" class="orderForm__control" id="orderDescription" v-model="modelDescription" placeholder="冰塊 / 甜度" />
    </div>
    <div class="orderForm__group">
      <label for="price">價錢:</label>
      <input type="number" class="orderForm__control" id="price" v-model="modelPrice" placeholder="20">
    </div>
    <div class="orderForm__group">
      <label for="quantity">數量:</label>
      <input type="number" class="orderForm__control" id="quantity" v-model="modelQuantity" placeholder="1">
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      name: String,
      description: String,
      price: {
        type: Number,
        default: 20
      },
      quantity: {
        type: Number,
        default: 1
      },
      isWarningShow: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      modelName: {
        get() {
          return this.name
        },
        set(val) {
          this.$emit('handleName', val)
        }
      },
      modelDescription: {
        get() {
          return this.description
        },
        set(val) {
          this.$emit('handleDescription', val)
        }
      },
      modelPrice: {
        get() {
          return this.price
        },
        set(val) {
          this.$emit('handlePrice', parseInt(val))
        }
      },
      modelQuantity: {
        get() {
          return this.quantity
        },
        set(val) {
          this.$emit('handleQuantity', parseInt(val))
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .orderForm{

    &__group {
    font-size: 3rem;
    padding: 2rem;
    color: $color-green;
    }

    &__control {
      box-sizing: border-box;
      height: 4rem;
      width: 100%;
      font-size: 2rem;
      background-color: $color-white;
      border: 1px solid $color-grey-light;
      border-radius: .5rem;
      padding: .5rem 1rem;
    }

    &__warning {
      color: $color-orangered;
      font-size: 1.5rem;
    }
  }
</style>