import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";
import { Theme, ThemeContextData } from "./types";

export const useTheme = (): ThemeContextData => {
      const { theme, toggleTheme} = useContext(ThemeContext)
    
      const onToggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        toggleTheme(newTheme);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    };

    return { theme, toggleTheme: onToggleTheme }
}