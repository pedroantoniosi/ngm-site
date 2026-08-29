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
        const response = await fetch(`https://ngm-api.onrender.com/drivers`);
        if (!response.ok) {
          throw new Error("Erro ao buscar pilotos");
        }
        const data: Drivers[] = await response.json();
        console.log("DRIVERS API:", data);
        setDrivers(data);
      } catch (error) {
        console.error("Erro ao carregar pilotos:", error);
      } finally {
        setLoading(false);
      }
    }
    loadDrivers();
  }, []);
  return (
    <DriversContext.Provider value={{ drivers, loading }}>
      {" "}
      {children}{" "}
    </DriversContext.Provider>
  );
}
export { DriversContext };
