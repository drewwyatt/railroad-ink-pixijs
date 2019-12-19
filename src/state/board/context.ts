import { createContext, Dispatch } from 'react'
import { toProvider } from '../utils'
import { reducer, DEFAULT_STATE, State, Action } from './state'

const CONTEXT = createContext<[State, Dispatch<Action>]>(undefined)

export const Provider = toProvider(CONTEXT, reducer, DEFAULT_STATE)

export default CONTEXT
