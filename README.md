Boilerplate for a new Nuxt project, including:

-   Automatic global registration for everything in the `~/components` directory
    -   `~/components/MyComponent.vue` becomes `<my-component>`
    -   `~/components/grouped/Component.vue` becomes `<grouped-component>`
-   A simplified `pages/index.vue`
-   All `.scss` vars/mixins/functions in `~/assets/scss` included globally using [style-resources](https://github.com/nuxt-community/style-resources-module) module

## Recommended Workflow

1. Install `degit` if you don't have it: `npm i -g degit`
1. Use this bash script:
    ```
    nuxt() {
        npx create-nuxt-app "$1"
        cd "$1"
        find . -name "README.md" -delete
        rm ./components/Logo.vue
        degit safrmo/nuxt-boilerplate -f
        npm i node-sass sass-loader @nuxt/style-resources -D
        npm i lodash
        cd ..
    }
    ```
1. Run `nuxt my-new-project-name` to run `create-nuxt-app`, remove extra Nuxt boilerplates, install this boilerplate, and add SASS and Lodash
