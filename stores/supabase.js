import { defineStore } from 'pinia'

export const useSupabaseStore = defineStore('supabaseStore', () => {

    const supabase = useSupabaseClient()
    const pending = ref(false)
    const previewCardQuery = 'book_title, book_subtitle, cover_url, review_id, author, created_at, review_pt_1'

    // Auth

    const isAuthError = ref(false)
    const authState = ref({
        email: '',
        pwd: ''
    })

    const logIn = async () => {
        try {

            const { data, error } = await supabase.auth.signInWithPassword({
                email: authState.value.email,
                password: authState.value.pwd
            })

            if (error) {
                isAuthError.value = true
                console.log('Log in auth error: ', error)
                return
            }
            isAuthError.value = false
            await navigateTo({ name: 'admin' })

        } catch (error) {
            console.log('Log in catch error: ', error)
        }
    }

    const logOut = async () => {
        try {
            const { error } = await supabase.auth.signOut()
            if (error) console.log('Log out error: ', error)

            await navigateTo('/')

        } catch (error) {
            console.log('Log out catch error: ', error)
        }
    }

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

    // All genres
    const genres = ref([])

    const fetchGenres = async () => {
        try {
            pending.value = true
            const { data, error } = await supabase
                .from('genres')
                .select()
                .order('genre_name')

            if (error) {
                console.log(error.details, error.message)
                return
            }
            genres.value = data
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

    // Image upload

    const cover = ref(null)

    const uploadCover = async () => {
        try {
            pending.value = true

            if (!cover.value || cover.length === 0) {
                throw new Error("You must select an image to upload.");
            }

            const file = cover.value[0];
            const filePath = `covers/${file.name}`;

            const { error: uploadError } = await supabase.storage
                .from("book-bestiary")
                .upload(filePath, file, { returning: 'minimal' });

            if (uploadError) throw uploadError;
        } catch (error) {
            console.log(error);
        } finally {
            pending.value = false
        }
    };

    // Insert review

    const insertReview = async (reviewData) => {

        try {
            const { data, error } =
                await supabase
                    .from("reviews")
                    .insert(reviewData)
                    .select();

            if (error) {
                console.log(error);
                return;
            }

            return data[0].review_id

        } catch (error) {
            console.log(error);
        }
    };

    // Insert genres

    const insertGenres = async (reviewId, genresArr) => {
        for (let i = 0; i < genresArr.length; i++) {
            if (!reviewId) {
                throw Error("no review id");
            }
            try {
                const { data, error } = await supabase
                    .from("review_genres")
                    .insert([
                        {
                            review_id: reviewId,
                            genre_id: genresArr[i],
                        },
                    ]);

                if (error) {
                    console.log('Insert genres sb error: ', error);
                }
            } catch (error) {
                console.log('Insert genres catch error: ', error);
            }
        }
    };


    return {
        pending,
        latestReviews,
        fetchLastReviews,
        currentReview,
        currentReviewGenres,
        getCurrentReview,
        allReviews,
        getAllReviews,
        authState,
        isAuthError,
        logIn,
        logOut,
        cover,
        uploadCover,
        insertReview,
        insertGenres,
        genres,
        fetchGenres,

    }
})
