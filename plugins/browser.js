import Vue from 'vue'
import { plugin as boardgamePlugin } from 'boardgame-utils'
import { options } from '~/lib/built'
import { constants } from '~/lib/built/constants'

export default ({ app: { store } }) => {
    Vue.use(boardgamePlugin, {
        // client options (required)
        options: options,
        // Vuex store (required)
        store: store,
        // whether or not to initialize the client immediately (optional, default: true)
        initClient: true
    })

    // register global constants
    Vue.mixin({
        data() {
            return {
                constants
            }
        }
    })
}
