import React, { FC, useCallback, useState } from 'react'
import { adjust } from 'ramda'
import { DIE1, DIE2, DieFace } from '../models'
import RouteSelection from './Die'

const DiceBlock: FC = () => {
  const [selections, setSelections] = useState<ReadonlyArray<DieFace | undefined>>([
    undefined,
    undefined,
    undefined,
  ])
  const toOnChangeForIdx = useCallback(
    (idx: number) => (selection: DieFace | undefined) =>
      setSelections(adjust(idx, () => selection, selections)),
    [...selections],
  )

  return (
    <>
      <fieldset>
        <legend>Dice Block</legend>
        <RouteSelection faces={DIE1} onChange={toOnChangeForIdx(0)} />
        <RouteSelection faces={DIE1} onChange={toOnChangeForIdx(1)} />
        <RouteSelection faces={DIE2} onChange={toOnChangeForIdx(2)} />
      </fieldset>
      <pre>{JSON.stringify(selections, null, 2)}</pre>
      <style jsx>{`
        fieldset {
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(3, 1fr);
          margin: 20px;
        }
      `}</style>
    </>
  )
}

export default DiceBlock
