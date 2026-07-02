import { useContext } from "react";

import { DriversContext } from "../context/driversContext";

export function useDrivers() {
  return useContext(DriversContext);
}
