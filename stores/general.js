import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStore', () => {

    const isMainPage = ref(true)

    const goToReview = async (reviewTitle, reviewSubtitle, reviewId) => {
        const slugTitle = reviewTitle.split(" ").join("-");
        const slugSubtitle = reviewSubtitle.split(" ").join("-");
        const slug =
            slugSubtitle === "" ? slugTitle : `${slugTitle}-${slugSubtitle}`;
        const link = `/reviews/${reviewId}-${slug}`;

        await navigateTo(link)
    };

    return {
        isMainPage,
        goToReview
    }
})
