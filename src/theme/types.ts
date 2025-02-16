export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

export interface ThemeContextData {
  theme?: Theme;
  toggleTheme?: (theme: Theme) => void;
}

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}