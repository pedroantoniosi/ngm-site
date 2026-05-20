import styles from "./index.module.css";

interface TemplateProps {
  cols?: string;
  rows?: string;
  minWidth: string;
  minHeight?: string;
  gap?: string;
  children?: React.ReactNode;
  variant?: "default" | "columns" | "rows" | "auto-fit" | "auto-fill";
}

const Template = ({
  cols,
  rows,
  minWidth,
  minHeight,
  gap,
  children,
  variant = "default",
}: TemplateProps) => {
  switch (variant) {
    case "columns":
      return (
        <div
          className={styles.columns}
          style={{
            gridTemplateColumns: cols,
            gap,
            minWidth,
            minHeight,
          }}
        >
          {children}
        </div>
      );

    case "rows":
      return (
        <div
          className={styles.rows}
          style={{
            gridTemplateRows: rows,
            gap,
            minWidth,
            minHeight,
          }}
        >
          {children}
        </div>
      );

    case "auto-fit":
      return (
        <div
          className={styles.autoFit}
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
            gap,
          }}
        >
          {children}
        </div>
      );

    case "auto-fill":
      return (
        <div
          className={styles.autoFill}
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
            gap,
          }}
        >
          {children}
        </div>
      );

    default:
      return <div className={styles.default}>{children}</div>;
  }
};

export default Template;
