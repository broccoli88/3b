<script setup>
	const supabaseStore = useSupabaseStore();
	const { pending } = storeToRefs(supabaseStore);

	onMounted(async () => await supabaseStore.fetchLastReviews());

	const sb = useSupabaseClient();

	onMounted(async () => {
		const { data, error } = await sb.rpc("single_review", { id: 67 });
		console.log(data);
		console.log(error);
	});
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<AppLoader v-if="pending" />
	</div>
</template>
