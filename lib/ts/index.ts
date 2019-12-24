import { constants } from './constants'
// import { ai } from './ai/index'

const game: GameConfiguration = {
    name: 'game-name',

    setup(): GType {
        return {}
    },

    moves: {},

    phases: {}
}

const options: { game: GameConfiguration; ai?: AiConfig } = {
    game
    // ai
}

export { options, game }
