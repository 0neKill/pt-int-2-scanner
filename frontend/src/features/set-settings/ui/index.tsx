import { Button, Form, Input, InputNumber } from 'antd';
import { useSelector } from 'react-redux';
import type { ChangeEvent, FC } from 'react';

import { useChangeScannerSettings, HostnameRequest, getIp, getPort, getLogin, getPassword } from '@/entities/scanner';

type SetSettingsProps = FC<{
    hostnameCtlFetch: (values: HostnameRequest) => void,
    isLoading: boolean,
}>

export const SetSettings: SetSettingsProps = ({ hostnameCtlFetch, isLoading }) => {
    const { setSshData } = useChangeScannerSettings();
    const ip = useSelector(getIp);
    const port = useSelector(getPort);
    const login = useSelector(getLogin);
    const password = useSelector(getPassword);

    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setSshData({
            type: (target.getAttribute('name') as keyof HostnameRequest),
            data: target.value,
        });
    };

    const handlerOnChangePort = (value: string | null) => {
        setSshData({
            type: 'port',
            data: value as string,
        });
    };

    const onFinish = (values: HostnameRequest) => {
        hostnameCtlFetch(values);
    };

    return (
        <Form
            name='basic'
            style={{ width: '100%' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}

        >
            <Form.Item
                label='Ip'
                name='ip'
                initialValue={ip}
                rules={[{
                    required: true,
                    message: 'Please input your ip!',
                    pattern: /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/g,
                }]}
            >
                <Input name='ip' onChange={handlerOnChange} value={ip} />
            </Form.Item>

            <Form.Item
                label='Port'
                name='port'
                initialValue={port}
                rules={[{
                    required: true,
                    message: '${label} must be between ${min} and ${max}',
                    type: 'number',
                    min: 0,
                    max: 65536,
                }]}
            >
                <InputNumber style={{ width: '100%' }} onChange={handlerOnChangePort} value={port} />
            </Form.Item>
            <Form.Item
                label='Login'
                name='login'
                initialValue={login}
                rules={[{ required: true, message: 'Please input your login!' }]}
            >
                <Input name='login' onChange={handlerOnChange} value={login} />
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
                initialValue={password}
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password name='password' onChange={handlerOnChange} value={password} />
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit' style={{ width: '100%' }} loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};