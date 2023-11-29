<script setup></script>

<template>
	<section class="last-reviews">
		<header class="last-reviews__header">
			<h2>Latest Reviews</h2>
		</header>
		<ul class="last-reviews__list">
			<li>
				<AppCard />
			</li>
			<li>
				<AppCard />
			</li>
			<li>
				<AppCard />
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
	.last-reviews {
		padding: 1rem;
	}

	.last-reviews__header {
		margin-bottom: 4rem;
	}

	.last-reviews__list {
		display: grid;
		gap: 3rem;

		@include bp {
			grid-auto-flow: column;
		}
	}
</style>
