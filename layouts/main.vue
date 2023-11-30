<template>
	<div class="wrapper">
		<div class="container">
			<TheNavbar />
			<main>
				<slot />
			</main>
		</div>
		<TheFooter />
	</div>
</template>

<style lang="scss" scoped>
	.wrapper {
		@include layout-wrapper;
	}
	.container {
		@include layout-container;
	}
</style>
