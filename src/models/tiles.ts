import Route from './routes'

export enum Connection {
  Highway,
  Railway,
  None,
}

export enum Orientation {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export type Tile = Record<Orientation, Connection> & {
  name: Route
  hasStation: boolean
  orientation: Orientation
}

const toTile = (
  name: Route,
  top: Connection,
  right: Connection,
  bottom: Connection,
  left: Connection,
  hasStation: boolean = false,
): Tile => ({
  name,
  top,
  right,
  bottom,
  left,
  hasStation,
  orientation: Orientation.Top, // ?
})

const { Highway, Railway, None } = Connection
export const TILES = [
  toTile(Route.StraightHighway, Highway, None, Highway, None),
  toTile(Route.CurvedHighway, None, Highway, Highway, None),
  toTile(Route.TJunctionHighway, None, Highway, Highway, Highway),
  toTile(Route.StraightRailway, Railway, None, Railway, None),
  toTile(Route.CurvedRailway, None, Railway, Railway, None),
  toTile(Route.TJunctionRailway, None, Railway, Railway, Railway),
  toTile(Route.Overpass, Highway, Railway, Highway, Railway),
  toTile(Route.StraightStation, Highway, None, Railway, None, true),
  toTile(Route.CurvedStation, None, Highway, Railway, None, true),
  toTile(Route.THighwayRailwayStation, Highway, Highway, Railway, Highway, true),
  toTile(Route.TRailwayHighwayStation, Railway, Railway, Highway, Railway, true),
  toTile(Route.FourWayHighway, Highway, Highway, Highway, Highway),
  toTile(Route.FourWayRailway, Railway, Railway, Railway, Railway),
  toTile(Route.CurvedHighwayRailwayStation, Highway, Railway, Railway, Highway, true),
  toTile(Route.StraightHighwayRailwayStation, Highway, Railway, Highway, Railway, true),
  toTile(Route.ExitHighway, Highway, None, None, None, true),
  toTile(Route.ExitRailway, Railway, None, None, None),
  toTile(Route.Empty, None, None, None, None),
]
