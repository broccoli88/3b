export default defineNuxtRouteMiddleware(async (to) => {
    const supabaseStore = useSupabaseStore()

    try {
        await supabaseStore.getCurrentReview(to.params.id)
    } catch (error) {
        console.log('Get review middleware: ', error)
    }
})
