<script setup>
	const supabaseStore = useSupabaseStore(),
		{ genres } = storeToRefs(supabaseStore);

	const genresList = ref([]);
	const selectedGenreList = ref([]);

	onMounted(async () => {
		if (genres.value.length === 0) await supabaseStore.fetchGenres();
		genresList.value = [...genres.value];
	});
</script>

<template>
	<section>
		<h1>Write Review</h1>
		<form>
			<FormFileInput />
		</form>
	</section>
</template>

<style lang="scss" scoped></style>
