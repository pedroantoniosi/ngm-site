import MainTemplate from "@/components/MainTemplate";
import Container from "@/components/Container";
import Standings from "@/components/Standings";

import { useDrivers } from "@/hooks/useDrivers";

import "./index.css";

export default function StandingsPage() {
  const { drivers } = useDrivers();
  return (
    <MainTemplate>
      <Container>
        <Standings items={drivers} variant="standingsPage" />
      </Container>
    </MainTemplate>
  );
}
