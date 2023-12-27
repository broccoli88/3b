<script setup>
	const supabaseStore = useSupabaseStore();
	const { pending } = storeToRefs(supabaseStore);

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
