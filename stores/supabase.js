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

            const { error } = await supabase.auth.signInWithPassword({
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

        if (allReviews.value.length > 0) return

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
            // console.log('All reviews: ', allReviews.value)
        } catch (error) {
            console.log('Fetch all reviews - catch: ', error)
        } finally {
            pending.value = false
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
            // console.log('latest reviews: ', latestReviews.value)

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
    const genres = ref([]),
        genresList = ref([]),
        selectedGenreList = ref([]);

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

    const clearGenresSelection = () => {
        selectedGenreList.value = []
        genresList.value = genres.value
    }


    // Selected review

    const currentReview = ref(null)

    const getCurrentReview = async (id) => {

        try {
            pending.value = true

            const { data, error } = await supabase.rpc('single_review', { id: id })

            if (error) {
                throw new Error('Get current review error: ', error)
            }

            currentReview.value = data[0]

        } catch (error) {
            throw new Error('Get current review catch error: ', error)
        } finally {
            pending.value = false
        }
    }

    // Image upload

    const cover = ref(null),
        fileInput = ref(null),
        fileInputPreview = ref(null);

    const clearCoverPreview = () => {
        fileInput.value.value = "";
        fileInputPreview.value = null;
        cover.value = null;
    };

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

    // Get all used genres

    const genresInUseList = ref([]);


    const getAllGenresInUse = async () => {

        if (genresInUseList.value.length > 0) return

        genresInUseList.value = []

        try {
            pending.value = true

            const { data, error } = await supabase.rpc('genres_in_use')

            if (error) {
                console.log('Get all genres in use error: ', error)
            }

            genresInUseList.value = data

        } catch (error) {
            throw new Error('Get genres in use catch error: ', error)
        } finally {
            pending.value = false
        }
    }

    // Get all reviews from selected genre

    const reviewsByGenreList = ref([])

    const getReviewsByGenre = async (genre) => {
        reviewsByGenreList.value = []

        try {
            pending.value = true

            const { data, error } = await supabase.rpc("reviews_by_genres", {
                genre: genre
            })

            if (error) {
                console.log('Get reviews by genre error: ', error)
            }

            reviewsByGenreList.value = data


        } catch (error) {
            throw new Error(error)
        } finally {
            pending.value = false
        }
    }

    return {
        pending,
        latestReviews,
        fetchLastReviews,
        currentReview,
        getCurrentReview,
        allReviews,
        getAllReviews,
        authState,
        isAuthError,
        logIn,
        logOut,
        cover,
        fileInput,
        fileInputPreview,
        clearCoverPreview,
        uploadCover,
        insertReview,
        insertGenres,
        genres,
        genresList,
        selectedGenreList,
        fetchGenres,
        clearGenresSelection,
        getAllGenresInUse,
        genresInUseList,
        reviewsByGenreList,
        getReviewsByGenre
    }
})
