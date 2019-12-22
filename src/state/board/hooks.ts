import { useCallback, useContext } from 'react'
import { Tile } from '../../models'
import { wrapWithDispatch } from '../utils'
import CONTEXT from './context'
import { setTileAtCoords } from './state'
import { toIdx } from './utils'

export const useBoard = () => {
  const [state, dispatch] = useContext(CONTEXT)
  return [
    state,
    {
      setTileAtCoords: wrapWithDispatch(setTileAtCoords, dispatch),
    },
  ] as const
}

export const useTile = (x: number, y: number) => {
  const [state, dispatch] = useContext(CONTEXT)
  return [
    state[toIdx(x, y)],
    useCallback((tile: Tile) => dispatch(setTileAtCoords(x, y, tile)), [x, y]),
  ] as const
}
