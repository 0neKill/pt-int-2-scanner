import type { FC, ReactNode } from 'react';
import type { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Layout as LayoutContainer, Menu } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';


import './styles.scss';

type LayoutProps = FC<{
    routes: ItemType<MenuItemType>[],
    children: ReactNode,
    defaultSelectedKeys: string,
}>

export const Layout: LayoutProps = ({ routes, children, defaultSelectedKeys }) => {
    return (
        <LayoutContainer className='layout'>
            <Sider trigger={null}>
                <Menu
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={[defaultSelectedKeys]}
                    items={routes}
                />
            </Sider>
            <LayoutContainer>
                <Content
                    style={{
                        margin: '24px 16px',
                        minHeight: 280,
                        overflow: 'auto',
                    }}
                >
                    {children}
                </Content>
            </LayoutContainer>
        </LayoutContainer>
    );
};