<script setup></script>

<template>
	<button class="app-btn">
		<slot name="icon"></slot>
		<slot></slot>
	</button>
</template>

<!-- <style lang="scss" scoped></style> -->

<style lang="scss">
	.app-btn {
		background-color: transparent;
		border-radius: $br-md;
		border: none;
		color: $clr-txt-light;
		cursor: pointer;
		font-family: $ff-oswald;
		font-size: $fsd-txt;
		font-weight: 500;
		letter-spacing: 0.5px;
		padding: 1.6rem 4rem;
		text-transform: uppercase;
		transition: $tr-03;
		white-space: nowrap;
		background-color: black;
		text-align: center;

		&:hover,
		&:focus {
			filter: brightness(1.1);
		}
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
