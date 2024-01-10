<script setup>
	definePageMeta({
		middleware: "get-all-reviews-by-genre",
	});

	const route = useRoute();

	useHead({
		title: `3B - Recenzje w gatunku ${route.params.slug}`,
	});

	const supabaseStore = useSupabaseStore(),
		{ reviewsByGenreList } = storeToRefs(supabaseStore);

	const heading = computed(() => {
		const replaceText = route.params.slug.replaceAll("_", " ");
		return replaceText.replaceAll("-", "/");
	});
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
