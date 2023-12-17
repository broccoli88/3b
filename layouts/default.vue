<script setup></script>

<template>
	<div class="wrapper">
		<div class="container">
			<TheNavbar />
			<main class="main">
				<TheSidebar />

				<div class="content">
					<AppGoBackButton />
					<slot />
				</div>
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

		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.main {
		@include layout-grid;
	}
</style>
