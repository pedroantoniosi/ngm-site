interface News {
  id: string;
  image: string;
  title: string;
  text: string;
  url: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

interface NewsCardProps {
  item: News;
  variant?: "featured" | "default";
}

export default function NewsCard({ item, variant = "default" }: NewsCardProps) {
  return (
    <article
      className={
        variant === "featured"
          ? "relative flex items-end gap-4"
          : "flex flex-col md:flex-row gap-4"
      }
    >
      <img
        src={item.image}
        alt={item.title}
        className={
          variant === "featured"
            ? "aspect-[11/12] object-cover md:aspect-[4/3]"
            : " aspect-[4/3]  md:h-32 object-cover rounded"
        }
      />

      <div className={variant === "featured" ? "absolute p-4" : ""}>
        <span className="bg-blue-400 h-fit rounded-full px-2 flex items-center justify-center w-fit">
          {item.tag}
        </span>
        <h2 className="text-lg font-semibold md:font-bold">{item.title}</h2>
      </div>
    </article>
  );
}
