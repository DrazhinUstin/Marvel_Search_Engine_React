import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateValues, getCreators } from '../features/creators/creatorsSlice';
import { Loading, PageHeader, CrumbTrail, CreatorsContainer, LoadMoreBtn } from '../components';
import { FaSearch } from 'react-icons/fa';
import image from '../assets/characters_4.jpg';

const CreatorsPage = () => {
    const { isLoading, name, items, total, offset, limit } = useSelector((state) => state.creators);
    const dispatch = useDispatch();

    useEffect(() => {
        if (items.length) return;
        dispatch(getCreators());
    }, [items, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        dispatch(getCreators());
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(updateValues({ name, value }));
    };

    return (
        <>
            {isLoading && <Loading />}
            <PageHeader title='creators area' image={image}>
                <CrumbTrail title='creators' />
            </PageHeader>
            <section className='section section-center'>
                <form className='form-flex' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={handleChange}
                        placeholder='Enter the name of the creator'
                        required
                    />
                    <button type='submit' className='btn'>
                        <FaSearch />
                    </button>
                </form>
                <CreatorsContainer />
                {total > items.length && (
                    <LoadMoreBtn onClick={() => dispatch(getCreators(offset + limit))} />
                )}
            </section>
        </>
    );
};

export default CreatorsPage;
