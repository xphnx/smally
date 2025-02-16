import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@app/styles/index.scss';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { App } from '@app/App';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);

    root.render(<BrowserRouter><ThemeProvider><App /></ThemeProvider></BrowserRouter>)
}