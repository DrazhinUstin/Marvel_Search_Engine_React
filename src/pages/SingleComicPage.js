import { useParams, Link } from 'react-router-dom';
import useAxios from '../utils/useAxios';
import { Loading, PageHeader, CrumbTrail, AddToFavoritesBtn } from '../components';
import ErrorPage from '../pages/ErrorPage';
import image from '../assets/characters_3.jpg';

const SingleComicPage = () => {
    const { id } = useParams();
    const { isLoading, isError, data } = useAxios(`comics/${id}`);

    if (isLoading) {
        return (
            <>
                <Loading />
                <PageHeader title='comics area' image={image} position='bottom'>
                    <CrumbTrail title='comics' />
                </PageHeader>
            </>
        );
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
        <>
            <PageHeader title='comics area' image={image} position='bottom'>
                <CrumbTrail title={title} link={{ title: 'comics', path: '/comics' }} />
            </PageHeader>
            <section className='section section-center'>
                <h2 className='section-title'>{title}</h2>
                <div className='single-comic'>
                    <img src={`${path}.${extension}`} alt={title} />
                    <article>
                        {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
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
                                    {items.map(({ resourceURI: source, name }, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                to={`/characters${source.slice(
                                                    source.lastIndexOf('/')
                                                )}`}
                                                className='btn blue'
                                            >
                                                {name}
                                            </Link>
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
                <AddToFavoritesBtn item={{ id, title, thumbnail: { path, extension } }} />
            </section>
        </>
    );
};

export default SingleComicPage;
