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
			v-bind="$attrs"
			:placeholder="v.$error ? v.$errors[0].$message : placeholder"
			:id="id"
			:value="modelValue"
			@blur="v.$touch"
			@input="$emit('update:modelValue', $event.target.value)"
			:class="v.$error ? 'create-review-error' : ''"
			class="input"
		/>
	</div>
</template>

<style lang="scss" scoped>
	.input {
		resize: vertical;
	}
</style>
