import { createRoot } from 'react-dom/client';

import { App } from '@/app';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(<App />);