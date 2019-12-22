import React, { FC, useEffect, useState, useMemo } from 'react'
import { Coords, DIE1, DIE2, toTile, isRoute, DieFace } from '../models'
import { useTile } from '../state'
import RouteSelection from './Die'

type Props = Coords
const faces = DIE1.concat(DIE2)

const Cell: FC<Props> = ({ x, y }) => {
  const [tile, setTile] = useTile(x, y)
  const [face, setFace] = useState<DieFace>()

  useEffect(() => {
    if (!face && !!tile) {
      setFace(tile.route)
    }
  }, [tile?.route])

  useEffect(() => {
    if (!!tile && isRoute(face) && tile.route !== face) {
      setTile(toTile(face))
    }
  }, [tile?.route, face])

  return useMemo(
    () => (
      <td>
        <RouteSelection faces={faces} onChange={setFace} value={face} />
      </td>
    ),
    [faces, face],
  )
}

export default Cell
