<script setup>
	import AdminDashboard from "~/components/admin/Dashboard.vue";
	import AdminWriteReview from "~/components/admin/WriteReview.vue";

	definePageMeta({
		layout: "admin",
		middleware: ["auth"],
	});

	const currentComponent = ref("AdminDashboard");
	const components = {
		AdminDashboard,
		AdminWriteReview,
	};

	const setSection = (component) => (currentComponent.value = component);
</script>

<template>
	<main class="admin">
		<AdminAside @set-section="setSection" />
		<div class="admin__component-wrapper">
			<component :is="components[currentComponent]" />
		</div>
	</main>
</template>

<style lang="scss" scoped>
	.admin {
		min-height: 200vh;
		display: grid;
		grid-template-columns: min-content 1fr;
	}

	.admin__component-wrapper {
		padding: 2rem 4rem;
	}
</style>
