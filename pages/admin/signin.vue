<script setup>
	definePageMeta({
		layout: "signin",
	});

	const supabaseStore = useSupabaseStore(),
		{ authState, isAuthError } = storeToRefs(supabaseStore);

	const inputAttrs = {
		email: {
			id: "email",
			label: "Email",
			placeholder: "Podaj email gamoniu..",
		},
		pwd: {
			id: "password",
			label: "Password",
			placeholder: "Podaj hasło gamoniu..",
		},
	};
</script>

<template>
	<section class="signin">
		<header class="signin__header">
			<h1>Sign In</h1>
		</header>
		<form class="signin__form">
			<FormInput
				type="email"
				v-model="authState.email"
				:id="inputAttrs.email.id"
				:label="inputAttrs.email.label"
				:placeholder="inputAttrs.email.placeholder"
			/>
			<FormInput
				type="password"
				v-model="authState.pwd"
				:id="inputAttrs.pwd.id"
				:label="inputAttrs.pwd.label"
				:placeholder="inputAttrs.pwd.placeholder"
			/>
			<p class="error-message" v-if="isAuthError">Coś jest nie tak</p>
		</form>
		<div class="signin__btns">
			<AppButtonLink link="/" class="app-btn--teal">
				Go Back
			</AppButtonLink>
			<AppButton class="app-btn--purple" @click="supabaseStore.logIn">
				Sign In
			</AppButton>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.signin {
		width: min(70rem, 100%);
		background-image: $clr-bg-teal-linear;
		border-radius: $br-lg;
		padding: 2rem;
		display: grid;
		gap: 4rem;
		box-shadow: $bs-container;
	}

	.signin__header {
		text-align: center;
	}

	.signin__form {
		display: grid;
		gap: 2rem;
	}

	.signin__btns {
		margin-top: auto;
		display: grid;
		grid-auto-flow: column;
		gap: 1rem;
		margin-top: 6rem;
	}

	.error-message {
		color: $clr-txt-error;
		text-transform: uppercase;
	}
</style>
