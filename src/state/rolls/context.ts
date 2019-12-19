import { createContext, Dispatch } from 'react'
import { Action, DEFAULT_STATE, reducer, State } from './state'
import { toProvider } from '../utils'

const CONTEXT = createContext<[State, Dispatch<Action>]>(undefined)

export const Provider = toProvider(CONTEXT, reducer, DEFAULT_STATE)

export default CONTEXT
