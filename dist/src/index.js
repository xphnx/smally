import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@app/styles/index.scss';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { App } from '@app/App';
var rootElement = document.getElementById('root');
if (rootElement) {
    var root = createRoot(rootElement);
    root.render(_jsx(BrowserRouter, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }));
}
