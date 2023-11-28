<script setup></script>

<template>
	<section class="hero">
		<NuxtPicture src="/images/hero.webp" class="hero__bg" />
		<header class="hero__header">
			<h1>Book Reviews</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
				vitae? Ullam exercitationem id est mollitia error at sit,
				laborum accusamus unde nemo dolores nulla debitis ex quis rem
				odit voluptate.
			</p>
			<AppButtonLink class="hero__btn app-btn--purple"
				>Check Reviews
			</AppButtonLink>
		</header>
	</section>
</template>

<style lang="scss" scoped>
	.hero {
		min-height: 70vh;
		display: grid;
		align-items: center;

		& > * {
			grid-column: 1 / -1;
			grid-row: 1 / -1;
		}
	}

	.hero__bg {
		width: 100%;
		height: 100%;
	}

	.hero__bg :deep(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: left;
	}

	.hero__header {
		max-width: 45ch;
		padding-inline: 2rem;
		color: $clr-txt-dark;

		display: grid;
		gap: 1rem;
	}

	.hero__btn {
		margin-block: 4rem;
	}
</style>
