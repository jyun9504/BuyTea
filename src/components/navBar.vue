<template>
  <div class="navbar">
		<a class="btn btn--brand" href="#">BuyTea</a>
		<a class="btn btn--addBtn" href="#">NewOrder</a>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped lang="scss">

.navbar {
	height: 10rem;
	background-color: $color-green-light;
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
		font-weight: 500;
	}

	&--addBtn {
		border: solid 5px;
		border-radius: 5px;
		font-size: 3rem;
		padding: .5rem 1rem;
		right: 2rem;
	}
}
</style>
