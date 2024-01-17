<script setup>
	useHead({
		title: "3B - Recenzje według gatunku",
	});

	const supabaseStore = useSupabaseStore(),
		{ genresInUseList } = storeToRefs(supabaseStore),
		generalStore = useGeneralStore();
</script>

<template>
	<section class="genres">
		<header class="genres__header">
			<h1>Recenzje według gatunku</h1>
		</header>

		<section>
			<ul class="genres__list">
				<li
					class="genres__item"
					v-for="(genre, index) in genresInUseList"
					:key="index"
					@click="generalStore.goToGenre(genre.genre_name)"
				>
					<NuxtImg :src="genre.icon_url" class="genres__icon" />
					<p>{{ genre.genre_name }}</p>
				</li>
			</ul>
		</section>
	</section>
</template>

<style lang="scss" scoped>
	.genres__header {
		margin-bottom: 4rem;
	}
	.genres__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));

		column-gap: 1rem;
		row-gap: 2rem;
	}
	.genres__item {
		// border: 1px solid $clr-bg-teal1;
		font-size: 1.8rem;
		border-radius: $br-sm;
		text-align: center;
		cursor: pointer;
		padding: 1rem;
		transition: $tr-03;
		display: grid;
		justify-content: center;

		&:hover {
			scale: 1.02;
		}

		@include bp {
			font-size: 2rem;
		}

		p {
			align-self: flex-end;
		}
	}

	.genres__icon {
		max-width: 150px;
		height: 100%;
		max-height: 150px;
	}
</style>
