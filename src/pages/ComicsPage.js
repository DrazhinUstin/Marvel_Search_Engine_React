import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTimesCircle } from 'react-icons/fa';
import {
    getComics,
    toggleFilters,
    updateFilters,
    clearFilters,
    setSpecificItem,
} from '../features/comics/comicsSlice';
import {
    Loading,
    PageHeader,
    CrumbTrail,
    FormField,
    ComicsContainer,
    LoadMoreBtn,
} from '../components';
import image from '../assets/characters_3.jpg';

const ComicsPage = () => {
    const { isLoading, areFiltersHidden, filters, offset, limit, items, total, specificItem } =
        useSelector((state) => state.comics);
    const dispatch = useDispatch();

    useEffect(() => {
        if (items.length || specificItem) return;
        dispatch(getComics());
    }, [items, specificItem, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getComics());
    };

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }
        dispatch(updateFilters({ name, value }));
    };

    return (
        <>
            {isLoading && <Loading />}
            <PageHeader title='comics area' image={image} position='bottom'>
                <CrumbTrail title='comics' />
            </PageHeader>
            <section className='section section-center'>
                {specificItem && (
                    <div style={{ marginBottom: '4rem' }}>
                        <button
                            className='btn flex blue'
                            onClick={() => {
                                dispatch(setSpecificItem(null));
                                dispatch(getComics());
                            }}
                        >
                            <FaTimesCircle />
                            {specificItem.name}
                        </button>
                    </div>
                )}
                <div style={{ marginBottom: '4rem' }}>
                    <button className='border-btn blue' onClick={() => dispatch(toggleFilters())}>
                        {areFiltersHidden ? 'show filters' : 'hide filters'}
                    </button>
                </div>
                <form className={`form ${areFiltersHidden && 'hide'}`} onSubmit={handleSubmit}>
                    <FormField
                        label='Enter the title of the comic:'
                        type='text'
                        name='title'
                        value={filters.title}
                        onChange={handleChange}
                        placeholder='Comic title starts with...'
                    />
                    <FormField
                        label='Enter the issue number of the comic:'
                        type='number'
                        name='issueNumber'
                        value={filters.issueNumber}
                        onChange={handleChange}
                        placeholder='666'
                    />
                    <FormField
                        label='Enter the start year of the comic:'
                        type='number'
                        name='startYear'
                        value={filters.startYear}
                        onChange={handleChange}
                        placeholder='2022'
                    />
                    <FormField
                        label='Comic format:'
                        name='format'
                        value={filters.format}
                        onChange={handleChange}
                        options={filters.formatOptions}
                    />
                    <FormField
                        label='Comic format type:'
                        name='formatType'
                        value={filters.formatType}
                        onChange={handleChange}
                        options={filters.formatTypeOptions}
                    />
                    <FormField
                        label='Date descriptor:'
                        name='dateDescriptor'
                        value={filters.dateDescriptor}
                        onChange={handleChange}
                        options={filters.dateDescriptorOptions}
                    />
                    <FormField
                        label='Exclude variant comics from the result set'
                        type='checkbox'
                        name='noVariants'
                        value={filters.noVariants}
                        onChange={handleChange}
                    />
                    <div className='btn-container'>
                        <button type='submit' className='border-btn blue'>
                            apply filters
                        </button>
                        <button
                            type='button'
                            className='border-btn'
                            onClick={() => dispatch(clearFilters())}
                        >
                            clear filters
                        </button>
                    </div>
                </form>
                <ComicsContainer items={items} />
                {total > items.length && (
                    <LoadMoreBtn onClick={() => dispatch(getComics(offset + limit))} />
                )}
            </section>
        </>
    );
};

export default ComicsPage;
