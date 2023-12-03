<script setup>
	defineProps({
		id: String,
		label: String,
		v: Object,
	});

	const supabaseStore = useSupabaseStore(),
		{ cover } = storeToRefs(supabaseStore),
		adminStore = useAdminStore(),
		{ createReviewState } = storeToRefs(adminStore);

	const fileInput = ref(null),
		fileInputPreview = ref(null);

	const displayCoverPreview = () => {
		const file = fileInput.value.files;

		if (!file && !file[0]) return;

		const reader = new FileReader();

		reader.onload = (e) => {
			fileInputPreview.value = e.target.result;
		};
		reader.readAsDataURL(fileInput.value.files[0]);

		const imgPath = `covers/${file[0].name}`;
		createReviewState.value.cover_url = imgPath;
		cover.value = file;
	};

	const clearPreview = () => {
		fileInput.value.value = "";
		fileInputPreview.value = null;
		cover.value = null;
		createReviewState.value.cover_url = "";
	};
</script>

<template>
	<div class="input-wrapper">
		<label :for="id" class="label"> {{ label }}</label>
		<div
			class="file-input__wrapper"
			:class="v.$error ? 'create-review-error' : ''"
		>
			<AppButton
				@click.prevent="clearPreview"
				class="file-input__clear-btn"
				v-if="fileInputPreview"
			>
				<Icon name="ic:outline-close" size="1.5rem" />
			</AppButton>
			<NuxtImg
				:src="fileInputPreview"
				class="file-input__preview"
				v-if="fileInputPreview"
			/>
			<input
				type="file"
				accept="image/*"
				:disabled="fileInputPreview"
				:id="id"
				:name="id"
				@change="displayCoverPreview"
				@blur="v.$touch"
				class="file-input__input"
				ref="fileInput"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.file-input__wrapper {
		width: 25rem;
		padding: 2rem;
		aspect-ratio: 2 / 3;
		background-color: hsl(207, 41%, 21%);
		border-radius: $br-md;
		position: relative;
	}

	.file-input__clear-btn {
		position: absolute;
		top: 0;
		right: -3.3rem;
		padding: 0.5rem;
		z-index: 2;
		color: $clr-txt-inactive;
		border: 1px solid $clr-txt-inactive;
		transition: $tr-02;

		&:hover,
		&:focus {
			color: $clr-txt-light;
			border-color: $clr-txt-light;
		}

		&:first-child {
			transition: $tr-02;
		}
	}

	.file-input__preview {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;

		border-radius: $br-md;
		pointer-events: none;
	}

	.file-input__input {
		width: 100%;
		height: 100%;
	}

	.file-input__input::file-selector-button,
	.file-input__input::-webkit-file-upload-button {
		display: none;
	}
</style>
