<script setup></script>

<template>
	<NuxtLink to="/" class="app-btn" type="button">
		<slot name="icon"></slot>
		<slot></slot>
	</NuxtLink>
</template>

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
		padding: 2rem 3rem;
		text-transform: uppercase;
		transition: $tr-03;
		white-space: nowrap;
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
