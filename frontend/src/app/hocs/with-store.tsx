import { Provider } from 'react-redux';

import type { ReactNode } from 'react';

import { store } from '../store';


export const withStore = (children: () => ReactNode) => () => (
    <Provider store={store}>
        {children()}
    </Provider>
);