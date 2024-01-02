<script setup>
	const creators = reactive([
		{
			name: "Madziora",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores harum autem necessitatibus exercitationem qui officia, cupiditate, provident voluptates sunt deleniti obcaecati expedita debitis quisquam eligendi omnis. Obcaecati officia voluptatibus  dolor quod explicabo!",
			avatar: "/images/cat_avatar.webp",
		},
		{
			name: "Koza",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores harum autem necessitatibus exercitationem qui officia, cupiditate, provident voluptates sunt deleniti obcaecati expedita debitis quisquam eligendi omnis. Obcaecati officia voluptatibus  dolor quod explicabo!",
			avatar: "/images/goat_avatar.webp",
		},
		{
			name: "Bober",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores harum autem necessitatibus exercitationem qui officia, cupiditate, provident voluptates sunt deleniti obcaecati expedita debitis quisquam eligendi omnis. Obcaecati officia voluptatibus  dolor quod explicabo!",
			avatar: "/images/beaver_avatar.webp",
		},
	]);
</script>

<template>
	<section class="about">
		<h1>About</h1>
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
