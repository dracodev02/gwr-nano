import { cn } from "@/utils/utils";

interface DividerProps {
  width?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ width = 64, className = "" }) => {
  const classes = cn("h-1 bg-primary", className);

  return <div className={classes} style={{ width: width }}></div>;
};

export default Divider;
