import { defineStore } from 'pinia'

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

    return {
        createReviewState
    }
})
