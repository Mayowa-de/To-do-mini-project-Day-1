import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../App.tsx";

export default function ToggleModeApp() {
  // consuming the context
  const themeContext = useContext(ThemeContext);
// declaring the prop passed 
  const { theme, setTheme } = themeContext;
  // passing and declaring type for ref
  const buttonRef = useRef<HTMLButtonElement>(null);

  // ref keep the theme state while rerendering
  useEffect(() => {
    buttonRef.current?.focus();
  }, []);
  // Error handler 
  if (!themeContext) {
    throw new Error("toggleButton should be within the provider");
  }

  return (
    <div className="flex mb-20 ">
      <button
        ref={buttonRef}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-3 bg-teal-300 rounded-xl hover:bg-white hover:border-2"
      >
        Switch {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
