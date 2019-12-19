import React, { FC, useState } from 'react'
import { Board, Tile } from '../models'

const Grid: FC = () => {
  const [board] = useState(new Board())

  return <table>{board.toRows().map(toRow)}</table>
}

type RowProps = { tiles: Tile[] }
const toRow = (tiles: Tile[], idx: number) => <Row key={`row_${idx}`} tiles={tiles} />
const Row: FC<RowProps> = ({ tiles }) => <tr>{tiles.map(toCell)}</tr>

const toCell = (tile: Tile, idx: number) => <Cell key={`cell_${idx}`} {...tile} />
const Cell: FC<Tile> = ({ route }) => <td>{route}</td>

export default Grid
