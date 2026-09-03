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
  variant?: "featured" | "news" | "videos" | "default";
  caption?: string;
}

const variants = {
  featured: {
    article: "relative overflow-hidden rounded-xl",
    image: "md:h-170 aspect-[16/10] object-cover",
    caption: "z-[10] absolute z-[2] bottom-0 p-4",
    title: "md:text-3xl font-semibold text-white",
  },

  news: {
    article: "relative flex flex-col bg-zinc-950 rounded-2xl overflow-hidden",
    caption: "fex flex-col z-[10] py-4 px-2",
    image: "aspect-[16/10] object-cover md:w-100",
    title: "text-sm md:text-md font-bold",
  },

  videos: {
    article: "relative flex flex-col",
    caption: "z-[10] ",
    image: "aspect-video w-full rounded-xl object-cover",
    title: "text-lg font-bold",
  },

  default: {
    article: "relative flex flex-col",
    caption: "z-[10] ",
    image: "w-full h-full rounded-lg  object-cover",
    title: "text-lg font-semibold",
  },
} as const;

export default function NewsCard({
  item,
  variant = "default",
  caption,
}: NewsCardProps) {
  const styles = variants[variant];

  return (
    <article className={styles.article}>
      {variant === "featured" && (
        <div className="absolute inset-0 z-[9] bg-gradient-to-b from-transparent to-black/70" />
      )}
      <img src={item.image} alt={item.title} className={styles.image} />

      <div
        className={`flex flex-col gap-2  ${styles.caption} ${caption ?? ""}`}
      >
        <span className="flex w-fit text-sm items-center justify-center rounded-full bg-blue-400 px-2">
          {item.tag}
        </span>

        <h2 className={styles.title}>{item.title}</h2>
      </div>
    </article>
  );
}
