import MainTemplate from "@/components/MainTemplate";
import Container from "@/components/Container";
import Standings from "@/components/Standings";

import { useDrivers } from "@/hooks/useDrivers";

export default function StandingsPage() {
  const { drivers } = useDrivers();
  return (
    <MainTemplate>
      <Container>
        <div className="bg-black rounded-2xl">
          <Standings items={drivers} variant="standingsPage" />
        </div>
      </Container>
    </MainTemplate>
  );
}
