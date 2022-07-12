import { useParams, Link } from 'react-router-dom';
import useMarvelAPI from '../utils/useMarvelAPI';
import { Loading, PageHeader, CrumbTrail, AddToFavoritesBtn } from '../components';
import ErrorPage from '../pages/ErrorPage';
import image from '../assets/characters_3.jpg';

const SingleComicPage = () => {
    const { id } = useParams();
    const { isLoading, isError, data } = useMarvelAPI(`comics/${id}`);

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
        characters: { items: characters },
        creators: { items: creators },
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
                        {characters[0] && (
                            <>
                                <h4>characters:</h4>
                                <div className='btn-container'>
                                    {characters.map(({ resourceURI: source, name }, index) => {
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
                        {creators[0] && (
                            <>
                                <h4>creators:</h4>
                                <div className='btn-container'>
                                    {creators.map(({ resourceURI: source, name, role }, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                to={`/creators${source.slice(
                                                    source.lastIndexOf('/')
                                                )}`}
                                                className='btn'
                                            >
                                                {name}, {role}
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
                            view on marvel
                        </a>
                    </article>
                </div>
                <AddToFavoritesBtn item={{ id, title, thumbnail: { path, extension } }} />
            </section>
        </>
    );
};

export default SingleComicPage;
