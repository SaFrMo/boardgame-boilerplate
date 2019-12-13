import pkg from './package'

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/global-components'],

    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/style-resources'],

    /*
     ** Style resources
     */
    styleResources: {
        scss: ['./assets/scss/*.scss']
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
