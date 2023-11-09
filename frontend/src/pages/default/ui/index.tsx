import { Layout } from '@/shared/ui';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Routes } from '@/shared/utils';

const defaultSelected = {
    [Routes.DEFAULT]: '1',
    [Routes.INFO]: '2',
};

export default function Default() {
    const location = useLocation();

    return (<Layout
            defaultSelectedKeys={defaultSelected[location.pathname as Routes]}
            routes={[
                {
                    key: 1,
                    label: <NavLink to={Routes.DEFAULT}>Main</NavLink>,
                },
                {
                    key: 2,
                    label: <NavLink to={Routes.INFO}>Info</NavLink>,
                },
            ]}>
            <Outlet />
        </Layout>
    );
}