<script setup>
	definePageMeta({
		middleware: "get-all-reviews",
	});

	const supabaseStore = useSupabaseStore();
	const { allReviews } = storeToRefs(supabaseStore);
</script>

<template>
	<section class="reviews">
		<header>
			<h1>Zbiór recenzji</h1>
		</header>

		<ul class="reviews__grid">
			<li v-for="review in allReviews" :key="review.review_id">
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
	.reviews__grid {
		@include card-grid;
		padding-block: 4rem;
	}
</style>
