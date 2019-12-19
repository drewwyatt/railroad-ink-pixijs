import React, { Context, Dispatch, FC, Reducer, useReducer } from 'react'

export const toProvider = <State extends any, Action extends any>(
  context: Context<[State, Dispatch<Action>]>,
  reducer: Reducer<State, Action>,
  defaultValue: State,
): FC => ({ children }) => (
  <context.Provider value={useReducer(reducer, defaultValue)}>
    {children}
  </context.Provider>
)
