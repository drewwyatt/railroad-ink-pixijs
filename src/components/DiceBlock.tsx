import React, { FC, useCallback } from 'react'
import { DIE1, DIE2, DieFace } from '../models'
import { useCurrentRoll, usePastRolls } from '../state'
import RouteSelection from './Die'

const DiceBlock: FC = () => {
  const [selections, { makeSelection, commitRoll }] = useCurrentRoll()
  const pastRolls = usePastRolls()
  const toOnChangeForIdx = useCallback(
    (idx: 0 | 1 | 2) => (selection: DieFace | undefined) => makeSelection(idx, selection),
    [],
  )

  return (
    <>
      <fieldset>
        <legend>Dice Block</legend>
        <RouteSelection
          faces={DIE1}
          onChange={toOnChangeForIdx(0)}
          value={selections[0]}
        />
        <RouteSelection
          faces={DIE1}
          onChange={toOnChangeForIdx(1)}
          value={selections[1]}
        />
        <RouteSelection
          faces={DIE2}
          onChange={toOnChangeForIdx(2)}
          value={selections[2]}
        />
        <button onClick={commitRoll}>Commit</button>
      </fieldset>
      <fieldset>
        <legend>Selections</legend>
        <pre>{JSON.stringify(selections, null, 2)}</pre>
      </fieldset>
      <fieldset>
        <legend>Past Rolls</legend>
        <pre>{JSON.stringify(pastRolls, null, 2)}</pre>
      </fieldset>
      <style jsx>{`
        fieldset {
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(4, 1fr);
          margin: 20px;
        }
      `}</style>
    </>
  )
}

export default DiceBlock
