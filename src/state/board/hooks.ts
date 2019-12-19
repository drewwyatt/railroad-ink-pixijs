import { useContext } from 'react'
import { wrapWithDispatch } from '../utils'
import CONTEXT from './context'
import { setTileAtCoords } from './state'

export const useBoard = () => {
  const [state, dispatch] = useContext(CONTEXT)
  return [
    state,
    {
      setTileAtCoords: wrapWithDispatch(setTileAtCoords, dispatch),
    },
  ] as const
}
