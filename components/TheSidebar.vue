<script setup>
	const isSearchAsideVisible = ref(false);
	const showSearchAside = () =>
		(isSearchAsideVisible.value = !isSearchAsideVisible.value);
</script>

<template>
	<aside
		class="aside"
		:class="{ 'aside_mobile-active': isSearchAsideVisible }"
	>
		<NuxtImg src="/images/ornaments/l3.webp" class="aside__ornament" />
		<header class="aside__header">
			<AppSearchBar />

			<button class="aside__mobile-btn" @click="showSearchAside">
				search
				<Icon name="ph:magnifying-glass-light" />
			</button>
		</header>

		<nav class="aside__nav">
			<li v-for="n in 4" :key="n" class="aside__nav-item">
				<Icon
					name="material-symbols-light:radio-button-partial-outline"
					color="teal"
					size="4rem"
				/>
				<NuxtLink to="#" class="aside__nav-link"> Fantasy</NuxtLink>
			</li>
		</nav>
	</aside>
</template>

<style lang="scss" scoped>
	.aside {
		--_gap: 1.5rem;

		height: min-content;
		display: grid;
		gap: calc(2 * var(--_gap));
		padding-top: 8rem;

		@include mobile-bp(1024px) {
			position: fixed;
			top: 10%;
			left: -300px;
			width: 300px;
			z-index: 999;
			transition: $tr-03;
			background-image: $clr-bg-teal-linear;

			padding-inline: 2rem;
			padding-block: 3rem;
			box-shadow: 5px 0 5px hsl(0, 0%, 0%, 0.2);
			border-radius: 0 0 $br-md 0;
		}
	}

	.aside__ornament {
		width: 5rem;
		opacity: 0.5;
		justify-self: center;
	}

	.aside__header {
		display: flex;
		align-items: center;
		gap: var(--_gap);
		position: relative;
	}

	.aside__mobile-btn {
		display: none;

		@include mobile-bp(1024px) {
			position: absolute;
			top: -3rem;
			right: calc(-3rem - ($fsd-txt * 1.45));

			writing-mode: sideways-lr;
			display: flex;
			align-items: center;
			gap: 0.4rem;
			padding: 1rem 0.5rem;

			border: none;
			box-shadow: 5px 0 5px hsl(0, 0%, 0%, 0.2);
			background-image: $clr-bg-teal-linear;
			font-family: $ff-oswald;
			font-size: $fsd-txt;
			letter-spacing: 1px;
			color: $clr-txt-light;
			line-height: 1.45;
			font-weight: 300;
			cursor: pointer;
			border-radius: 0 $br-sm $br-sm 0;
		}
	}

	.aside_mobile-active {
		left: 0;
	}

	.aside__nav {
		display: grid;
		gap: var(--_gap);
	}

	.aside__nav-item {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: min-content 1fr;
		align-items: center;
	}

	.aside__nav-link {
		display: block;
		text-transform: uppercase;
		padding: 2.5rem 1rem;
		color: $clr-txt-inactive;
		border-bottom: 0.5px solid hsl(0, 0%, 100%, 0.1);
		transition: $tr-02;

		&:hover,
		&:focus {
			color: $clr-txt-light;
		}
	}
</style>
