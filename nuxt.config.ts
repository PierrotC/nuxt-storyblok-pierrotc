// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        [
            '@storyblok/nuxt',
            {
                accessToken: 'JquP8cdjg0QYiYLbu3wi8gtt',
            }
        ],
        '@nuxtjs/tailwindcss'
      ],
})
