import { createRoot } from 'react-dom/client';
import './index.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);

    root.render(<div className="app">React</div>)
}