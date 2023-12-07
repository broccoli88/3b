<script setup>
	defineEmits(["update:modelValue"]);

	defineProps({
		id: String,
		label: String,
		placeholder: String,
		modelValue: String,
		v: Object,
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
			:placeholder="v.$error ? v.$errors[0].$message : placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			@blur="v.$touch"
			:class="v.$error ? 'create-review-error' : ''"
			class="input"
		/>
	</div>
</template>

<style lang="scss">
	@import "@/assets/scss/form.scss";

	.input-wrapper {
		display: grid;
		@include input-wrapper;
	}

	.label {
		@include label;
	}

	.input {
		@include input;
	}

	.create-review-error {
		@include create-review-error;
	}
</style>
