import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './features/characters/charactersSlice';
import comicsReducer from './features/comics/comicsSlice';
import favoritesReducer from './features/favorites/favoritesSlice';

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        comics: comicsReducer,
        favorites: favoritesReducer,
    },
});

export default store;
