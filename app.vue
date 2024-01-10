<script setup>
	const supabaseStore = useSupabaseStore(),
		{ pending } = storeToRefs(supabaseStore),
		generalStore = useGeneralStore(),
		{ isMainPage } = storeToRefs(generalStore);

	const route = useRoute();

	watchEffect(
		() => {
			route.name === "index"
				? (isMainPage.value = true)
				: (isMainPage.value = false);
		},
		{ flush: "post" }
	);

	onMounted(async () => await supabaseStore.fetchLastReviews());
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<AppLoader v-if="pending" />
	</div>
</template>
