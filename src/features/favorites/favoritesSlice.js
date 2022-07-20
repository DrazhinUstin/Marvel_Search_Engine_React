import { createSlice } from '@reduxjs/toolkit';
import { getStorageItem, setStorageItem } from '../../utils/storage';

const initialState = {
    items: getStorageItem('favorites'),
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addItem(state, { payload }) {
            state.items.push(payload);
            setStorageItem('favorites', state.items);
        },
        removeItem(state, { payload }) {
            state.items = state.items.filter((item) => item.id !== payload);
            setStorageItem('favorites', state.items);
        },
        clearFavorites(state) {
            state.items = [];
            setStorageItem('favorites', state.items);
        },
    },
});

export const { addItem, removeItem, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
