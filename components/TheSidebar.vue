<script setup>
	const supabaseStore = useSupabaseStore(),
		{ genresInUseList } = storeToRefs(supabaseStore),
		generalStore = useGeneralStore();

	const isSearchAsideVisible = ref(false);
	const showSearchAside = () =>
		(isSearchAsideVisible.value = !isSearchAsideVisible.value);

	onMounted(async () => await supabaseStore.getAllGenresInUse());
</script>

<template>
	<aside
		class="aside"
		:class="{ 'aside_mobile-active': isSearchAsideVisible }"
	>
		<button class="aside__mobile-btn" @click="showSearchAside">
			<Icon
				name="ph:magnifying-glass-light"
				class="aside__mobile-btn-icon"
			/>
		</button>
		<div class="aside__content-wrapper">
			<NuxtImg src="/images/ornaments/l3.webp" class="aside__ornament" />
			<header class="aside__header">
				<SidebarSearchBar />
			</header>
			<nav class="aside__nav" v-if="genresInUseList.length > 0">
				<li
					v-for="(genre, index) in genresInUseList"
					:key="index"
					@click="generalStore.goToGenre(genre.genre_name)"
					class="aside__nav-item"
				>
					<NuxtImg :src="genre.icon_url" class="aside__genre-icon" />
					<p
						@click="generalStore.goToGenre(genre.genre_name)"
						class="aside__nav-link"
					>
						{{ genre.genre_name }}
					</p>
				</li>
			</nav>
			<SidebarLatestReviews />
		</div>
	</aside>
</template>

<style lang="scss" scoped>
	.aside {
		--_gap: 1.5rem;
		--_shadow-width: 5px;

		@include mobile-bp(1024px) {
			position: fixed;
			top: 0;
			left: calc(-300px - var(--_shadow-width));
			z-index: 999;
			transition: $tr-03;
			background-image: $clr-bg-teal-linear;

			box-shadow: var(--_shadow-width) 0 var(--_shadow-width)
				hsl(0, 0%, 0%, 0.2);
			border-radius: 0 0 $br-md 0;
		}
	}

	.aside__content-wrapper {
		height: min-content;
		display: grid;
		gap: calc(3 * var(--_gap));
		padding-top: 5rem;

		@include mobile-bp(1024px) {
			padding-inline: 2rem;
			padding-block: 3rem;
			width: 300px;
			height: 100dvh;
			overflow-y: scroll;
		}
	}

	.aside_mobile-active {
		left: 0;
	}

	.aside__ornament {
		width: 6rem;
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
			top: 20%;
			right: -4rem;
			// z-index: 999;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1rem;

			border: none;
			box-shadow: 5px 0 5px hsl(0, 0%, 0%, 0.2);
			background-image: $clr-bg-teal-linear;
			cursor: pointer;
			border-radius: 0 $br-sm $br-sm 0;
		}
		.aside__mobile-btn-icon {
			width: 2rem;
			height: 2rem;
			color: $clr-txt-inactive;
			transition: $tr-02;
		}

		&:hover,
		&:focus {
			.aside__mobile-btn-icon {
				color: $clr-txt-light;
			}
		}
	}

	.aside__nav {
		display: grid;
		gap: var(--_gap);

		@include mobile-bp {
			height: min-content;
		}
	}

	.aside__nav-item {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: min-content 1fr;
		align-items: center;
	}

	.aside__nav-link {
		text-transform: uppercase;
		padding: 2.5rem 1rem;
		color: $clr-txt-inactive;
		border-bottom: 0.5px solid hsl(0, 0%, 100%, 0.1);
		transition: $tr-02;
		cursor: pointer;

		&:hover,
		&:focus {
			color: $clr-txt-light;
		}
	}

	.aside__genre-icon {
		max-width: 5rem;
	}
</style>
