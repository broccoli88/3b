<script setup>
	defineProps({
		id: Number,
		author: String,
		title: String,
		subtitle: String,
		cover: String,
		imgVisible: {
			type: Boolean,
			default: false,
		},
	});

	defineEmits(["go-to-review"]);
</script>

<template>
	<li class="card-mini" @click="$emit('go-to-review')">
		<NuxtImg :src="cover" class="card-mini__img" v-if="imgVisible" />
		<div class="card-mini__description">
			<p>{{ title }}</p>
			<p>{{ subtitle }}</p>
			<p>{{ author }}</p>
		</div>
	</li>
</template>

<style lang="scss" scoped>
	.card-mini {
		display: flex;
		gap: 1rem;
		align-items: center;
		max-height: 100px;
		padding-block: 2.5rem;
		padding-inline: 1rem;
		cursor: pointer;
		position: relative;
		transition: $tr-02;

		&:last-of-type {
			border-bottom: none;
		}

		&:hover {
			background-color: var(--_bg-active);
		}

		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 80%;
			height: 1px;
			background-color: hsl(0, 0%, 100%, 0.2);
			translate: -50%;
		}
	}

	.card-mini__img {
		width: 50px;
		object-fit: contain;
	}

	.card-mini__description {
		text-transform: capitalize;
		& p:first-child {
			font-size: 2rem;
		}
	}
</style>
