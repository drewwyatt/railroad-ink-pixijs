import React, { FC } from 'react'
import { RollsProvider } from '../state'

const State: FC = ({ children }) => <RollsProvider>{children}</RollsProvider>

export default State
