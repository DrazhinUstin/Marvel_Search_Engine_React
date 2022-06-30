import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateValues, getCharacters } from '../features/characters/charactersSlice';
import { Loading, PageHeader, CrumbTrail, CharactersContainer, LoadMoreBtn } from '../components';
import { FaSearch } from 'react-icons/fa';

const CharactersPage = () => {
    const { isLoading, name, offset, limit, items, total } = useSelector(
        (state) => state.characters
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (items.length) return;
        dispatch(getCharacters('characters'));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        dispatch(getCharacters(`characters?nameStartsWith=${name}`));
    };

    const handleClick = () => {
        dispatch(
            getCharacters(
                `characters?${name ? `nameStartsWith=${name}&` : ''}offset=${offset + limit}`
            )
        );
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(updateValues({ name, value }));
    };

    return (
        <>
            {isLoading && <Loading />}
            <PageHeader title='heroes area'>
                <CrumbTrail title='heroes' />
            </PageHeader>
            <section className='section section-center'>
                <form className='form-flex' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Hero name starts with...'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                    <button type='submit' className='btn'>
                        <FaSearch />
                    </button>
                </form>
                <CharactersContainer />
                {total > items.length && <LoadMoreBtn onClick={handleClick} />}
            </section>
        </>
    );
};

export default CharactersPage;
