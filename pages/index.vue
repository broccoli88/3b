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
	.section-grid {
		@include layout-grid;
	}
</style>
