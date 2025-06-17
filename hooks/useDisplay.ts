import { Display } from "@/types";
import { useMediaQuery } from "react-responsive";

export const useDisplay = (): Display => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 799px) and (min-width: 376px)",
  });

  if (isDesktop) return "desktop";

  if (isTablet) return "tablet";

  return "mobile";
};
