import { useParams } from 'react-router-dom';
import useAxios from '../utils/useAxios';
import { Loading } from '../components';
import ErrorPage from '../pages/ErrorPage';

const SingleComicPage = () => {
    const { id } = useParams();
    const { isLoading, isError, data } = useAxios(`comics/${id}`);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <ErrorPage />;
    }

    const {
        thumbnail: { path, extension },
        title,
        description,
        format,
        issueNumber,
        pageCount,
        characters: { items },
        urls: [{ url }],
    } = data.results[0];
    return (
        <section className='section section-center'>
            <h2 className='section-title'>{title}</h2>
            <div className='single-comic'>
                <img src={`${path}.${extension}`} alt={title} />
                <article>
                    {description && <p>{description}</p>}
                    <h4>
                        format: <span>{format}</span>
                    </h4>
                    <h4>
                        issue number: <span>{issueNumber}</span>
                    </h4>
                    {pageCount !== 0 && (
                        <h4>
                            number of pages: <span>{pageCount}</span>
                        </h4>
                    )}
                    {items[0] && (
                        <>
                            <h4>characters:</h4>
                            <div className='btn-container'>
                                {items.map((item, index) => {
                                    return (
                                        <button key={index} className='btn blue'>
                                            {item.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </>
                    )}
                    <a
                        href={url}
                        className='border-btn yellow'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        visit marvel profile
                    </a>
                </article>
            </div>
        </section>
    );
};

export default SingleComicPage;
