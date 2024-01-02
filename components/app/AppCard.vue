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
		slug = computed(() =>
			slugSubtitle.value === ""
				? slugTitle.value
				: `${slugTitle.value}-${slugSubtitle.value}`
		),
		link = `/reviews/${props.id}-${slug.value}`;
</script>

<template>
	<article class="card">
		<NuxtImg :src="cover" class="card__img" />
		<div class="card__description-wrapper">
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
			<AppButtonLink
				:link="link"
				class="card__btn app-btn--teal app-btn--md"
			>
				Read review
			</AppButtonLink>
		</div>
	</article>
</template>

<style lang="scss" scoped>
	.card {
		display: grid;
		grid-template-columns: minmax(min(100%, 10rem), 20rem) 1fr;
		gap: 2rem;
		border-radius: $br-md;
		overflow: hidden;

		@include bp {
			grid-template-columns: initial;
		}
	}

	.card__description-wrapper {
		display: grid;
		grid-template-rows: 1fr min-content;
		gap: 2rem;
	}

	.card__description {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card__img {
		width: 100%;
		height: auto;
		max-height: 30rem;
		object-fit: cover;
		// object-fit: cover;
		border-radius: $br-md;
	}

	.card__post-creation {
		color: $clr-txt-inactive;
		font-size: 1.2rem;
	}

	.card_header-title {
		color: white;

		@include bp {
			font-size: 4rem;
		}
	}

	.card_header-subtitle {
		@include bp {
			font-size: 3rem;
		}
	}

	// .card__description {
	// 	display: flex;
	// 	flex-direction: column;
	// 	// display: grid;
	// 	gap: 1rem;
	// 	margin-bottom: 2rem;
	// }

	.card__description-text {
		margin-top: 0.5rem;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
