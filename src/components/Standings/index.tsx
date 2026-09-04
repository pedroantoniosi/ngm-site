interface Driver {
  id: string;
  name: string;
  state: string;
  team: string;
  points: number;
  createdAt: string;
  updatedAt: string;
}

interface StandingsProps {
  items: Driver[];
  variant?: "standingsHome" | "standingsPage";
}

export default function Standings({
  items,
  variant = "standingsHome",
}: StandingsProps) {
  const sortedDrivers = [...items].sort((a, b) => b.points - a.points);

  const driversToRender =
    variant === "standingsHome" ? sortedDrivers.slice(0, 5) : sortedDrivers;

  return (
    <table className="bg-zinc-950 w-full flex flex-col gap-2 p-12 rounded-2xl">
      <thead className="flex  w-full p-2">
        <tr className=" w-full flex gap-1 border-b-1 border-zinc-400 py-4">
          <th className="text-zinc-400 font-medium flex-1 text-start">Pos</th>
          <th className="text-zinc-400 font-medium flex-1 text-start">Nome</th>

          <th className="text-zinc-400 font-medium flex-1 text-start">
            Estado
          </th>

          <th className="text-zinc-400 font-medium flex-1 text-start">
            Equipe
          </th>

          <th className="text-zinc-400 font-medium flex-1 text-end">PTS</th>
        </tr>
      </thead>

      <tbody className="flex flex-col">
        {driversToRender.map((item, index) => (
          <tr
            key={item.id}
            className="w-full flex  flex-1 hover:bg-neutral-900"
          >
            <td className="p-2 font-semibold w-full">{index + 1}</td>
            <td className="p-2 font-semibold w-full">{item.name}</td>

            <td className="p-2 font-semibold w-full">{item.state}</td>

            <td className="p-2 font-semibold w-full ">{item.team}</td>

            <td className="p-2 font-semibold w-full text-end">{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
