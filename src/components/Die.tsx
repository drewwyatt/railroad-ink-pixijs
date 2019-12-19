import React, { FC, useState } from 'react'
import { Die as Model, DieFace } from '../models'

type Props = { faces: Model }

const Die: FC<Props> = ({ faces }) => {
  const [selectedFace, select] = useState<DieFace>()
  return (
    <select onChange={e => select(e.target.value as DieFace)}>
      <option>Choose a route</option>
      {faces.map(toOption(selectedFace))}
    </select>
  )
}

const toOption = (selected: DieFace | undefined) => (face: DieFace) => (
  <option key={face} value={face} selected={face === selected}>
    {face}
  </option>
)

export default Die
