import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

export const withQuery = (children: () => ReactNode) => () => (
    <QueryClientProvider client={queryClient}>
        {children()}
    </QueryClientProvider>
);