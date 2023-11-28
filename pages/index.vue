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

		@include bp {
			grid-template-columns: minmax(100px, 350px) 1fr;
			padding: 4rem 5rem;
		}
	}
</style>
