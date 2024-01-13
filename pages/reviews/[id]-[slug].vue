<script setup>
	const supabaseStore = useSupabaseStore();
	const { currentReview } = storeToRefs(supabaseStore);
	const router = useRouter();

	const pageTitle = computed(() =>
		currentReview.value.book_subtitle &&
		currentReview.value.book_subtitle !== ""
			? `${currentReview.value.book_title}-${currentReview.value.book_subtitle}`
			: `${currentReview.value.book_title}`
	);

	useHead({
		title: pageTitle.value,
	});

	definePageMeta({
		middleware: "get-review",
	});

	const createdDate = computed(() =>
		currentReview.value.created_at.substring(0, 10).replaceAll("-", "/")
	);

	const creatorAvatar = [
		{
			creator: "madziora",
			url: "/images/cat_avatar.webp",
		},
		{
			creator: "koza",
			url: "/images/goat_avatar.webp",
		},
		{
			creator: "bober",
			url: "/images/beaver_avatar.webp",
		},
	];

	const avatarUrl = computed(() => {
		if (currentReview.value && currentReview.value.creator_id) {
			return creatorAvatar[currentReview.value.creator_id - 1].url;
		} else return creatorAvatar[0].url;
	});

	const goBack = () => router.go(-1);
</script>

<template>
	<section class="review">
		<NuxtImg :src="avatarUrl" class="review__avatar" v-if="avatarUrl" />
		<div class="review-wrapper">
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
						v-for="genre in currentReview.genre_name"
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
		</div>
		<AppButton @click="goBack" class="app-btn--teal">Go back</AppButton>
	</section>
</template>

<style lang="scss" scoped>
	.review {
		display: flex;
		flex-direction: column;
	}

	.review-wrapper {
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
		h1 {
			font-size: 4.5rem;
		}

		h2 {
			font-size: 3.5rem;
		}

		@include bp {
			grid-area: header;

			h1 {
				font-size: 5.5rem;
			}

			h2 {
				font-size: 4.5rem;
			}
		}
	}

	.review__info {
		@include bp {
			grid-area: info;
		}
	}
	.review__review {
		display: grid;
		gap: 1rem;
		@include bp {
			grid-area: review;
		}
	}

	.review__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: $br-md;
		@include bp {
			grid-area: image;
		}
	}

	.review__avatar {
		width: clamp(6rem, 9vw, 10rem);
		aspect-ratio: 1;
		opacity: 0.8;
		margin-inline: auto;
		margin-bottom: 2rem;

		@include bp {
			margin-bottom: 4rem;
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
