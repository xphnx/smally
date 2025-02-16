import { useContext } from "react";
import { Theme } from "../model/types";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../model/ThemeContext";
export var useTheme = function () {
    var _a = useContext(ThemeContext), theme = _a.theme, toggleTheme = _a.toggleTheme;
    var onToggleTheme = function () {
        var newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        toggleTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme: theme, toggleTheme: onToggleTheme };
};
