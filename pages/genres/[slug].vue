<script setup>
	const route = useRoute();
	const heading = computed(() => {
		const replaceText = route.params.slug.replaceAll("_", " ");
		return replaceText.replaceAll("-", "/");
	});
</script>

<template>
	<section>
		<h1>{{ heading }}</h1>
	</section>
</template>

<style lang="scss" scoped></style>
