enum Route {
  // die 1
  StraightHighway,
  CurvedHighway,
  TJunctionHighway,
  StraightRailway,
  CurvedRailway,
  TJunctionRailway,

  // die 2
  Overpass,
  StraightStation,
  CurvedStation,

  // special tiles
  THighwayRailwayStation,
  TRailwayHighwayStation,
  FourWayHighway,
  FourWayRailway,
  CurvedHighwayRailwayStation,
  StraightHighwayRailwayStation,

  // pre-placed
  ExitHighway,
  ExitRailway,
  Empty,
}

export default Route
