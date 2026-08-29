export interface Drivers {
  id: string;
  name: string;
  state: string;
  team: string;
  points: number;
  createdAt: string;
  updatedAt: string;
}

export interface DriversContextType {
  drivers: Drivers[];
  loading: boolean;
}
