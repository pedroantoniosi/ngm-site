import { useProducts } from "@/hooks/useProducts";

export default function Shopping() {
  const { products } = useProducts();
  return (
    <>
      {products
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => (
          <a
            href=""
            key={item.id}
            className="rounded-2xl bg-zinc-950 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="aspect-square w-full object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-md text-zinc-200">{item.name}</h2>

              <p className="text-xl font-semibold">
                R$ {item.price.toFixed(2).replace(".", ",")}
              </p>
            </div>
          </a>
        ))}
    </>
  );
}
