<script setup>
	definePageMeta({
		layout: "main",
	});
</script>

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
	@import "@/assets/scss/_layout.scss";
	.section-grid {
		@include layout-grid;
	}
</style>
