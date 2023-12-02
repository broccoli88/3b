<script setup>
	definePageMeta({
		middleware: "get-review",
	});

	const supabaseStore = useSupabaseStore();
	const { currentReview, currentReviewGenres } = storeToRefs(supabaseStore);

	const createdDate = computed(() =>
		currentReview.value.created_at.substring(0, 10).replaceAll("-", "/")
	);
</script>

<template>
	<section class="review">
		<NuxtImg :src="currentReview.cover_url" class="review__img" />
		<p class="review__date">{{ createdDate }}</p>
		<header class="review__header">
			<h1 class="capitalize">{{ currentReview.book_title }}</h1>
			<h2 class="capitalize">{{ currentReview.book_subtitle }}</h2>
		</header>
		<section class="review_info">
			<p class="capitalize">Author: {{ currentReview.author }}</p>
			<p>Published at: {{ currentReview.published_at }}</p>
			<p class="review__genres">
				Genres:
				<span
					v-for="genre in currentReviewGenres"
					:key="genre"
					class="review__genre"
				>
					{{ genre }}
				</span>
			</p>
		</section>
		<section class="review__review">
			<p v-if="currentReview.review_pt_1">
				{{ currentReview.review_pt_1 }}
			</p>
			<p v-if="currentReview.review_pt_2">
				{{ currentReview.review_pt_2 }}
			</p>
			<p v-if="currentReview.review_pt_3">
				{{ currentReview.review_pt_3 }}
			</p>
		</section>
	</section>
</template>

<style lang="scss" scoped>
	.review {
		display: grid;
		gap: 2rem;
		padding-bottom: 4rem;

		@include bp {
			grid-template-columns: minmax(min(100px, 100%), 250px) 1fr;
			grid-template-areas:
				"image date date"
				"image header header"
				"image info info"
				"review review review";
		}
	}

	.review__date {
		@include bp {
			grid-area: date;
		}
	}
	.review__header {
		@include bp {
			grid-area: header;
		}
	}

	.review__info {
		@include bp {
			grid-area: info;
		}
	}
	.review__review {
		@include bp {
			grid-area: review;
		}
	}

	.review__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		@include bp {
			grid-area: image;
		}
	}

	.review__genres {
		display: flex;
		flex-wrap: wrap;
		gap: 0.7rem;
	}

	.review__genre {
		&::after {
			content: ",";
		}

		&:last-of-type::after {
			content: "";
		}
	}

	.capitalize {
		text-transform: capitalize;
	}
</style>
