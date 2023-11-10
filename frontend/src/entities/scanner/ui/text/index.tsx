import type { FC } from 'react';
import { clsx } from 'clsx';

import './styles.scss';

type TextProps = FC<{
    login: string,
    ip: string,
    port: number,
    className?: string
}>

export const Text: TextProps = ({ ip, port, login, className }) => {
    return <h1 className={clsx('text', className)}>
        <span className='text__who'>Whoami{' > '}</span><span
        className='text__ssh'>ssh</span> <span
        className='text__word'>{login || 'user'}</span>@
        <span className='text__word'>{ip || '0.0.0.0'}</span> -p <span className='text__word'>{port || 0}</span>
    </h1>;
};