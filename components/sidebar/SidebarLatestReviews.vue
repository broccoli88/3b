<script setup>
	const supabaseStore = useSupabaseStore(),
		{ latestReviews } = storeToRefs(supabaseStore),
		generalStore = useGeneralStore();
</script>

<template>
	<section>
		<header class="sidebar-latest__header">
			<NuxtImg
				src="/images/ornaments/p7.webp"
				class="sidebar-latest__header-ornament"
			/>
			<p class="sidebar-latest__heading">Najnowsze Recenzje</p>
		</header>

		<ul>
			<SidebarCardMiniature
				@go-to-review="
					generalStore.goToReview(
						review.book_title,
						review.book_subtitle,
						review.review_id
					)
				"
				v-for="review in latestReviews"
				:key="review.review_id"
				:id="review.review_id"
				:author="review.author"
				:title="review.book_title"
				:subtitle="review.book_subtitle"
				:cover="review.cover_url"
			/>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
	.sidebar-latest__header {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin-bottom: 5rem;
	}

	.sidebar-latest__header-ornament {
		max-width: 40px;
	}

	.sidebar-latest__heading {
		--_fs-increment: 2.2;

		font-size: calc($fsm-txt * var(--_fs-increment));
		font-family: $ff-ayres;

		@include bp(1024px) {
			font-size: calc($fsd-txt * var(--_fs-increment));
		}
	}
</style>
