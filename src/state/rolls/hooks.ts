import { useContext } from 'react'
import { wrapWithDispatch } from '../utils'
import CONTEXT from './context'
import { commitRoll, makeSelection } from './state'

export const useCurrentRoll = () => {
  const [state, dispatch] = useContext(CONTEXT)
  return [
    state.current,
    {
      commitRoll: wrapWithDispatch(commitRoll, dispatch),
      makeSelection: wrapWithDispatch(makeSelection, dispatch),
    },
  ] as const
}

export const usePastRolls = () => useContext(CONTEXT)[0].past
