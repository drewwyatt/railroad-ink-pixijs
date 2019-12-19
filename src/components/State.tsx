import React, { FC } from 'react'
import { BoardProvider, RollsProvider } from '../state'

const State: FC = ({ children }) => (
  <BoardProvider>
    <RollsProvider>{children}</RollsProvider>
  </BoardProvider>
)

export default State
