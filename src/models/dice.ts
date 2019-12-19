import { Route } from './routes'

export type Die = readonly Route[]

export const DIE1: Die = [
  Route.StraightHighway,
  Route.CurvedHighway,
  Route.TJunctionHighway,
  Route.StraightRailway,
  Route.CurvedRailway,
  Route.TJunctionRailway,
]

export const DIE2: Die = [Route.Overpass, Route.StraightStation, Route.CurvedStation]
