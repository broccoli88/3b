<script setup></script>

<template>
	<div>
		<HomeHero />
		<div class="section-grid">
			<TheSidebar />
			<div>
				<HomeLastReviews />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.home {
		display: grid;
	}
	.section-grid {
		display: grid;

		@include bp(1024px) {
			grid-template-columns: minmax(100px, 300px) 1fr;
			padding: 4rem 5rem;
			gap: 4rem;
		}
	}
</style>
