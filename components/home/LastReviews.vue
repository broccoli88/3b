<script setup></script>

<template>
	<section>
		<header>
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
	.last-reviews__list {
		display: grid;
		grid-auto-flow: column;
		gap: 3rem;
	}
</style>
