import type { FC } from 'react';
import './styles.scss';
import { useGetScannerAll } from '@/features';
import { Card } from '@/entities/scanner';
import { Empty, Spin } from 'antd';

type InfoViewProps = FC<unknown>

export const InfoView: InfoViewProps = () => {
    const { data, isLoading } = useGetScannerAll();
    if (isLoading) {
        return <Spin size='large' className='loader__wrapper' />;
    }


    return (
        <article className='info-view'>
            {
                data?.length ? data?.map(scan => (
                    <Card key={scan.id} data={scan} />
                )) : <Empty className='info-view__empty'/>
            }


        </article>
    );
};