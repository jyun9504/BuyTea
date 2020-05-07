<template>
  <div class="popup">
		<div class="popup__container">
      <div class="popup__header">
        <h1 class="popup__heading">New Order</h1>
        <a href="#" class="btn btn--close" @click="$emit('togglePopup')">×</a>
      </div>
      <div class="popup__body">
        <slot></slot>
      </div>
      <div class="popup__footer">
        <a href="#" class="btn btn--send" @click="$emit(type === 'add' ? 'submit' : 'edit')">送出</a>
      </div>
    </div>
	</div>
</template>

<script>
export default {
	props: {
      type: {
        type: String,
        default: 'add'
      }
    }
}
</script>

<style scoped lang="scss">
.popup {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(.1rem);
  @include verticalCenter;

  &__container {
    width: 100%;
    max-width: 600px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 1rem;
    background: $color-white;
    animation: fadeInFromTop .5s ease-out;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 1px solid $color-grey-light;
  }

  &__heading {
    font-size: 2.5rem;
    text-transform: uppercase;
    color: $color-green-light;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    padding: 2rem;
    border-top: 1px solid $color-grey-light;
  }
}

.btn{
  text-decoration: none;

  &--close {
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    color: $color-white;
    background-color: $color-orangered;
    border-radius: 2rem;
    @include verticalCenter;
  }

  &--send {
    padding: 1rem;
    color: $color-white;
    text-align: center;
    width: 5rem;
    background-color: $color-green-light;
    font-size: 2rem;
  }
}


</style>
