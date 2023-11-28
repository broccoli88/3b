<script setup></script>

<template>
	<div class="wrapper">
		<div class="container">
			<TheNavbar />
			<main>
				<slot />
			</main>
		</div>
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
		width: 100%;
		max-width: 1300px;
		min-height: 100vh;
		background-image: $clr-bg-teal-linear;
		border-radius: $br-lg;
		box-shadow: 0 0 20px hsl(0, 0%, 0%, 0.2);
		@include bp {
			margin-inline: auto;
		}
	}

	.main {
		display: grid;
		grid-template-columns: minmax(100px, 330px) 1fr;
	}
</style>
