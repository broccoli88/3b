<script setup>
	const supabaseStore = useSupabaseStore();
	const { latestReviews } = storeToRefs(supabaseStore);

	const isDesktop = ref(true);

	onMounted(() => {
		isDesktop.value = useCheckWindowWidth();
		window.addEventListener("resize", () => {
			isDesktop.value = useCheckWindowWidth();
		});
	});
</script>

<template>
	<section>
		<header>
			<h2>Najnowsze recenzje</h2>
		</header>
		<ul class="last-reviews__list">
			<li
				v-for="(review, index) in latestReviews"
				:key="review.review_id"
				class="last-reviews__item"
			>
				<NuxtImg
					:src="`/images/ornaments/c${index + 1}.svg`"
					class="last-reviews__ornament"
					v-if="isDesktop"
				/>
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
	.last-reviews__list {
		@include card-grid;
		padding-block: 4rem;
	}

	.last-reviews__item {
		display: grid;
		gap: 2rem;
		grid-template-rows: auto 1fr;
	}

	.last-reviews__ornament {
		width: 6rem;
		justify-self: center;
		margin-bottom: -1rem;
		opacity: 0.5;
	}
</style>
