<script setup>
	const router = useRouter();

	const goBack = () => router.go(-1);
</script>

<template>
	<button :to="link" class="back-btn" @click="goBack">
		<Icon
			name="streamline:computer-keyboard-previous-1-previous-keyboard-arrow-left"
			size="2rem"
		/>
		go back
	</button>
</template>

<style lang="scss" scoped>
	.back-btn {
		@include font-reset($fs: $fsm-txt, $clr: $clr-txt-inactive);

		align-items: center;
		background-color: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		flex-wrap: nowrap;
		gap: 1rem;
		margin-bottom: 4rem;
		transition: $tr-02;
		white-space: nowrap;
		width: min-content;

		&:hover,
		&:focus {
			color: $clr-txt-light;
		}
	}
</style>
