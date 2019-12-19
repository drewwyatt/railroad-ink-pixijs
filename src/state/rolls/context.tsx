import React, { createContext, Dispatch, FC, useContext, useReducer } from 'react'
import { Action, DEFAULT_STATE, reducer, State } from './state'

const CONTEXT = createContext<[State, Dispatch<Action>]>(undefined)

export const Provider: FC = ({ children }) => (
  <CONTEXT.Provider value={useReducer(reducer, DEFAULT_STATE)}>
    {children}
  </CONTEXT.Provider>
)

export default CONTEXT
