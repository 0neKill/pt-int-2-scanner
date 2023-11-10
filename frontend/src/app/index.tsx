import type { FC } from 'react';

import { withHoc } from '@/app/hocs';
import { RouterConfiguration } from './routes';


export const App = withHoc(() => {
    return <RouterConfiguration />;
}) as FC<unknown>;