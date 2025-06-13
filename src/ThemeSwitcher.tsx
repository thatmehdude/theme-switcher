import { useTheme } from "./ThemeContex";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`container ${theme === 'light' ? 'light' : 'dark'}`}>
      <h1>{theme} mode</h1>
      <button className={`button ${theme === "light" ? "light" : "dark"}`} onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;