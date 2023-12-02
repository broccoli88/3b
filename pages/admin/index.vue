<script setup>
	definePageMeta({
		layout: "admin",
		middleware: ["auth"],
	});
</script>

<template>
	<main class="admin">
		<AdminAside />
	</main>
</template>

<style lang="scss" scoped>
	.admin {
		min-height: 200vh;
		display: grid;
		grid-template-columns: min-content 1fr;
	}
</style>
