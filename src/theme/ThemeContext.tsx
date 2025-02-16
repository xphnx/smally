import { createContext } from "react";
import { ThemeContextData } from "./types";

export const ThemeContext = createContext<Partial<ThemeContextData>>({})

export const LOCAL_STORAGE_THEME_KEY = 'color-theme-smally'