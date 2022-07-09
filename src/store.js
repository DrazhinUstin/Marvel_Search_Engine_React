import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './features/characters/charactersSlice';
import comicsReducer from './features/comics/comicsSlice';
import creatorsReducer from './features/creators/creatorsSlice';
import favoritesReducer from './features/favorites/favoritesSlice';

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        comics: comicsReducer,
        creators: creatorsReducer,
        favorites: favoritesReducer,
    },
});

export default store;
