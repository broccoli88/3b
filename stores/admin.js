import { defineStore } from 'pinia'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

export const useAdminStore = defineStore('adminStore', () => {

    const supabaseStore = useSupabaseStore(),
        { pending, authState } = storeToRefs(supabaseStore)

    // CREATE REVIEW

    const createReviewState = ref({
        book_title: "",
        book_subtitle: "",
        published_at: null,
        author: "",
        review_pt_1: "",
        review_pt_2: "",
        review_pt_3: "",
        cover_url: "",
        genres: []
    });

    const createReviewRules = {
        book_title: { required: helpers.withMessage('Podaj tytuł ksiąki gamoniu!', required) },
        published_at: { required: helpers.withMessage('Wpisz kiedy została wydana sieroto!', required) },
        book_subtitle: { minLength: minLength(0) },
        author: { required: helpers.withMessage('Jaki bęcwał ją napisał?', required) },
        review_pt_1: { required: helpers.withMessage('Weź coś wpisz...', required) },
        review_pt_2: { minLength: minLength(0) },
        review_pt_3: { minLength: minLength(0) },
        cover_url: { required: helpers.withMessage('Jak ten szajs wygląda ?', required) },
        genres: { required: helpers.withMessage('Wybierz gatunek tej srajtaśmy....znaczy się ksiąki :)', required) }
    }

    const v = useVuelidate(createReviewRules, createReviewState, { $lazy: true, $autoDirty: true })
    const isGenreEmpty = ref(false)

    const clearCreateReviewState = () => {
        createReviewState.value.book_title = ''
        createReviewState.value.book_subtitle = ''
        createReviewState.value.published_at = null
        createReviewState.value.author = ''
        createReviewState.value.review_pt_1 = ''
        createReviewState.value.review_pt_2 = ''
        createReviewState.value.review_pt_3 = ''
        createReviewState.value.cover_url = ''
        createReviewState.value.genres = []
    }

    const clearCreateReviewForm = () => {
        clearCreateReviewState()
        supabaseStore.clearGenresSelection()
        supabaseStore.clearCoverPreview()
        v.value.$reset()
    }

    const submitReview = async () => {

        const revievData = ref({
            book_title: createReviewState.value.book_title,
            book_subtitle: createReviewState.value.book_subtitle,
            published_at: createReviewState.value.published_at,
            author: createReviewState.value.author,
            review_pt_1: createReviewState.value.review_pt_1,
            review_pt_2: createReviewState.value.review_pt_2,
            review_pt_3: createReviewState.value.review_pt_3,
            cover_url: `https://iqqnvdaqzmacxbtsyxnv.supabase.co/storage/v1/object/public/book-bestiary/${createReviewState.value.cover_url}`,
        })

        try {
            const isFormCorrect = await v.value.$validate()
            if (!isFormCorrect || !createReviewState.value.genres) {
                isGenreEmpty.value = true
                return
            }

            pending.value = true

            const reviewId = await supabaseStore.insertReview(revievData.value)

            await supabaseStore.insertGenres(reviewId, createReviewState.value.genres)
            await supabaseStore.uploadCover()
            clearCreateReviewForm()

        } catch (error) {
            console.log(error)
        } finally {
            pending.value = false
        }
    };

    // AUTH

    const authRules = {
        email: { required: helpers.withMessage('Podaj email gamoniu!', required) },
        pwd: { required: helpers.withMessage('Podaj hasło gamoniu!', required) }
    }

    const av = useVuelidate(authRules, authState)

    return {
        createReviewState,
        v,
        isGenreEmpty,
        submitReview,
        authState,
        av,
        clearCreateReviewForm
    }
})
