<script setup>
	import creators from "../data/creators.json";

	useHead({
		title: "3B - O Nas",
	});
</script>

<template>
	<section class="about">
		<header>
			<h1>Trochę o nas samych</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
				nihil nostrum. Perspiciatis ab aperiam, dignissimos soluta quod
				exercitationem totam ea fugiat. Exercitationem et amet cumque
				doloribus distinctio itaque quibusdam animi consectetur nisi
				molestiae tempora, quae delectus labore optio. A maiores quod
				repellendus dolorem harum sunt temporibus officiis eum facilis
				cumque minus voluptatem aspernatur aliquam aliquid molestias
				omnis quis esse mollitia qui, quam dignissimos perspiciatis
				incidunt ab. Sapiente quisquam maiores numquam, distinctio at,
				illo deserunt sunt qui atque earum sint perferendis aspernatur
				corporis architecto molestiae dolores optio voluptas cum itaque
				mollitia totam nemo. Aperiam autem ipsam tempora impedit nemo
				vero iure.
			</p>
		</header>

		<AboutCard
			v-for="creator in creators"
			:key="creator.name"
			:name="creator.name"
			:text="creator.text"
			:avatar="creator.avatar"
			class="about__card-comp"
		/>
	</section>
</template>

<style lang="scss" scoped>
	.about {
		display: grid;
		gap: 4rem;

		@include bp {
			gap: 8rem;
		}
	}

	.about__card-comp:nth-child(3) {
		--img-order: 2;
		--description-order: 1;
	}
</style>
