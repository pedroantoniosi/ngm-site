import MainTemplate from "@/components/MainTemplate";
import Container from "@/components/Container";
import Standings from "@/components/Standings";

import { useDrivers } from "@/hooks/useDrivers";

export default function StandingsPage() {
  const { drivers } = useDrivers();
  return (
    <MainTemplate>
      <Container>
        <div className="flex flex-row py-6">
          <h2 className="text-4xl font-bold tracking-tighter uppercase">
            Classificação
          </h2>
        </div>
        <div className="bg-black rounded-2xl">
          <Standings items={drivers} variant="standingsPage" />
        </div>
      </Container>
    </MainTemplate>
  );
}
