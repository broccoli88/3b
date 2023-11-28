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
						'@use "@/assets/scss/_variables.scss" as *; @use "@/assets/scss/_mixins.scss" as *;',
				},
			},
		},
	},
	modules: ["@pinia/nuxt", "@nuxtjs/supabase", "nuxt-icon"],
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
