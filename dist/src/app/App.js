import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Link } from 'react-router-dom';
import { LazyAbout, LazyMain } from '@pages';
import './styles/index.scss';
import { classNames } from '../helpers/classNames';
import { useTheme } from './providers/ThemeProvider';
export var App = function () {
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (_jsxs("div", { className: classNames('app', {}, [theme]), children: [_jsx("button", { onClick: function () { return toggleTheme(); }, children: "Toggle theme" }), _jsx(Link, { to: "/", children: "Main" }), _jsx(Link, { to: "/about", children: "About" }), _jsxs(Routes, { children: [_jsx(Route, { path: '/about', element: _jsx(LazyAbout, {}) }), _jsx(Route, { path: '/', element: _jsx(LazyMain, {}) })] })] }));
};
