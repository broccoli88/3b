import { defineStore } from 'pinia'

export const useSupabaseStore = defineStore('supabaseStore', () => {

    const supabase = useSupabaseClient()
    const pending = ref(false)
    const genres = ref([])
    const previewCardQuery = 'book_title, book_subtitle, cover_url, review_id, author, created_at, review_pt_1'

    // All reviews

    const allReviews = ref([])

    const getAllReviews = async () => {

        try {
            pending.value = true
            const { data, error } = await supabase
                .from('reviews')
                .select(previewCardQuery)
                .range(0, 9) // for pagination

            if (error) {
                console.log('Fetch all reviews - try: ', error)
            }

            allReviews.value = data
        } catch (error) {
            console.log('Fetch all reviews - catch: ', error)
        }

    }

    // Last 3 reviews

    const latestReviews = ref([])

    const fetchLastReviews = async () => {
        try {
            pending.value = true
            const { data: review, error } = await supabase
                .from('reviews')
                .select(previewCardQuery)
                .range(0, 2)

            latestReviews.value = review

            if (error) {
                console.log(error)
                return
            }

        } catch (error) {
            console.log(error)
        } finally {
            pending.value = false
        }

    }


    // Selected review

    const currentReview = ref(null)
    const currentReviewGenres = ref([])

    const getCurrentReviewGenres = async (id) => {
        currentReviewGenres.value = []
        try {
            pending.value = true
            const { data, error } = await supabase
                .from('review_genres')
                .select('*')
                .eq('review_id', id)

            if (error) {
                console.log('Get genres review_genres error: ', error)
                return
            }

            for (let i = 0; i < data.length; i++) {
                const { data: genre, error: genreError } = await supabase
                    .from('genres')
                    .select('genre_name')
                    .eq('genre_id', data[i].genre_id)


                if (genreError) {
                    console.log('Get genres genre error: ', genreError)
                    return
                }

                currentReviewGenres.value.push(genre[0].genre_name)
            }

            console.log(currentReviewGenres.value)
        } catch (error) {
            console.log('Get current review genres: ', error)
        } finally {
            pending.value = false
        }
    }

    const getCurrentReview = async (id) => {
        const currentId = parseInt(id)

        try {
            pending.value = true

            const { data: review, error: reviewError } = await supabase
                .from('reviews')
                .select('*')
                .eq('review_id', currentId)
                .single()

            if (reviewError) {
                console.log('Get review supabase: ', reviewError)
                return
            }

            currentReview.value = review
            console.log(currentReview.value)

            await getCurrentReviewGenres(currentId)

        } catch (error) {
            console.log('Get review: ', error)
        } finally {
            pending.value = false
        }
    }

    return {
        pending,
        latestReviews,
        fetchLastReviews,
        currentReview,
        currentReviewGenres,
        getCurrentReview,
        allReviews,
        getAllReviews
    }
})