<template>
  <div class="navbar">
		<a class="btn btn--brand" href="#">BuyTea</a>
		<a class="btn btn--addBtn" href="#" @click="$emit('togglePopup')">NewOrder</a>
	</div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">

.navbar {
	height: 6.5rem;
	max-width: 114rem;
	margin: 0 auto;
	padding: 0 2rem;
	position: relative;
	font-weight: 600;
}

.btn {
	color: $color-white;
	display: inline-block;
	text-decoration: none;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

	&--brand {
		font-size: 4rem;
		letter-spacing: .5rem;
		text-transform: uppercase;
	}

	&--addBtn {
		border: solid .3rem;
		border-radius: .2rem;
		font-size: 1.5rem;
		letter-spacing: .2rem;
		padding: 1rem;
		right: 2rem;
	}
}

@include lessThan($breakpoints-sm) {
	.btn {
		&--brand {
			font-size: 3rem;
		}
	}
}
</style>
