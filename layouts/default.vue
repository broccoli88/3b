<script setup></script>

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
		padding-block: 2rem;

		@include bp {
			padding-block: 4rem;
		}
	}
	.container {
		@include container;
		background-image: $clr-bg-teal-linear;
		border-radius: $br-lg;
		overflow: hidden;
		min-height: 100vh;
		box-shadow: 0 0 20px hsl(0, 0%, 0%, 0.2);
	}
</style>
