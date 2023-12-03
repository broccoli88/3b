<script setup>
	defineEmits(["update:modelValue"]);

	defineProps({
		id: String,
		label: String,
		placeholder: String,
		modelValue: String,
	});
</script>

<template>
	<div class="input-wrapper">
		<label :for="id" class="label">{{ label }}</label>
		<input
			type="text"
			v-bind="$attrs"
			:id="id"
			:name="id"
			:placeholder="placeholder"
			:value="modelValue"
			class="input"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>

<style lang="scss" scoped>
	.input-wrapper {
		display: grid;
		gap: 0.7rem;
	}

	.label {
		text-transform: capitalize;
		color: $clr-txt-inactive;
		margin-left: 1rem;
		transition: $tr-02;
	}

	.input-wrapper:has(.input:focus) .label {
		color: $clr-txt-light;
	}

	.input {
		@include font-reset($fs: $fsd-txt, $tt: none);
		width: 100%;
		background-color: hsl(207, 41%, 21%);
		border: none;
		padding: 1.5rem 1rem;
		border-radius: $br-md;
		outline: none;
		border: 1px solid transparent;
		transition: $tr-02;

		&:focus {
			border: 1px solid $clr-btn-card;
		}
	}
</style>
