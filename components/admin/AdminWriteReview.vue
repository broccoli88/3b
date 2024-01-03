<script setup>
	const adminStore = useAdminStore(),
		{ createReviewState, v, isGenreEmpty } = storeToRefs(adminStore);

	const adminCreateReviewInputData = reactive({
		book_title: {
			label: "Book title*",
			id: "title",
			placeholder: "Enter book title",
		},
		book_subtitle: {
			label: "Book subtitle",
			id: "subtitle",
			placeholder: "Enter book subtitle",
		},
		published_at: {
			label: "Published*",
			id: "published",
			placeholder: "When was published ?",
		},
		author: {
			label: "Author*",
			id: "author",
			placeholder: "Who wrote that crap ?",
		},
		genres: {
			label: "Genres*",
			id: "genres",
		},
		review_part_1: {
			label: "Review part 1*",
			id: "review-part-1",
			placeholder: "First part of the review",
		},
		review_part_2: {
			label: "Review part 2",
			id: "review-part-2",
			placeholder: "Second part of the review",
		},
		review_part_3: {
			label: "Review part 3",
			id: "review-part-3",
			placeholder: "Third part of the review",
		},
		cover: {
			label: "Books cover*",
			id: "book-cover",
		},
		creator: {
			label: "Twórca recenzji*",
			id: "creator",
			placeholder: "Wybierz twórcę recenzji",
		},
	});

	const updateGenre = (genreArr) => {
		createReviewState.value.genres = genreArr.map((g) => g.genre_id);
	};

	watch(
		() => createReviewState.value.genres,
		() => {
			createReviewState.value.genres.length > 0
				? (isGenreEmpty.value = false)
				: (isGenreEmpty.value = true);
		}
	);
</script>

<template>
	<section class="create-review">
		<h1>Write a Review</h1>
		<form
			class="create-review__form"
			@submit.prevent="adminStore.submitReview"
		>
			<section class="create-review__first-section">
				<FormFileInput
					:label="adminCreateReviewInputData.cover.label"
					:id="adminCreateReviewInputData.cover.id"
					:v="v.cover_url"
				/>
				<section class="create-review__second-section">
					<FormInput
						:label="adminCreateReviewInputData.book_title.label"
						:id="adminCreateReviewInputData.book_title.id"
						:placeholder="
							adminCreateReviewInputData.book_title.placeholder
						"
						:v="v.book_title"
						v-model="createReviewState.book_title"
					/>
					<FormInput
						:label="adminCreateReviewInputData.book_subtitle.label"
						:id="adminCreateReviewInputData.book_subtitle.id"
						:placeholder="
							adminCreateReviewInputData.book_subtitle.placeholder
						"
						:v="v.book_subtitle"
						v-model="createReviewState.book_subtitle"
					/>
					<FormInput
						type="date"
						:label="adminCreateReviewInputData.published_at.label"
						:id="adminCreateReviewInputData.published_at.id"
						:placeholder="
							adminCreateReviewInputData.published_at.placeholder
						"
						:v="v.published_at"
						v-model="createReviewState.published_at"
					/>
					<FormInput
						:label="adminCreateReviewInputData.author.label"
						:id="adminCreateReviewInputData.author.id"
						:placeholder="
							adminCreateReviewInputData.author.placeholder
						"
						:v="v.author"
						v-model="createReviewState.author"
					/>
					<FormSelectInput
						:label="adminCreateReviewInputData.creator.label"
						:id="adminCreateReviewInputData.creator.id"
						:placeholder="
							adminCreateReviewInputData.creator.placeholder
						"
						:v="v.creator_id"
						v-model="createReviewState.creator_id"
					/>
				</section>
			</section>
			<FormSelectGenreInput
				:label="adminCreateReviewInputData.genres.label"
				:id="adminCreateReviewInputData.genres.id"
				:state="isGenreEmpty"
				@update-genre="updateGenre"
				:v="v.genres"
			/>

			<FormTextInput
				:label="adminCreateReviewInputData.review_part_1.label"
				:id="adminCreateReviewInputData.review_part_1.id"
				:placeholder="
					adminCreateReviewInputData.review_part_1.placeholder
				"
				:v="v.review_pt_1"
				v-model="createReviewState.review_pt_1"
			/>
			<FormTextInput
				:label="adminCreateReviewInputData.review_part_2.label"
				:id="adminCreateReviewInputData.review_part_2.id"
				:placeholder="
					adminCreateReviewInputData.review_part_2.placeholder
				"
				:v="v.review_pt_2"
				v-model="createReviewState.review_pt_2"
			/>
			<FormTextInput
				:label="adminCreateReviewInputData.review_part_3.label"
				:id="adminCreateReviewInputData.review_part_3.id"
				:placeholder="
					adminCreateReviewInputData.review_part_3.placeholder
				"
				:v="v.review_pt_3"
				v-model="createReviewState.review_pt_3"
			/>
			<AppButton
				type="submit"
				class="app-btn--teal create-review__form-btn"
				>Submit Review
			</AppButton>
		</form>
	</section>
</template>

<style lang="scss" scoped>
	.create-review__form {
		display: grid;
		gap: 2rem;
	}

	.create-review__first-section {
		display: grid;
		grid-template-columns: min-content 1fr;
		gap: 4rem;
	}

	.create-review__second-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.create-review__form-btn {
		margin-top: 3rem;
	}
</style>
