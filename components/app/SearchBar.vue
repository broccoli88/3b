<script setup>
	const isFocusOn = ref(false);
	const outlineFormOn = () => (isFocusOn.value = true);
	const outlineFormOff = () => (isFocusOn.value = false);
</script>

<template>
	<form class="search__form">
		<label for="search" class="search__label">
			<NuxtImg src="/images/ornaments/l2.webp" class="search__ornament" />
			<p>Look for review</p>
		</label>
		<section
			class="search__input-container"
			:class="{ 'search__input-outline': isFocusOn }"
		>
			<input
				type="text"
				name="search"
				id="search"
				class="search__input"
				@focus="outlineFormOn"
				@blur="outlineFormOff"
			/>
			<button class="search__btn">
				<Icon
					name="ph:magnifying-glass-light"
					size="2rem"
					color="#bfbfbf"
				/>
			</button>
		</section>
	</form>
</template>

<style lang="scss" scoped>
	.search__form {
		--_fs-increment: 2.2;
		--_bg: hsl(207, 41%, 21%);

		width: 100%;
		display: grid;
		gap: 1.5rem;
	}

	.search__label {
		display: flex;
		gap: 2rem;
		align-items: center;
		font-size: calc($fsm-txt * var(--_fs-increment));
		font-family: $ff-ayres;

		@include bp(1024px) {
			font-size: calc($fsd-txt * var(--_fs-increment));
		}
	}

	.search__input-container {
		display: grid;
		grid-template-columns: 1fr min-content;
		border-radius: $br-md;
		background-color: var(--_bg);
		overflow: hidden;
		transition: $tr-02;
		border: 1px solid transparent;
	}

	.search__input-outline {
		border: 1px solid $clr-btn-card;
	}

	.search__input {
		background-color: transparent;
		border: none;
		font-family: $ff-oswald;
		font-size: $fsm-txt;
		color: $clr-txt-light;
		letter-spacing: 0.5px;
		font-weight: 300;
		padding: 0.65em 1.3em;
		outline: none;
	}

	.search__btn {
		background-color: var(--_bg);
		border: none;
		padding-inline: 1rem;
		position: relative;

		cursor: pointer;
		transition: $tr-03;

		&:hover,
		&:focus {
			filter: brightness(1.1);
		}

		&::before {
			content: "";

			position: absolute;
			top: 50%;
			left: 0;
			width: 1px;
			height: 60%;
			z-index: 1;

			translate: 0 -50%;
			background-color: hsl(0, 0%, 100%, 0.1);
		}
	}

	.search__ornament {
		width: 5rem;
		opacity: 0.7;
		justify-self: center;
	}
</style>
