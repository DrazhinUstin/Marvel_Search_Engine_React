import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './features/characters/charactersSlice';
import comicsReducer from './features/comics/comicsSlice';

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        comics: comicsReducer,
    },
});

export default store;
