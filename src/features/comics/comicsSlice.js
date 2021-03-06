import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import marvelAPI from '../../utils/marvelAPI';
import { toast } from 'react-toastify';

export const getComics = createAsyncThunk('comics/getComics', async (offset = 0, thunkAPI) => {
    const params = { orderBy: 'modified' };
    const {
        filters: { title, issueNumber, startYear, format, formatType, dateDescriptor, noVariants },
        specificItem,
    } = thunkAPI.getState().comics;
    if (title) params.titleStartsWith = title;
    if (issueNumber) params.issueNumber = issueNumber;
    if (startYear) params.startYear = startYear;
    if (format !== 'all') params.format = format;
    if (formatType !== 'all') params.formatType = formatType;
    if (dateDescriptor !== 'all') params.dateDescriptor = dateDescriptor;
    if (noVariants) params.noVariants = noVariants;
    if (offset) params.offset = offset;
    try {
        const response = await marvelAPI(specificItem ? specificItem.path : 'comics', {
            params,
        });
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const initialFilters = {
    title: '',
    issueNumber: '',
    startYear: '',
    format: 'all',
    formatOptions: [
        'all',
        'comic',
        'magazine',
        'trade paperback',
        'hardcover',
        'digest',
        'graphic novel',
        'digital comic',
        'infinite comic',
    ],
    formatType: 'all',
    formatTypeOptions: ['all', 'comic', 'collection'],
    dateDescriptor: 'all',
    dateDescriptorOptions: ['all', 'lastWeek', 'thisWeek', 'nextWeek', 'thisMonth'],
    noVariants: false,
};

const initialState = {
    isLoading: true,
    areFiltersHidden: true,
    filters: initialFilters,
    offset: 0,
    limit: marvelAPI.defaults.params.limit,
    items: [],
    total: 0,
    specificItem: null,
};

const comicsSlice = createSlice({
    name: 'comics',
    initialState,
    reducers: {
        toggleFilters(state) {
            state.areFiltersHidden = !state.areFiltersHidden;
        },
        updateFilters(state, { payload }) {
            const { name, value } = payload;
            state.filters[name] = value;
        },
        clearFilters(state) {
            state.filters = initialFilters;
        },
        setSpecificItem(state, { payload }) {
            return {
                ...state,
                areFiltersHidden: true,
                filters: initialFilters,
                specificItem: payload || null,
            };
        },
    },
    extraReducers: {
        [getComics.pending]: (state) => {
            state.isLoading = true;
        },
        [getComics.fulfilled]: (state, { payload: { results, total, offset } }) => {
            state.isLoading = false;
            if (!results.length) {
                toast.warning('Sorry, nothing was found for your search...');
                return;
            }
            state.offset = offset;
            state.total = total;
            if (offset) {
                state.items = [...state.items, ...results];
            } else {
                state.items = results;
            }
        },
        [getComics.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload?.status || 'Sorry, there was an error');
        },
    },
});

export const { toggleFilters, updateFilters, clearFilters, setSpecificItem } = comicsSlice.actions;
export default comicsSlice.reducer;
