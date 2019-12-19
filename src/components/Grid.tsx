import React, { FC, useMemo } from 'react'
import { splitEvery } from 'ramda'
import { BOARD_WIDTH } from '../constants'
import { Tile } from '../models'
import { useBoard } from '../state'

const groupInRows = (tiles: Tile[]) => splitEvery(BOARD_WIDTH, tiles)

const Grid: FC = () => {
  const [tiles] = useBoard()
  const rows = useMemo(() => groupInRows(tiles), [tiles])

  return <table>{rows.map(toRow)}</table>
}

type RowProps = { tiles: Tile[] }
const toRow = (tiles: Tile[], idx: number) => <Row key={`row_${idx}`} tiles={tiles} />
const Row: FC<RowProps> = ({ tiles }) => <tr>{tiles.map(toCell)}</tr>

const toCell = (tile: Tile, idx: number) => <Cell key={`cell_${idx}`} {...tile} />
const Cell: FC<Tile> = ({ route }) => <td>{route}</td>

export default Grid
