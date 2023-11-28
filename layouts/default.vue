<script setup></script>

<template>
	<div class="wrapper">
		<main class="container">
			<TheNavbar />
			<div class="wrapper">
				<slot />
			</div>
		</main>
	</div>
</template>

<style lang="scss" scoped>
	.wrapper {
		padding-block: 3rem;
		padding-inline: 1rem;

		@include bp {
			padding-block: 4rem;
			padding-inline: 2rem;
		}
	}
	.container {
		width: 100%;
		max-width: 1300px;
		min-height: 100vh;
		background-image: $clr-bg-teal-linear;
		border-radius: $br-lg;
		@include bp {
			margin-inline: auto;
		}
	}
</style>
