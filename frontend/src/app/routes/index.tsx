import { createBrowserRouter, type RouteObject, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';

import { Routes } from '@/shared/utils';

const Default = lazy(() => import('@/pages/default/ui'));
const Main = lazy(() => import('@/pages/main/ui'));
const Info = lazy(() => import('@/pages/info/ui'));


const configuration: RouteObject[] = [
    {
        path: Routes.DEFAULT,
        element: <Default />,
        children: [
            {
                index: true,
                element: <Suspense fallback={<Spin size='large' className='loader__wrapper' />}><Main /></Suspense>,
            },
            {
                path: Routes.INFO,
                element: <Suspense fallback={<Spin size='large' className='loader__wrapper' />}><Info /></Suspense>,
            },
        ],
    },
];

export const RouterConfiguration = () => (
    <RouterProvider router={createBrowserRouter(configuration)} />
);