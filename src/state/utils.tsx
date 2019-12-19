import React, { Context, Dispatch, FC, Reducer, useCallback, useReducer } from 'react'

export const toProvider = <State extends any, Action extends any>(
  context: Context<[State, Dispatch<Action>]>,
  reducer: Reducer<State, Action>,
  defaultValue: State,
): FC => ({ children }) => (
  <context.Provider value={useReducer(reducer, defaultValue)}>
    {children}
  </context.Provider>
)

export const wrapWithDispatch = <T extends (...args: any[]) => any>(
  fn: T,
  dispatch: Dispatch<ReturnType<T>>,
) => useCallback((...args: Parameters<T>) => dispatch(fn(...args)), [])
