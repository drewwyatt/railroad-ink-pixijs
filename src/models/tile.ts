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
  hasStation: boolean
  orientation: Orientation
}

const toTile = (
  top: Connection,
  right: Connection,
  bottom: Connection,
  left: Connection,
  hasStation: boolean = false,
): Tile => ({
  top,
  right,
  bottom,
  left,
  hasStation,
  orientation: Orientation.Top, // ?
})

const { Highway, Railway, None } = Connection
export const Tiles: Readonly<Record<Route, Tile>> = {
  [Route.StraightHighway]: toTile(Highway, None, Highway, None),
  [Route.CurvedHighway]: toTile(None, Highway, Highway, None),
  [Route.TJunctionHighway]: toTile(None, Highway, Highway, Highway),
  [Route.StraightRailway]: toTile(Railway, None, Railway, None),
  [Route.CurvedRailway]: toTile(None, Railway, Railway, None),
  [Route.TJunctionRailway]: toTile(None, Railway, Railway, Railway),
  [Route.Overpass]: toTile(Highway, Railway, Highway, Railway),
  [Route.StraightStation]: toTile(Highway, None, Railway, None, true),
  [Route.CurvedStation]: toTile(None, Highway, Railway, None, true),
  [Route.THighwayRailwayStation]: toTile(Highway, Highway, Railway, Highway, true),
  [Route.TRailwayHighwayStation]: toTile(Railway, Railway, Highway, Railway, true),
  [Route.FourWayHighway]: toTile(Highway, Highway, Highway, Highway),
  [Route.FourWayRailway]: toTile(Railway, Railway, Railway, Railway),
  [Route.CurvedHighwayRailwayStation]: toTile(Highway, Railway, Railway, Highway, true),
  [Route.StraightHighwayRailwayStation]: toTile(Highway, Railway, Highway, Railway, true),
  [Route.ExitHighway]: toTile(Highway, None, None, None, true),
  [Route.ExitRailway]: toTile(Railway, None, None, None),
  [Route.Empty]: toTile(None, None, None, None),
}
