<script setup></script>

<template>
	<div class="loader">
		<div class="book">
			<figure class="page"></figure>
			<figure class="page"></figure>
			<figure class="page"></figure>
		</div>
		<h1>READING</h1>
	</div>
</template>

<style lang="scss" scoped>
	h1 {
		color: #ffffff;
		text-align: center;
		font-family: $ff-oswald;
		text-transform: uppercase;
		font-size: 20px;
		position: relative;
	}

	h1:after {
		position: absolute;
		content: "";
		-webkit-animation: Dots 2s cubic-bezier(0, 0.39, 1, 0.68) infinite;
		animation: Dots 2s cubic-bezier(0, 0.39, 1, 0.68) infinite;
	}

	.loader {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 15rem;
		height: 15rem;
		z-index: 999;
		translate: -50% -50%;

		display: grid;
		place-content: center;
		background-color: hsl(198, 43%, 30%, 0.8);
		box-shadow: 0 0 30px hsl(0, 0%, 0%, 0.5);
		border-radius: 50%;
	}

	.book {
		background-color: $clr-ornament-light;
		margin: 5% auto 10px;
		border: 4px solid #ffffff;
		width: 60px;
		height: 45px;
		position: relative;
		perspective: 150px;
	}

	.page {
		display: block;
		width: 30px;
		height: 45px;
		border: 4px solid #ffffff;
		border-left: 1px solid $clr-ornament-light;
		margin: 0;
		position: absolute;
		right: -4px;
		top: -4px;
		overflow: hidden;
		background-color: $clr-ornament-light;
		transform-style: preserve-3d;
		-webkit-transform-origin: left center;
		transform-origin: left center;
	}

	.book .page:nth-child(1) {
		-webkit-animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.6s
			infinite;
		animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.6s infinite;
	}

	.book .page:nth-child(2) {
		-webkit-animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.45s
			infinite;
		animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.45s infinite;
	}

	.book .page:nth-child(3) {
		-webkit-animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.2s
			infinite;
		animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.2s infinite;
	}

	/* Page turn */

	@-webkit-keyframes pageTurn {
		0% {
			-webkit-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
		20% {
			background: $clr-ornament-light;
		}
		40% {
			background: $clr-btn-card;
			-webkit-transform: rotateY(-180deg);
			transform: rotateY(-180deg);
		}
		100% {
			background: $clr-btn-card;
			-webkit-transform: rotateY(-180deg);
			transform: rotateY(-180deg);
		}
	}

	@keyframes pageTurn {
		0% {
			transform: rotateY(0deg);
		}
		20% {
			background: $clr-ornament-light;
		}
		40% {
			background: $clr-btn-card;
			transform: rotateY(-180deg);
		}
		100% {
			background: $clr-btn-card;
			transform: rotateY(-180deg);
		}
	}

	/* Dots */

	@-webkit-keyframes Dots {
		0% {
			content: "";
		}
		33% {
			content: ".";
		}
		66% {
			content: "..";
		}
		100% {
			content: "...";
		}
	}

	@keyframes Dots {
		0% {
			content: "";
		}
		33% {
			content: ".";
		}
		66% {
			content: "..";
		}
		100% {
			content: "...";
		}
	}
</style>
