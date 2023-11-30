<script setup>
	const supabaseStore = useSupabaseStore();
	const { latestReviews } = storeToRefs(supabaseStore);
</script>

<template>
	<section class="last-reviews">
		<header class="last-reviews__header">
			<h2>Latest Reviews</h2>
		</header>
		<ul class="last-reviews__list">
			<li v-for="review in latestReviews" :key="review.review_id">
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
	.last-reviews__header {
		margin-bottom: 4rem;
	}

	.last-reviews__list {
		display: grid;
		gap: 3rem;

		@include bp {
			grid-auto-flow: column;
			grid-auto-columns: 1fr;
		}
	}
</style>
