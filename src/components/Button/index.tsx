type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
};

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",

  secondary: "bg-white text-blue-900 hover:bg-gray-200 active:bg-gray-200",

  outline:
    "border border-white/70 bg-transparent text-white hover:bg-white hover:text-blue-900 active:bg-white/90",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`
        cursor-pointer
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-md
        px-5
        py-2.5
        text-sm
        font-semibold
        uppercase
        tracking-wide
        transition-all
        duration-200
        disabled:pointer-events-none
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
