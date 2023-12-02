<script setup>
	definePageMeta({
		layout: "signin",
	});
</script>

<template>
	<section class="signin">
		<header class="signin__header">
			<h1>Sign In</h1>
		</header>
		<form class="signin__form">
			<FormInput />
			<FormInput />
		</form>
		<div class="signin__btns">
			<AppButtonLink class="app-btn--teal"> Go Back </AppButtonLink>
			<AppButtonLink class="app-btn--purple"> Sign In </AppButtonLink>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.signin {
		width: min(70rem, 100%);
		background-image: $clr-bg-teal-linear;
		border-radius: $br-lg;
		padding: 2rem;
		display: grid;
		gap: 4rem;
		box-shadow: $bs-container;
	}

	.signin__header {
		text-align: center;
	}

	.signin__form {
		display: grid;
		gap: 2rem;
	}

	.signin__btns {
		margin-top: auto;
		display: grid;
		grid-auto-flow: column;
		gap: 1rem;
		margin-top: 6rem;
	}
</style>
