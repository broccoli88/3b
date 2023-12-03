import { defineStore } from 'pinia'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

export const useAdminStore = defineStore('adminStore', () => {

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
    return {
        createReviewState,
        v
    }
})
