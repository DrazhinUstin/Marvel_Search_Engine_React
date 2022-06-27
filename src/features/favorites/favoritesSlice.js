import { createSlice } from '@reduxjs/toolkit';
import { getStorageItem, setStorageItem } from '../../utils/storage';

const initialState = {
    items: getStorageItem('favorites'),
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites(state, { payload }) {
            state.items.push(payload);
            setStorageItem('favorites', state.items);
        },
        removeFromFavorites(state, { payload }) {
            state.items = state.items.filter((item) => item.id !== payload);
            setStorageItem('favorites', state.items);
        },
        clearFavorites(state) {
            state.items = [];
            setStorageItem('favorites', state.items);
        },
    },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
