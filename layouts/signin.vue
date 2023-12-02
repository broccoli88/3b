<script setup></script>

<template>
	<div class="signin-form">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
	.signin-form {
		height: 100vh;
		display: grid;
		place-items: center;
		padding: 1rem;
	}
</style>
