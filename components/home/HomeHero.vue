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
		position: relative;
		isolation: isolate;

		@include bp {
			min-height: auto;
		}

		& > * {
			grid-column: 1 / -1;
			grid-row: 1 / -1;
		}

		&::after {
			content: "";

			position: absolute;
			bottom: -20%;
			left: 45%;
			width: 25%;
			aspect-ratio: 1;
			z-index: -1;
			border-radius: 50%;
			filter: blur(100px);

			background-image: linear-gradient($clr-bg-teal3 20%, transparent);
		}
	}

	.hero__bg {
		width: 100%;
		height: 100%;
	}

	.hero__bg :deep(img) {
		width: 100%;
		height: 100%;
		max-height: 675px;
		object-fit: cover;
		object-position: left;
	}

	.hero__header {
		max-width: 45ch;
		padding-inline: 2rem;
		color: $clr-txt-dark;

		display: grid;
		gap: 1rem;
		text-wrap: balance;
	}

	.hero__btn {
		margin-block: 4rem;
	}
</style>
