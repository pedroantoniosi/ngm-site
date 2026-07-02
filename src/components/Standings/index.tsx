interface Drivers {
  id: string;
  name: string;
  state: string;
  team: string;
  points: string;
  createdAt: string;
  updatedAt: string;
}

interface StandingsProps {
  items: Drivers[];
  variant?: "standingsHome" | "standingsPage";
}

export default function Standings({
  items,
  variant = "standingsHome",
}: StandingsProps) {
  const driversToRender =
    variant === "standingsHome" ? items.slice(0, 5) : items;

  return (
    <table
      className={
        variant === "standingsHome"
          ? "bg-black w-full md:rounded-xl overflow-hidden"
          : "w-full md:rounded-xl overflow-hidden"
      }
    >
      <thead>
        {" "}
        <tr className="bord">
          {" "}
          <th className="px-2 py-4 text-start text-neutral-400 uppercase text-sm">
            {" "}
            Nome{" "}
          </th>{" "}
          <th className="px-2 py-4 text-start text-neutral-400 uppercase text-sm">
            {" "}
            Estado{" "}
          </th>{" "}
          <th className="px-2 py-4 text-start text-neutral-400 uppercase text-sm">
            {" "}
            Equipe{" "}
          </th>{" "}
          <th className="px-2 py-4 text-start text-neutral-400 uppercase text-sm">
            {" "}
            PTS{" "}
          </th>{" "}
        </tr>{" "}
      </thead>

      <tbody>
        {driversToRender.map((item) => (
          <tr key={item.id} className="hover:bg-neutral-900">
            <td className="p-2 font-semibold">{item.name}</td>
            <td className="p-2 font-semibold">{item.state}</td>
            <td className="p-2 font-semibold">{item.team}</td>
            <td className="p-2 font-semibold">{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
