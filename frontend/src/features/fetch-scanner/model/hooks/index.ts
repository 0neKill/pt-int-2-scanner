import { useMutation, useQuery } from 'react-query';
import { $api } from '@/shared/api';
import { ApiRoutes } from '@/shared/utils';
import { HostnameRequest, HostnameResponse } from '@/entities/scanner';
import { useCallback, useEffect } from 'react';
import { message } from 'antd';


export const useFetchScannerHostname = () => {
    const { isLoading, error, data, mutate } = useMutation('hostname', (data: HostnameRequest) => {
        return $api.post<{
            result: HostnameResponse,
        }>(ApiRoutes.HOSTNAME_CTL, data);
    });


    const mutateRequest = useCallback((req: HostnameRequest) => {
        return mutate(req);
    }, [mutate]);

    useEffect(() => {
        if (error) {
            const e = error as {
                response: { data: { message: string } }, message: string
            };
            message.error(e.response?.data?.message ?? e.message).then();
        }
    }, [error]);

    return {
        isLoading, data: data?.data.result, mutateRequest,
    };
};

export const useGetScannerAll = () => {
    const { isLoading, error, data } = useQuery('hostname-all', () => {
        return $api.get<{ result: HostnameResponse[] }>(ApiRoutes.GET_ALL);
    }, {
        retry: 1,
    });

    useEffect(() => {
        if (error) {
            const e = error as {
                response: { data: { message: string } }, message: string
            };
            message.error(e.response?.data?.message ?? e.message).then();
        }
    }, [error]);

    return {
        isLoading, data: data?.data.result,
    };
};