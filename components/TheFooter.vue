<script setup>
	import links from "../data/links.json";
</script>

<template>
	<footer class="footer">
		<AppLogo class="footer__logo" />
		<section>
			<nav>
				<li v-for="link in links" :key="link.name">
					<NuxtLink :to="link.link" class="footer__link">
						{{ link.name }}</NuxtLink
					>
				</li>
			</nav>
		</section>
	</footer>
</template>

<style lang="scss" scoped>
	.footer {
		@include container;
		display: flex;
		gap: 3rem;
		margin-top: 4rem;

		@include mobile-bp {
			padding-inline: 1rem;
		}

		.router-link-active {
			color: $clr-txt-light;
		}
	}

	.footer__logo {
		position: static;
		z-index: 0;
	}

	.footer__link {
		text-transform: uppercase;
		color: $clr-txt-inactive;
		transition: $tr-02;

		&:hover,
		&:focus {
			color: $clr-txt-light;
		}
	}
</style>
