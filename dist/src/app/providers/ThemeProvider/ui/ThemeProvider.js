var _a;
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { Theme } from '../model/types';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../model/ThemeContext';
var defaultTheme = (_a = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) !== null && _a !== void 0 ? _a : Theme.LIGHT;
export var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState(defaultTheme), theme = _b[0], setTheme = _b[1];
    var defaultThemeData = useMemo(function () { return ({ theme: theme, toggleTheme: setTheme }); }, [theme]);
    return (_jsx(ThemeContext.Provider, { value: defaultThemeData, children: children }));
};
