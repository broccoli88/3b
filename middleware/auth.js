export default defineNuxtRouteMiddleware(async () => {
    const supabase = useSupabaseClient()

    try {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user)
            return navigateTo('/admin/signin')
    } catch (error) {
        console.log('middleware auth error: ', error)
        return
    }
})
