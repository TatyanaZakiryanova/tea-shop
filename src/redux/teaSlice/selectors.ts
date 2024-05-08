import { RootState } from '../store';

export const itemsSelector = (state: RootState) => state.teaReducer.items;
export const statusSelector = (state: RootState) => state.teaReducer.status;
