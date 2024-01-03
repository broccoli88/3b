<script setup>
	defineEmits(["update:modelValue"]);

	defineProps({
		id: String,
		label: String,
		placeholder: String,
		modelValue: String,
		v: Object,
	});

	const creators = reactive([
		{ name: "Madziora", id: 1 },
		{ name: "Koza", id: 2 },
		{ name: "Bober", id: 3 },
	]);
</script>

<template>
	<div class="input-wrapper">
		<label class="label" :id="id">{{ label }} </label>
		<select
			v-bind="$attrs"
			:id="id"
			:name="id"
			:value="modelValue"
			@blur="v.$touch"
			@input="$emit('update:modelValue', $event.target.value)"
			:class="v.$error ? 'create-review-error' : ''"
			class="input"
		>
			<option value="" disabled selected>{{ placeholder }}</option>
			<option
				v-for="creator in creators"
				:key="creator.id"
				:value="creator.id"
			>
				{{ creator.name }}
			</option>
		</select>
	</div>
</template>

<style lang="scss" scoped></style>
