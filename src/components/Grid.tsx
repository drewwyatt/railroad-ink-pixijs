import React, { FC, useMemo } from 'react'
import { splitEvery } from 'ramda'
import { BOARD_WIDTH } from '../constants'
import { Tile } from '../models'
import { useBoard } from '../state'
import Cell from './Cell'

const groupInRows = (tiles: Tile[]) => splitEvery(BOARD_WIDTH, tiles)

const Grid: FC = () => {
  const [tiles] = useBoard()
  const rows = useMemo(() => groupInRows(tiles), [tiles])

  return (
    <table>
      <tbody>{rows.map(toRow)}</tbody>
    </table>
  )
}

type RowProps = { idx: number; tiles: Tile[] }
const toRow = (tiles: Tile[], idx: number) => (
  <Row key={`row_${idx}`} tiles={tiles} idx={idx} />
)
const Row: FC<RowProps> = ({ idx, tiles }) => <tr>{tiles.map(toCell(idx))}</tr>

const toCell = (y: number) => (_, x: number) => (
  <Cell key={`cell_${x}, ${y}`} x={x} y={y} />
)

export default Grid
