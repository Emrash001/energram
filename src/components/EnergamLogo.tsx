import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import logo from "@/assets/energramlogo3.png";

interface EnergamLogoProps {
  className?: string;
  variant?: "default" | "full" | "icon";
}

const EnergamLogo = ({ className, variant = "default" }: EnergamLogoProps) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  // Unified logo container with dark mode handling
  const LogoContainer = ({ children }: { children: React.ReactNode }) => (
    <div className={cn(
      "relative flex items-center justify-center rounded-full",
      isDarkMode ? "bg-white p-1.5" : "bg-transparent p-0",
      variant === "icon" ? "w-16 h-16" : "w-16 h-16"
    )}>
      {children}
    </div>
  );

  if (variant === "icon") {
    return (
      <div className={cn(className)}>
        <LogoContainer>
          <img
            src={logo}
            alt="Energram Icon Logo"
            className="w-full h-full object-contain"
          />
        </LogoContainer>
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <LogoContainer>
          <img
            src={logo}
            alt="Energram Full Logo"
            className="w-full h-full object-contain"
          />
        </LogoContainer>
        <span className="font-display font-bold text-2xl md:text-3xl bg-gradient-to-r from-tech-700 to-solar-500 bg-clip-text text-transparent">
          Energram
        </span>
      </div>
    );
  }

  // Default variant (text only)
  return (
    <span
      className={cn(
        "font-display font-bold text-xl md:text-2xl bg-gradient-to-r from-tech-700 to-solar-500 bg-clip-text text-transparent",
        className
      )}
    >
      Energram
    </span>
  );
};

export default EnergamLogo;