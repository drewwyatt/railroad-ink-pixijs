import { Route } from './routes'

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
  route: Route
  hasStation: boolean
  orientation: Orientation
}

const make = (
  route: Route,
  top: Connection,
  right: Connection,
  bottom: Connection,
  left: Connection,
  hasStation: boolean = false,
): Tile => ({
  route,
  top,
  right,
  bottom,
  left,
  hasStation,
  orientation: Orientation.Top, // ?
})

const { Highway, Railway, None } = Connection
export const TILES = [
  make(Route.StraightHighway, Highway, None, Highway, None),
  make(Route.CurvedHighway, None, Highway, Highway, None),
  make(Route.TJunctionHighway, None, Highway, Highway, Highway),
  make(Route.StraightRailway, Railway, None, Railway, None),
  make(Route.CurvedRailway, None, Railway, Railway, None),
  make(Route.TJunctionRailway, None, Railway, Railway, Railway),
  make(Route.Overpass, Highway, Railway, Highway, Railway),
  make(Route.StraightStation, Highway, None, Railway, None, true),
  make(Route.CurvedStation, None, Highway, Railway, None, true),
  make(Route.THighwayRailwayStation, Highway, Highway, Railway, Highway, true),
  make(Route.TRailwayHighwayStation, Railway, Railway, Highway, Railway, true),
  make(Route.FourWayHighway, Highway, Highway, Highway, Highway),
  make(Route.FourWayRailway, Railway, Railway, Railway, Railway),
  make(Route.CurvedHighwayRailwayStation, Highway, Railway, Railway, Highway, true),
  make(Route.StraightHighwayRailwayStation, Highway, Railway, Highway, Railway, true),
  make(Route.ExitHighway, Highway, None, None, None, true),
  make(Route.ExitRailway, Railway, None, None, None),
  make(Route.Empty, None, None, None, None),
] as const

export const tileIsRoute = (route: Route) => (tile: Tile) => tile.route === route
export const toTile = (route: Route) => TILES.find(tileIsRoute(route))!
