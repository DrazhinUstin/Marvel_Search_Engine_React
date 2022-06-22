import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const getCharacters = createAsyncThunk('characters/getCharacters', async (url, thunkAPI) => {
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const initialState = {
    isLoading: false,
    name: '',
    offset: 0,
    limit: axios.defaults.params.limit,
    items: [],
    total: 0,
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        updateValues(state, { payload }) {
            const { name, value } = payload;
            state[name] = value;
        },
    },
    extraReducers: {
        [getCharacters.pending]: (state) => {
            state.isLoading = true;
        },
        [getCharacters.fulfilled]: (state, { payload: { offset, total, results } }) => {
            state.isLoading = false;
            if (!results.length) {
                alert('Sorry, nothing was found for your search...');
                return;
            }
            state.offset = offset;
            state.total = total;
            if (!offset) {
                state.items = results;
            } else {
                state.items = [...state.items, ...results];
            }
        },
        [getCharacters.rejected]: (state, { payload }) => {
            state.isLoading = false;
            alert(payload?.status || 'Sorry, there was an error');
        },
    },
});

export const { updateValues } = charactersSlice.actions;
export default charactersSlice.reducer;
