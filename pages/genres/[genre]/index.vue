<script setup>
	definePageMeta({
		middleware: "get-all-reviews-by-genre",
	});

	const route = useRoute();

	useHead({
		title: `3B - ${route.params.genre}`,
	});

	const supabaseStore = useSupabaseStore(),
		{ reviewsByGenreList } = storeToRefs(supabaseStore);

	const heading = computed(() => {
		const replaceText = route.params.genre.replaceAll("_", " ");
		return replaceText.replaceAll("-", "/");
	});

	const basicLink = `/genres/${route.params.genre}`;
</script>

<template>
	<section>
		<header>
			<h1>{{ heading }}</h1>
		</header>

		<ul class="reviews-by-genre__grid">
			<li v-for="review in reviewsByGenreList" :key="review.review_id">
				<AppCard
					:id="review.review_id"
					:author="review.author"
					:subtitle="review.book_subtitle"
					:title="review.book_title"
					:cover="review.cover_url"
					:created_at="review.created_at"
					:review="review.review_pt_1"
					:link="basicLink"
				/>
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
	.reviews-by-genre__grid {
		@include card-grid;
		padding-block: 4rem;
	}
</style>
