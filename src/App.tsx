import { createContext, useState } from "react";
import Counter from "./Counter/Counter";
import "./index.css";
import ToggleModeApp from "./ToggleModeApp/ToggleModeApp";

// declaring types for the object
interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}
// create and exporting the context 
export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  // initializing the state of the object
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    // give the object background with a chain logic
    <div
      className={` ${
        theme === "light" ? "bg-blue-400" : "bg-white"
      }  light flex flex-col justify-center items-center w-full min-h-screen`}
    >
      {/* pass the objects prop to all the children */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ToggleModeApp />
        <Counter />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
