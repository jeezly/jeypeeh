import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    // Instantáneo: sin animación, sin "scrolling visible"
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}
