<template>
	<div class="wrapper">
		<div class="container">
			<TheNavbar />
			<main>
				<!-- <TheBreadCrumbs /> -->
				<slot />
			</main>
		</div>
		<TheFooter />
	</div>
</template>

<style lang="scss" scoped>
	@import "@/assets/scss/_layout.scss";
	.wrapper {
		@include layout-wrapper;
	}
	.container {
		@include layout-container;
	}
</style>
