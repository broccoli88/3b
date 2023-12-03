// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ["~/assets/scss/main.scss"],
	pages: true,
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixins.scss";',
				},
			},
		},
	},
	modules: ["@pinia/nuxt", "@nuxtjs/supabase", "nuxt-icon", "@nuxt/image"],
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	runtimeConfig: {
		supabasr_url: process.env.SUPABASE_URL,
		supabasle_api_key: process.env.SUPABASE_API_KEY,
	},
	supabase: {
		redirect: false,
	},
});
