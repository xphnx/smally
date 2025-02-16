import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';
import { Theme } from './types';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultThemeData = useMemo(() => ({ theme, toggleTheme: setTheme}), [theme]);


  return (
    <ThemeContext.Provider value={defaultThemeData}>
        {children}
    </ThemeContext.Provider>
  )
}