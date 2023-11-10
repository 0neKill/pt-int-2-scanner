import type { FC } from 'react';
import { Card as CardContainer } from 'antd';

import type { HostnameResponse } from '@/entities/scanner';

import './styles.scss';

type CardProps = FC<{
    data: HostnameResponse,
}>

export const Card: CardProps = ({ data }) => {

    return <CardContainer title={data.ip} className='card'>
        <p>Login: <span className='card__description'>{data.login}</span></p>
        <p>StaticHostname: <span className='card__description'>{data.staticHostname}</span></p>
        <p>OperatingSystem: <span className='card__description'>{data.operatingSystem}</span></p>
        <p>Architecture: <span className='card__description'>{data.architecture}</span></p>
        <p>Version: <span className='card__description'>{data.version}</span></p>
        <p>Commands: <span className='card__description'>{data.commands}</span></p>
    </CardContainer>;
};