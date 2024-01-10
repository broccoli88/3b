<script setup>
	useHead({
		title: "3B - Kontakt",
	});

	const adminStore = useAdminStore(),
		{ contactState, vc } = storeToRefs(adminStore);

	const contactInputData = reactive({
		first_name: {
			label: "Nazwa uzytkowanika*",
			id: "first-name",
			placeholder: "Podaj nazwę",
		},
		email: {
			label: "Email*",
			id: "email",
			placeholder: "Podaj email",
		},
		message: {
			label: "Twoja wiadomość*",
			id: "message",
			placeholder: "Twoja wiadomość.",
		},
	});
</script>

<template>
	<section>
		<header class="contact__header">
			<h1>Napisz do nas</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
				saepe laborum in mollitia ducimus, doloremque consequatur
				deserunt quo obcaecati natus, ea iusto illo, nemo blanditiis
				tempora quibusdam pariatur soluta quam.
			</p>
		</header>

		<form class="contact__form">
			<FormInput
				:label="contactInputData.first_name.label"
				:id="contactInputData.first_name.id"
				:placeholder="contactInputData.first_name.placeholder"
				:v="vc.first_name"
				v-model="contactState.first_name"
			/>
			<FormInput
				:label="contactInputData.email.label"
				:id="contactInputData.email.id"
				:placeholder="contactInputData.email.placeholder"
				:v="vc.email"
				v-model="contactState.email"
			/>

			<FormTextInput
				:label="contactInputData.message.label"
				:id="contactInputData.message.id"
				:placeholder="contactInputData.message.placeholder"
				:v="vc.message"
				v-model="contactState.message"
			/>

			<AppButton type="submit" class="app-btn--purple contact__btn"
				>Send message</AppButton
			>
		</form>
	</section>
</template>

<style lang="scss" scoped>
	.contact__header {
		margin-bottom: 4rem;
	}

	.contact__form {
		display: grid;
		gap: 2rem;
	}

	.contact__btn {
		margin-inline: auto;
		margin-top: 2rem;
		justify-self: start;

		@include bp {
			margin-inline: 0;
		}
	}
</style>
