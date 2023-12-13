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
		),
		slugTitle = computed(() => props.title.split(" ").join("-")),
		slugSubtitle = computed(() => props.subtitle.split(" ").join("-")),
		slug = computed(() => `${slugTitle.value}-${slugSubtitle.value}`),
		link = `/reviews/review-${props.id}/${slug.value}`;
</script>

<template>
	<article class="card">
		<NuxtImg :src="cover" class="card__img" />
		<section class="card__description">
			<p class="card__post-creation">{{ postCreation }}</p>
			<header>
				<h3 class="card_header-title">{{ title }}</h3>
				<h4 class="card_header-subtitle">{{ subtitle }}</h4>
				<p class="card_header-author">by: {{ author }}</p>
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
		height: 100%;
		grid-template-rows: auto 1fr min-content;
	}

	.card__post-creation {
		color: $clr-txt-inactive;
		font-size: 1.2rem;
	}

	.card_header-title {
		font-size: 4rem;
		color: white;
	}

	.card_header-subtitle {
		font-size: 3rem;
	}

	.card_header-author {
		margin-top: 1rem;
	}

	.card__img {
		width: 100%;
		object-fit: cover;
		aspect-ratio: 1;
		border-radius: $br-md;
	}

	.card__description {
		display: flex;
		flex-direction: column;
		// display: grid;
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
