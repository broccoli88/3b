import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStore', () => {

    const supabaseStore = useSupabaseStore(),
        { currentReview } = storeToRefs(supabaseStore)

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

    const goToReview = async (reviewTitle, reviewSubtitle, reviewId, basicLink = '/reviews') => {

        const slug = editReviewSlug(reviewTitle, reviewSubtitle)
        const link = `${basicLink}/${reviewId}-${slug}`;

        await navigateTo(link)
    };

    const goToGenre = async (genreTitle) => {
        const genre = editGenreSlug(genreTitle)
        const link = `/genres/${genre}`

        await navigateTo(link)
    }

    // Review info

    const creatorAvatar = ref([
        {
            creator: "madziora",
            url: "/images/avatars/cat_avatar.webp",
        },
        {
            creator: "koza",
            url: "/images/avatars/goat_avatar.webp",
        },
        {
            creator: "bober",
            url: "/images/avatars/beaver_avatar.webp",
        },
    ]);


    const reviewPageTitle = computed(() => {
        if (!currentReview.value) return

        currentReview.value.book_subtitle &&
            currentReview.value.book_subtitle !== ""
            ? `${currentReview.value.book_title}-${currentReview.value.book_subtitle}`
            : `${currentReview.value.book_title}`
    }
    );

    const createdDate = computed(() =>
        currentReview.value.created_at.substring(0, 10).replaceAll("-", "/")
    );

    const avatarUrl = computed(() => {
        if (currentReview.value && currentReview.value.creator_id) {
            return creatorAvatar.value[currentReview.value.creator_id - 1].url;
        } else return creatorAvatar.value[0].url;
    });

    const goTo = async (link) => await navigateTo(link)

    return {
        isMainPage,
        goToReview,
        goToGenre,
        creatorAvatar,
        reviewPageTitle,
        createdDate,
        avatarUrl,
        goTo
    }
})
