export default defineNuxtRouteMiddleware(async (to) => {
    const supabaseStore = useSupabaseStore()

    if (to.name === 'reviews') await supabaseStore.getAllReviews()
})
