import { withHoc } from '@/app/hocs';
import { RouterConfiguration } from './routes';
import { FC } from 'react';


export const App = withHoc(() => {
    return <RouterConfiguration />;
}) as FC<unknown>;