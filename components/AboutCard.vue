<script setup>
	defineProps({
		name: String,
		text: String,
		avatar: String,
	});
</script>

<template>
	<article class="about__card">
		<NuxtImg :src="avatar" class="about__card-img" />
		<section class="about__card-description">
			<h2>{{ name }}</h2>
			<p>{{ text }}</p>
		</section>
	</article>
</template>

<style lang="scss" scoped>
	.about__card {
		--_img-order: var(--img-order, 1);
		--_description-order: var(--description-order, 2);

		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.about__card-img {
		width: clamp(8rem, 9vw, 14rem);
		aspect-ratio: 1;

		order: var(--_img-order);
	}

	.about__card-description {
		order: var(--_description-order);
	}
</style>
