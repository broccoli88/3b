<script setup>
	const supabaseStore = useSupabaseStore();
	const generalStore = useGeneralStore();
	const { isMainPage } = storeToRefs(generalStore);

	const route = useRoute();

	watch(
		() => route.name,
		() => {
			route.name === "index"
				? (isMainPage.value = true)
				: (isMainPage.value = false);
		},
		{ flush: "post", immediate: true }
	);

	onMounted(async () => await supabaseStore.fetchLastReviews());
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
