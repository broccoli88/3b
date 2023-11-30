<script setup>
	defineProps({
		link: {
			type: String,
			default: "/",
		},
	});
</script>

<template>
	<NuxtLink :to="link" class="app-btn" type="button">
		<slot name="icon"></slot>
		<slot></slot>
	</NuxtLink>
</template>

<style lang="scss">
	.app-btn {
		@include button;
	}

	.app-btn--purple {
		background-color: $clr-btn-hero;
	}

	.app-btn--teal {
		background-color: $clr-btn-card;
	}

	.app-btn--md {
		width: min-content;
	}
</style>
