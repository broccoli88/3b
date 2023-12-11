<script setup>
	const emits = defineEmits(["update-genre"]);

	const props = defineProps({
		id: String,
		label: String,
		state: Boolean,
	});

	const supabaseStore = useSupabaseStore(),
		{ genres } = storeToRefs(supabaseStore);

	const genresList = ref([]),
		selectedGenreList = ref([]);

	onMounted(async () => {
		if (!genres.value) return;

		await supabaseStore.fetchGenres();
		genresList.value = [...genres.value];
	});

	const sortedGenresList = computed(() =>
		genresList.value.sort((a, b) => {
			const nameA = a.genre_name.toLowerCase();
			const nameB = b.genre_name.toLowerCase();

			if (nameA < nameB) return -1;
			if (nameA > nameB) return 1;
			if (nameA === nameB) return 0;
		})
	);

	const sortedSelectedGenresList = computed(() =>
		selectedGenreList.value.sort((a, b) => {
			const nameA = a.genre_name.toLowerCase();
			const nameB = b.genre_name.toLowerCase();

			if (nameA < nameB) return -1;
			if (nameA > nameB) return 1;
			if (nameA === nameB) return 0;
		})
	);

	const selectGenre = (genreObj) => {
		selectedGenreList.value.push(genreObj);
		genresList.value = genresList.value.filter(
			(g) => g.genre_id !== genreObj.genre_id
		);

		emits("update-genre", selectedGenreList.value);
	};

	const deselectGenre = (genreObj) => {
		selectedGenreList.value = selectedGenreList.value.filter(
			(g) => g.genre_id !== genreObj.genre_id
		);
		genresList.value.push(genreObj);
		emits("update-genre", selectedGenreList.value);
	};
</script>

<template>
	<section class="genres-input">
		<section class="genres-input__selection-wrapper">
			<div class="genres-input__selection" :id="id">
				<label :for="id" class="label" :class="{ 'genre-error': state }"
					>{{ label }}:
					<span v-if="state"
						>Musisz wybrać gatunek sieroto :p</span
					></label
				>
				<p
					v-for="genre in sortedGenresList"
					:key="genre.genre_id"
					@click="selectGenre(genre)"
					class="genres-input__genre genres-input__genre--to-selected"
				>
					{{ genre.genre_name }}
				</p>
			</div>
			<div
				id="genre-selected"
				class="genres-input__selection"
				v-if="selectedGenreList.length > 0"
			>
				<label for="genre-selected" class="label"
					>Selected genre:
				</label>
				<p
					v-for="genre in sortedSelectedGenresList"
					:key="genre.genre_id"
					@click="deselectGenre(genre)"
					class="genres-input__genre genres-input__genre--selected"
				>
					{{ genre.genre_name }}
					<Icon name="ic:outline-close" size="15px" />
				</p>
			</div>
		</section>
	</section>
</template>

<style lang="scss" scoped>
	.genres-input {
		display: grid;
		gap: 2rem;
	}

	.genres-input__selection-wrapper {
		display: grid;
		gap: 3rem;
	}

	.genres-input__selection {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;

		& label:first-child {
			display: block;
			width: 100%;
			margin-bottom: 0.7rem;
		}
	}

	.genres-input__genre {
		padding: 0.7rem 1rem;
		border-radius: $br-md;
		cursor: pointer;
		transition: $tr-02;

		display: flex;
		gap: 0.5rem;
		align-items: center;

		&:hover {
			filter: brightness(1.15);
		}
	}

	.genres-input__genre--to-selected {
		background-color: $clr-btn-card;
	}

	.genres-input__genre--selected {
		background-color: $clr-btn-hero;
	}

	.genre-error {
		color: $clr-txt-error;
	}
</style>
