<script setup>
	const props = defineProps({
		id: Number,
		author: String,
		subtitle: String,
		title: String,
		created_at: String,
		review: String,
		cover: {
			type: String,
			default: "/images/ornaments/p5.webp",
		},
	});

	const postCreation = computed(() =>
		props.created_at.substring(0, 10).replaceAll("-", "/")
	);

	const slugTitle = computed(() => props.title.split(" ").join("-"));
	const slugSubtitle = computed(() => props.subtitle.split(" ").join("-"));
	const slug = computed(() => `${slugTitle.value}-${slugSubtitle.value}`);
	const link = `/reviews/review-${props.id}/${slug.value}`;
</script>

<template>
	<article class="card">
		<NuxtImg src="/images/ornaments/c1.svg" class="card__ornament" />
		<NuxtImg :src="cover" class="card__img" />
		<section class="card__description">
			<p>{{ postCreation }}</p>
			<header>
				<h3>{{ title }}</h3>
				<h4>{{ subtitle }}</h4>
				<p>by: {{ author }}</p>
			</header>
			<p class="card__description-text">
				{{ review }}
			</p>
		</section>
		<AppButtonLink :link="link" class="card__btn app-btn--teal app-btn--md">
			Read review
		</AppButtonLink>
	</article>
</template>

<style lang="scss" scoped>
	.card {
		display: grid;
		gap: 2rem;
	}

	.card__ornament {
		width: 6rem;
		justify-self: center;
		margin-bottom: -1rem;
		opacity: 0.5;
	}
	.card__img {
		width: 100%;
		object-fit: cover;
		aspect-ratio: 1;
		border-radius: $br-lg;
	}

	.card__description {
		display: grid;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.card__description-text {
		margin-top: 1rem;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
