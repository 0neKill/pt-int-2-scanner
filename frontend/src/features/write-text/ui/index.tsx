import { getIp, getLogin, getPort, Text } from '@/entities/scanner';
import { FC } from 'react';
import { useSelector } from 'react-redux';

type WriteTextProps = FC<unknown>

export const WriteText: WriteTextProps = () => {
    const ip = useSelector(getIp);
    const port = useSelector(getPort);
    const login = useSelector(getLogin);

    return (<Text ip={ip} port={Number(port)} login={login} />);
};