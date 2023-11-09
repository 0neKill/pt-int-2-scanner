import { createSlice, Draft, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

import { HostnameRequest } from '@/entities/scanner';

export type InitialState = {
    sshClient: HostnameRequest
}

const initialState: InitialState = {
    sshClient: {
        login: '',
        port: '',
        password: '',
        ip: '',
    },
};

interface IssueSliceReducer<T> extends SliceCaseReducers<T> {
    setSshData: (state: Draft<T>, payload: PayloadAction<{
        type: keyof HostnameRequest,
        data: string,
        hasReset?: boolean
    }>) => void,
}

const scannerReducer = createSlice<InitialState, IssueSliceReducer<InitialState>, 'reduceScanner'>({
    name: 'reduceScanner',
    initialState,
    reducers: {
        setSshData(state, { payload: { data, type } }) {
            state.sshClient[type] = data;
        },
    },
});

export const actionScanner = scannerReducer.actions;
export const reduceScanner = scannerReducer.reducer;
