<script setup></script>

<template>
	<button class="app-btn" v-bind="$attrs">
		<slot name="icon"></slot>
		<slot></slot>
	</button>
</template>

<!-- <style lang="scss" scoped></style> -->

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
