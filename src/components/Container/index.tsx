import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col max-w-420 mx-auto py-4 px-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
