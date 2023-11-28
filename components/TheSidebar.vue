<script setup></script>

<template>
	<aside class="aside">
		<header class="aside__header">
			<Icon name="bi:flower2" size="4rem" />
			<div class="aside__header-text">
				<h4>Look for review</h4>
				<!-- <p>look for books</p> -->
			</div>
		</header>

		<nav class="aside__nav">
			<li v-for="n in 5" :key="n" class="aside__nav-item">
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
	}

	.aside__header {
		display: flex;
		align-items: center;
		gap: var(--_gap);
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
