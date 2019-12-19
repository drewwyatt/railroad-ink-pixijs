import { Dispatch, useCallback, useContext } from 'react'
import CONTEXT from './context'
import { commitRoll, makeSelection } from './state'

const wrapWithDispatch = <T extends (...args: any[]) => any>(
  fn: T,
  dispatch: Dispatch<ReturnType<T>>,
) => useCallback((...args: Parameters<T>) => dispatch(fn(...args)), [])

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
