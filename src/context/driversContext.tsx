import { createContext, useEffect, useState } from "react";

import type { DriversContextType, Drivers } from "./driversTypes";

const DriversContext = createContext<DriversContextType>({
  drivers: [],
  loading: true,
});

export function DriversProvider({ children }: { children: React.ReactNode }) {
  const [drivers, setDrivers] = useState<Drivers[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDrivers() {
      try {
        const response = await fetch("http://localhost:3001/drivers");

        const data = await response.json();
        console.log("NEWS API:", data);
        setDrivers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDrivers();
  }, []);

  return (
    <DriversContext.Provider
      value={{
        drivers,
        loading,
      }}
    >
      {children}
    </DriversContext.Provider>
  );
}

export { DriversContext };
