<script setup></script>

<template>
	<article class="card">
		<NuxtImg src="/images/metro33.webp" class="card__img" />
		<section class="card__description">
			<p>14/03/2023</p>
			<header>
				<h3>Title</h3>
				<h4>Subtitle</h4>
			</header>
			<p class="card__description-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Corporis, quaerat laborum exercitationem animi itaque pariatur
				fuga tenetur obcaecati nobis? Maxime.
			</p>
		</section>
		<AppButtonLink class="card__btn app-btn--teal app-btn--md">
			Read review</AppButtonLink
		>
	</article>
</template>

<style lang="scss" scoped>
	.card {
		display: grid;
		gap: 2rem;
	}
	.card__img {
		width: 100%;
		object-fit: cover;
		aspect-ratio: 1;
		border-radius: $br-lg;
	}

	.card__description {
		display: grid;
		gap: 1rem;
	}

	.card__description-text {
		margin-top: 1rem;
	}
</style>
