<script setup>
	const supabaseStore = useSupabaseStore();
	const { pending } = storeToRefs(supabaseStore);

	onMounted(async () => await supabaseStore.fetchLastReviews());

	// const sb = useSupabaseClient();

	// onMounted(async () => {
	// 	const { data } = await sb.rpc("single_review", { id: 65 });
	// 	console.log(data);
	// });
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<AppLoader v-if="pending" />
	</div>
</template>
