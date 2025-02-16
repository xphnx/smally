import { useContext } from "react";
import { Theme, ThemeContextData } from "../model/types";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../model/ThemeContext";

export const useTheme = (): ThemeContextData => {
      const { theme, toggleTheme} = useContext(ThemeContext)
    
      const onToggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        toggleTheme(newTheme);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    };

    return { theme, toggleTheme: onToggleTheme }
}