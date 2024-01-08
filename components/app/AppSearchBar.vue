<script setup>
	const supabaseStore = useSupabaseStore(),
		{ allReviews } = storeToRefs(supabaseStore),
		generalStore = useGeneralStore();

	const isFocusOn = ref(false),
		searchedPhrase = ref("");

	const filteredReviews = computed(() =>
		allReviews.value.filter((review) => {
			const phrase = searchedPhrase.value.toLowerCase();

			if (
				searchedPhrase.value &&
				(review.book_title.toLowerCase().includes(phrase) ||
					review.book_subtitle.toLowerCase().includes(phrase) ||
					review.author.toLowerCase().includes(phrase))
			)
				return review;
		})
	);

	const outlineFormOn = () => (isFocusOn.value = true),
		outlineFormOff = () => (isFocusOn.value = false),
		clearSearchInput = () => (searchedPhrase.value = "");

	watchEffect(async () => {
		if (searchedPhrase.value && allReviews.value.length === 0) {
			await supabaseStore.getAllReviews();
		}
	});

	const goToReview = (review) => {
		generalStore.goToReview(
			review.book_title,
			review.book_subtitle,
			review.review_id
		);

		searchedPhrase.value = "";
	};
</script>

<template>
	<form class="search__form">
		<label for="search" class="search__label">
			<NuxtImg src="/images/ornaments/l2.webp" class="search__ornament" />
			<p>Wyszukaj recenzję</p>
		</label>
		<section
			class="search__input-container"
			:class="{ 'search__input-outline': isFocusOn }"
		>
			<input
				type="text"
				name="search"
				id="search"
				class="search__input"
				v-model="searchedPhrase"
				@input="displaySearchResults"
				@focus="outlineFormOn"
				@blur="outlineFormOff"
			/>
			<button
				class="search__clear-input-btn"
				@click="clearSearchInput"
				v-if="searchedPhrase"
			>
				<Icon
					name="material-symbols-light:close-rounded"
					size="2rem"
					color="#bfbfbf"
				/>
			</button>
			<button class="search__btn">
				<Icon
					name="ph:magnifying-glass-light"
					size="2rem"
					color="#bfbfbf"
				/>
			</button>
		</section>
		<section
			class="search__search-results-wrapper"
			:class="{ 'search__search-results-active': searchedPhrase }"
		>
			<ul class="search__search-results">
				<li
					v-for="review in filteredReviews"
					:key="review.review_id"
					@click="goToReview(review)"
					class="search__search-results-item"
				>
					<NuxtImg
						:src="review.cover_url"
						class="search__search-results-thumbnail"
					/>
					<div class="search__search-results-description">
						<p>{{ review.book_title }}</p>
						<p>{{ review.book_subtitle }}</p>
						<p>{{ review.author }}</p>
					</div>
				</li>
			</ul>
		</section>
	</form>
</template>

<style lang="scss" scoped>
	.search__form {
		--_fs-increment: 2.2;
		--_bg: hsl(207, 41%, 21%);
		--_bg-active: hsl(207, 41%, 15%);

		width: 100%;
		display: grid;
		gap: 1.5rem;
		position: relative;
		isolation: isolate;
	}

	.search__label {
		display: flex;
		gap: 2rem;
		align-items: center;
		font-size: calc($fsm-txt * var(--_fs-increment));
		font-family: $ff-ayres;

		@include bp(1024px) {
			font-size: calc($fsd-txt * var(--_fs-increment));
		}
	}

	.search__input-container {
		display: flex;
		border-radius: $br-md;
		background-color: var(--_bg);
		overflow: hidden;
		transition: $tr-02;
		border: 1px solid transparent;
	}

	.search__input-outline {
		border: 1px solid $clr-btn-card;
	}

	.search__input {
		@include font-reset($fs: $fsm-txt, $tt: none);
		width: 100%;
		background-color: transparent;
		border: none;
		padding: 0.65em 1.3em;
		outline: none;
	}

	.search__clear-input-btn,
	.search__btn {
		background-color: var(--_bg);
		border: none;
		padding-inline: 1rem;
		cursor: pointer;
		transition: $tr-03;

		&:hover,
		&:focus {
			filter: brightness(1.1);
		}
	}

	.search__btn {
		position: relative;

		&:hover,
		&:focus {
			filter: brightness(1.1);
		}

		&::before {
			content: "";

			position: absolute;
			top: 50%;
			left: 0;
			width: 1px;
			height: 60%;
			z-index: 1;

			translate: 0 -50%;
			background-color: hsl(0, 0%, 100%, 0.1);
		}
	}

	.search__ornament {
		width: 5rem;
		opacity: 0.7;
		justify-self: center;
	}

	.search__search-results-wrapper {
		display: grid;
		grid-template-rows: 0fr;

		position: absolute;
		top: calc(100% - 20px);
		left: 0;
		width: 100%;
		z-index: -1;

		padding-top: 2rem;

		background-color: var(--_bg);
		border-radius: 0 0 $br-md $br-md;
		transition: $tr-03;
	}

	.search__search-results-active {
		grid-template-rows: 1fr;
	}

	.search__search-results {
		overflow: hidden;
	}

	.search__search-results-item {
		display: flex;
		gap: 1rem;
		align-items: center;
		max-height: 100px;
		padding-block: 1rem;
		padding-inline: 1rem;
		cursor: pointer;
		position: relative;
		transition: $tr-02;

		&:last-of-type {
			border-bottom: none;
		}

		&:hover {
			background-color: var(--_bg-active);
		}

		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 80%;
			height: 1px;
			background-color: hsl(0, 0%, 100%, 0.2);
			translate: -50%;
		}
	}

	.search__search-results-thumbnail {
		width: 50px;
		object-fit: contain;
	}

	.search__search-results-description {
		text-transform: capitalize;
		& p:first-child {
			font-size: 2rem;
		}
	}
</style>
