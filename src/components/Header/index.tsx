type HeaderProps = {
  title?: string;
  className?: string;
};

export default function Header({ title, className }: HeaderProps) {
  return (
    <div className={`flex items-center gap-4  ${className}`}>
      <h2 className="text-4xl font-bold py-4 uppercase">{title}</h2>
      <div className="bg-white w-full h-5 clip-header"></div>
    </div>
  );
}
