import { adjust } from 'ramda'
import { Reducer } from 'react'
import { Route, Tile, toTile } from '../../models'
import { BOARD_WIDTH, BOARD_HEIGHT } from '../../constants'
import { toIdx } from './utils'

export type State = Tile[]
export const DEFAULT_STATE = new Array(BOARD_WIDTH * BOARD_HEIGHT).fill(
  toTile(Route.Empty),
)

export const setTileAtCoords = (x: number, y: number, tile: Tile) =>
  ({
    type: 'setTileAtCoords',
    payload: { x, y, tile },
  } as const)

export type Action = ReturnType<typeof setTileAtCoords>

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'setTileAtCoords':
      const { x, y, tile } = action.payload
      return adjust(toIdx(x, y), () => tile, state)
    default:
      return state
  }
}
