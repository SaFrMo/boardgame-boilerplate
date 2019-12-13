declare interface AiConfig {
    enumerate: (G: GType, ctx?: Ctx) => Array<MoveConfig>
}

declare class BotClass {
    enumerateFn: any
    seed: string
    iterationCounter: number
    private _opts: object
    addOpt: (options: { key: string; range: any; initial: any }) => void
    getOpt: (key: string) => any
    setOpt: (key: string, value: any) => void
    opts: () => object
    enumerate: (G: GType, ctx: Ctx, playerId: string) => any
    random: (arg?: Array<any> | number) => any
}

declare interface Ctx {
    turn: number
    numPlayers: number
    currentPlayer: string
    playOrder: Array<string>
    playOrderPos: number
    phase: string
    activePlayers: Array<any>
    numMoves: number
    events: any
}

declare interface GameConfiguration {
    name: string
    setup: (ctx: Ctx, setupData?: any) => GType
    phases: {
        [key: string]: GamePhase
    }
    moves: {
        [key: string]: Move
    }
    playerView?: (G: GType, ctx: Ctx, playerID: string) => GType | void
    seed?: string
    turn?: {
        order?: string
        onBegin?: (G: GType, ctx: Ctx) => GType | void
        onEnd?: (G: GType, ctx: Ctx) => GType | void
        endIf?: (G: GType, ctx: Ctx) => boolean | void
        onMove?: (G: GType, ctx: Ctx) => GType | void
        moveLimit?: number
        stages?: {
            [key: string]: GameStage
        }
    }
}

declare interface GamePhase {}

declare interface GameSettings {}

declare interface GameStage {
    moves?: {
        [key: string]: Move
    }
    next?: string
}

declare interface GType {}

declare class MCTSBotClass extends BotClass {
    objectives: Array<any>
    iterationCallback: () => any
    reducer: any
    iterations: number
    playoutDepth: number

    play: (state: { G: GType; ctx: Ctx }, playerID: string) => any
}

declare type Move = (G: GType, ctx: Ctx, options?: any) => any

declare interface MoveConfig {
    move: string
    args: any
}

declare interface Vector2 {
    x: number
    y: number
}

declare interface Vector3 {
    x: number
    y: number
    z: number
}
