<script setup>
	const supabaseStore = useSupabaseStore();

	onMounted(async () => await supabaseStore.fetchLastReviews());
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
