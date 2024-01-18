<script setup>
	// const isUserNavVisible = ref(false);

	// onMounted(() => {
	// 	window.addEventListener("keydown", (e) => {
	// 		if (e.ctrlKey && e.key === "k") {
	// 			isUserNavVisible.value = !isUserNavVisible.value;
	// 		}
	// 	});
	// });
</script>

<template>
	<nav class="user-nav">
		<NuxtLink to="/admin" class="user-nav__link">zaloguj się</NuxtLink>
	</nav>
</template>

<style lang="scss" scoped>
	.user-nav {
		@include container;
		display: grid;
		justify-content: end;
		padding-inline: 1rem;
		padding-bottom: 1rem;

		@include bp {
			padding-inline: 3rem;
			padding-bottom: 2rem;
		}
	}

	.user-nav__link {
		text-transform: uppercase;
		color: $clr-txt-inactive;
		transition: $tr-02;

		&:hover,
		&:focus {
			color: $clr-txt-light;
		}
	}
</style>
