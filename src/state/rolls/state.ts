import { adjust } from 'ramda'
import { Reducer } from 'react'
import { DieFace } from '../../models'

export type PendingFace = DieFace | undefined
export type PendingRoll = [PendingFace, PendingFace, PendingFace]
export type Roll = [DieFace, DieFace, DieFace]
type Index = 0 | 1 | 2

// actions

export const makeSelection = (idx: Index, selection: PendingFace) =>
  ({
    type: 'makeSelection',
    payload: [idx, selection],
  } as const)

export const commitRoll = () => ({ type: 'commitRoll' } as const)

type Action = ReturnType<typeof makeSelection | typeof commitRoll>

// reducer

export type State = {
  current: PendingRoll
  past: Roll[]
}

const DEFAULT_CURRENT: PendingRoll = [undefined, undefined, undefined]
export const DEFAULT_STATE: State = { current: DEFAULT_CURRENT, past: [] }

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'makeSelection':
      const [idx, selection] = action.payload
      return {
        ...state,
        current: adjust(idx, () => selection, state.current) as PendingRoll,
      }
    case 'commitRoll':
      return {
        current: DEFAULT_CURRENT,
        past: [...state.past, state.current],
      }
    default:
      return state
  }
}
