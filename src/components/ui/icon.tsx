import { LucideIcon, CircleAlert } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = (LucideIcons as any)[name] as LucideIcon;
  const FallbackComponent = (LucideIcons as any)[fallback] as LucideIcon;

  if (!IconComponent) {
    return <FallbackComponent size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
