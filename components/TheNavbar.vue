<script setup>
	import links from "../data/links.json";

	const isMobileMenuOpen = ref(false);
	const currentMenuIcon = computed(() =>
		isMobileMenuOpen.value
			? "material-symbols:playlist-remove"
			: "material-symbols:playlist-play"
	);

	const toggleMobileMenu = () =>
		(isMobileMenuOpen.value = !isMobileMenuOpen.value);

	const checkWidth = () => {
		const isDesktop = useCheckWindowWidth();
		if (isDesktop) isMobileMenuOpen.value = false;
	};

	onMounted(() => {
		window.addEventListener("resize", checkWidth);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", checkWidth);
	});
</script>

<template>
	<header class="navbar">
		<AppLogo />
		<button class="navbar__menu" @click="toggleMobileMenu">
			<Icon :name="currentMenuIcon" class="navbar__menu-icon" />
		</button>
		<nav
			class="navbar__nav"
			:class="{ 'mobile-menu-active': isMobileMenuOpen }"
		>
			<li v-for="link in links" :key="link.name">
				<NuxtLink :to="link.link" class="navbar__nav-link">
					{{ link.name }}</NuxtLink
				>
			</li>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 2rem;
		position: relative;
		isolation: isolate;

		@include mobile-bp {
			padding: 1rem;
			position: static;
			isolation: auto;

			&::before {
				display: none;
			}
		}

		&::before {
			content: "";
			position: absolute;
			top: 0px;
			left: 0;
			width: 100%;
			height: 200%;
			z-index: -1;

			background-image: linear-gradient(
				-45deg,
				$clr-bg-teal2 10%,
				transparent,
				$clr-ornament-light 30%,
				transparent 50%,
				transparent 60%,
				$clr-ornament-light 75%,
				transparent 90%,
				$clr-bg-teal2
			);
		}
	}

	.navbar__menu {
		display: none;
		cursor: pointer;
		background-color: transparent;
		border: none;

		@include mobile-bp {
			display: block;
			display: flex;
			position: relative;
			z-index: 999;
		}

		.navbar__menu-icon {
			font-size: 3.5rem;
			color: $clr-txt-inactive;
			transition: $tr-02;

			&:hover,
			&:focus {
				color: $clr-txt-light;
			}
		}
	}

	.navbar__nav {
		display: flex;
		@include mobile-bp {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 998;
			clip-path: circle(0% at 100% 50%);

			flex-direction: column;
			justify-content: center;
			align-items: center;

			background-image: $clr-bg-teal-linear;
			transition: $tr-03;
		}

		.router-link-active {
			color: $clr-txt-light;
		}
	}

	.mobile-menu-active {
		clip-path: circle(112% at 100% 50%);
	}

	.navbar__nav li:last-of-type .navbar__nav-link {
		@include mobile-bp {
			border-bottom: $border-light;
		}
	}
	.navbar__nav-link {
		display: block;
		text-transform: uppercase;
		padding: 1.5rem 3rem;
		color: $clr-txt-inactive;
		border-left: $border-light;
		transition: $tr-02;

		&:hover,
		&:focus {
			color: $clr-txt-light;
		}

		@include mobile-bp {
			border-top: $border-light;
			border-inline: none;
			font-size: 3rem;
		}
	}
</style>
