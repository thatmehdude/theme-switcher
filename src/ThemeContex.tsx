import { createContext, useState, useContext, type ReactNode } from "react";
type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a themeProvider");
  }
  return context;
};

type ThemeProviderProps = {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value: ThemeContextType = {
        theme,
        toggleTheme
    };

    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    )
}