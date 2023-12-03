<script setup>
	defineEmits(["set-section"]);
	const supabaseStore = useSupabaseStore();

	const sections = ref([
		{
			component: "AdminDashboard",
			text: "Dashboard",
			icon: "material-symbols-light:space-dashboard-outline",
		},
		{
			component: "AdminWriteReview",
			text: "WriteReview",
			icon: "material-symbols-light:edit-square-outline",
		},
	]);
</script>

<template>
	<aside class="admin-aside">
		<AppLogo class="admin-aside__logo" />
		<nav class="admin-aside__nav">
			<li
				v-for="section in sections"
				:key="section.text"
				@click="$emit('set-section', section.component)"
			>
				<button class="admin-aside__btn">
					<div class="admin-aside__icon-wrapper">
						<Icon :name="section.icon" size="2rem" />
					</div>
					{{ section.text }}
				</button>
			</li>
		</nav>
		<div class="admin-aside__btns">
			<AppButtonLink link="/" class="app-btn--teal">
				<template #icon>
					<Icon
						name="streamline:computer-keyboard-previous-1-previous-keyboard-arrow-left"
						size="2rem"
					/>
				</template>
				<template #default> Main Page </template>
			</AppButtonLink>
			<AppButton class="app-btn--purple" @click="supabaseStore.logOut">
				<template #icon>
					<Icon name="ph:sign-out-light" size="2rem" />
				</template>
				<template #default> Log out </template>
			</AppButton>
		</div>
	</aside>
</template>

<style lang="scss" scoped>
	.admin-aside {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		height: 100vh;
		padding: 2rem;
		box-shadow: 10px 0 10px hsl(0, 0%, 0%, 0.2);

		display: grid;
		grid-template-rows: min-content 1fr min-content;
	}

	.admin-aside__logo {
		width: 100%;
		text-align: left;
	}

	.admin-aside__nav {
		margin-top: 15rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.admin-aside__btn {
		@include font-reset($clr: $clr-txt-inactive);
		background-color: transparent;
		border: none;
		display: flex;
		align-items: center;
		gap: 1rem;
		white-space: nowrap;
		cursor: pointer;
		transition: $tr-02;

		&:hover,
		&:focus {
			color: $clr-txt-light;

			.admin-aside__icon-wrapper {
				border-color: $clr-txt-light;
			}
		}
	}

	.admin-aside__icon-wrapper {
		padding: 0.6rem;
		border: 1px solid $clr-txt-inactive;
		display: grid;
		border-radius: 50%;
		transition: $tr-02;
	}

	.admin-aside__btns {
		display: grid;
		gap: 1rem;
	}
</style>
