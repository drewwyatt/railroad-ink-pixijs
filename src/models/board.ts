import { splitEvery } from 'ramda'
import { Route } from './routes'
import { Tile, toTile } from './tiles'

export class Board {
  // The playable area is 7x7, a 9x9 board includes a border for exits
  public width = 9
  public height = 9

  private tiles: Tile[]

  constructor() {
    this.tiles = new Array(this.width * this.height).fill(toTile(Route.Empty))
  }

  get = (x: number, y: number) => this.tiles[this.toIdx(x, y)]
  set = (x: number, y: number, tile: Tile) => {
    this.tiles[this.toIdx(x, y)] = tile
  }
  toRows = () => splitEvery(this.width, this.tiles)

  private toIdx = (x: number, y: number) => this.width * y + x
}
