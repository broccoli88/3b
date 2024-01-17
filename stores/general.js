import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStore', () => {

    const isMainPage = ref(true)

    const editReviewSlug = (title, subtitle = '') => {
        const slugTitle = title.split(" ").join("-");
        const slugSubtitle = subtitle.split(" ").join("-");

        const slug = slugSubtitle === "" ? slugTitle : `${slugTitle}-${slugSubtitle}`;
        return slug
    }

    const editGenreSlug = (title) => {
        return title.split(' ').join('_').split('/').join('-')
    }

    const goToReview = async (reviewTitle, reviewSubtitle, reviewId) => {

        const slug = editReviewSlug(reviewTitle, reviewSubtitle)
        const link = `/reviews/${reviewId}-${slug}`;

        await navigateTo(link)
    };

    const goToGenre = async (genreTitle) => {
        const genre = editGenreSlug(genreTitle)
        const link = `/genres/${genre}`

        await navigateTo(link)
    }

    return {
        isMainPage,
        goToReview,
        goToGenre
    }
})
