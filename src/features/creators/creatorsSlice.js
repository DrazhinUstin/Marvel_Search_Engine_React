import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import marvelAPI from '../../utils/marvelAPI';

export const getCreators = createAsyncThunk('creators/getCreators', async (offset, thunkAPI) => {
    try {
        const {
            creators: { name, limit },
        } = thunkAPI.getState();
        const params = { limit };
        if (name) params.nameStartsWith = name;
        if (offset) params.offset = offset;
        const response = await marvelAPI('creators', {
            params,
        });
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const initialState = {
    isLoading: false,
    name: '',
    offset: 0,
    limit: 20,
    items: [],
    total: 0,
};

const creatorsSlice = createSlice({
    name: 'creators',
    initialState,
    reducers: {
        updateValues(state, { payload }) {
            const { name, value } = payload;
            state[name] = value;
        },
    },
    extraReducers: {
        [getCreators.pending]: (state) => {
            state.isLoading = true;
        },
        [getCreators.fulfilled]: (state, { payload: { total, offset, results } }) => {
            state.isLoading = false;
            if (!results.length) {
                alert('Sorry, nothing was found for your search...');
                return;
            }
            state.total = total;
            state.offset = offset;
            if (!offset) {
                state.items = results;
            } else {
                state.items = [...state.items, ...results];
            }
        },
        [getCreators.rejected]: (state, { payload }) => {
            state.isLoading = false;
            alert(payload?.status || 'Sorry, there was an error');
        },
    },
});

export const { updateValues } = creatorsSlice.actions;
export default creatorsSlice.reducer;
