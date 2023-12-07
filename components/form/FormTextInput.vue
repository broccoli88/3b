<script setup>
	defineProps({
		id: String,
		label: String,
		placeholder: String,
		modelValue: String,
		v: Object,
	});

	defineEmits(["update:modelValue"]);
</script>

<template>
	<div class="input-wrapper">
		<label :for="id" class="label">{{ label }}</label>
		<textarea
			cols="30"
			rows="10"
			type="text"
			:placeholder="v.$error ? v.$errors[0].$message : placeholder"
			:id="id"
			v-bind="$attrs"
			@input="$emit('update:modelValue', $event.target.value)"
			@blur="v.$touch"
			:class="v.$error ? 'create-review-error' : ''"
			class="input"
		></textarea>
	</div>
</template>

<style lang="scss" scoped>
	.input {
		resize: vertical;
	}
</style>
