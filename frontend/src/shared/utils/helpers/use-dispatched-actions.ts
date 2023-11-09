import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const useDispatchedActions = <T, >(action: T): T => {
   const dispatch = useDispatch();
   return useMemo(() => {
      return bindActionCreators(action as never, dispatch);
   }, [dispatch, action]);
};