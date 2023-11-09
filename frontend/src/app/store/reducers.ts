import { combineReducers } from '@reduxjs/toolkit';
import { reduceScanner } from '@/entities/scanner';


export const rootReducer = combineReducers({
    reduceScanner,
});