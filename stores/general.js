import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStroe', () => {

    const isMainPage = ref(false)

    return {
        isMainPage
    }
})
