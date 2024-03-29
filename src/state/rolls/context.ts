import { createContext, Dispatch } from 'react'
import { toProvider } from '../utils'
import { Action, DEFAULT_STATE, reducer, State } from './state'

const CONTEXT = createContext<[State, Dispatch<Action>]>(undefined)

export const Provider = toProvider(CONTEXT, reducer, DEFAULT_STATE)

export default CONTEXT
