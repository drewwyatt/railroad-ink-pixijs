import { values } from 'ramda'

export enum Route {
  // die 1
  StraightHighway = 'StraightHighway',
  CurvedHighway = 'CurvedHighway',
  TJunctionHighway = 'TJunctionHighway',
  StraightRailway = 'StraightRailway',
  CurvedRailway = 'CurvedRailway',
  TJunctionRailway = 'TJunctionRailway',

  // die 2
  Overpass = 'Overpass',
  StraightStation = 'StraightStation',
  CurvedStation = 'CurvedStation',

  // special tiles
  THighwayRailwayStation = 'THighwayRailwayStation',
  TRailwayHighwayStation = 'TRailwayHighwayStation',
  FourWayHighway = 'FourWayHighway',
  FourWayRailway = 'FourWayRailway',
  CurvedHighwayRailwayStation = 'CurvedHighwayRailwayStation',
  StraightHighwayRailwayStation = 'StraightHighwayRailwayStation',

  // pre-placed
  ExitHighway = 'ExitHighway',
  ExitRailway = 'ExitRailway',
  Empty = 'Empty',
}

export const isRoute = (route: any): route is Route => values(Route).includes(route)

export const NORMAL_ROUTES = [
  Route.StraightHighway,
  Route.CurvedHighway,
  Route.TJunctionHighway,
  Route.StraightRailway,
  Route.TJunctionRailway,
  Route.CurvedRailway,
  Route.Overpass,
  Route.StraightStation,
  Route.CurvedStation,
] as const
export type NormalRoute = typeof NORMAL_ROUTES[number]
export const isNormalRoute = (route: any): route is NormalRoute =>
  NORMAL_ROUTES.includes(route)

export const SPECIAL_ROUTES = [
  Route.THighwayRailwayStation,
  Route.TRailwayHighwayStation,
  Route.FourWayHighway,
  Route.FourWayRailway,
  Route.CurvedHighwayRailwayStation,
  Route.StraightHighwayRailwayStation,
]
export type SpecialRoute = typeof SPECIAL_ROUTES[number]
export const isSpecialRoute = (route: any): route is SpecialRoute =>
  SPECIAL_ROUTES.includes(route)

export const EXIT_ROUTES = [Route.ExitHighway, Route.ExitRailway]
export type ExitRoute = typeof EXIT_ROUTES[number]
export const isExitRoute = (route: any): route is ExitRoute => EXIT_ROUTES.includes(route)

export type EmptyRoute = Route.Empty
export const isEmptyRoute = (route: any): route is Route.Empty => route === Route.Empty
