import Container from "@/components/Container";
import MainTemplate from "@/components/MainTemplate";
import Shopping from "@/components/Shopping/index";

export default function ShoppingPage() {
  return (
    <MainTemplate>
      <Container>
        <div className="flex flex-row py-6">
          <h2 className="text-4xl font-bold tracking-tighter uppercase">
            Shopping
          </h2>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Shopping />
        </div>
      </Container>
    </MainTemplate>
  );
}
