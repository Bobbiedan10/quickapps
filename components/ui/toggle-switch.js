import { useTheme } from "next-themes";
import LightbulbIcon from "../icons/lightbulb-icon";

function ToggleSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="fixed opacity-60 dark:hover:bg-orange-300 hover:bg-orange-300 bg-orange-500 dark:bg-orange-800 rounded-lg bottom-4 right-4 p-3 h-12 w-12 order-2 md:order-3 z-30"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <LightbulbIcon />
    </button>
  );
}

export default ToggleSwitch;
