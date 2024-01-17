export default defineNuxtRouteMiddleware(async (to) => {
    const supabaseStore = useSupabaseStore()

    const genreNameUnderscoreReplace = to.params.genre.replaceAll('_', ' ')
    const genreNameHyphenReplace = genreNameUnderscoreReplace.replaceAll('-', '/')

    await supabaseStore.getReviewsByGenre(genreNameHyphenReplace)
});
