import { useParams } from 'react-router-dom';
import useMarvelAPI from '../utils/useMarvelAPI';
import { Loading, PageHeader, CrumbTrail, WatchComicsBtn } from '../components';
import ErrorPage from './ErrorPage';
import image from '../assets/characters_4.jpg';

const SingleCreatorPage = () => {
    const { id } = useParams();
    const { isLoading, isError, data } = useMarvelAPI(`creators/${id}`);

    if (isLoading) {
        return (
            <>
                <Loading />
                <PageHeader title='creators area' image={image}>
                    <CrumbTrail title='creators' />
                </PageHeader>
            </>
        );
    }

    if (isError) {
        return <ErrorPage />;
    }

    const {
        fullName: name,
        thumbnail: { path, extension },
        comics: { available: comics },
        series: { available: series },
        stories: { available: stories },
        events: { available: events },
        urls: [{ url }],
    } = data.results[0];
    return (
        <>
            <PageHeader title='creators area' image={image}>
                <CrumbTrail title={name} link={{ path: '/creators', title: 'creators' }} />
            </PageHeader>
            <section className='section section-center'>
                <h2 className='section-title'>{name}</h2>
                <div className='single-creator'>
                    <img src={`${path}.${extension}`} alt={name} />
                    <article>
                        <h4>
                            Comics: <span>{comics}</span>
                        </h4>
                        <h4>
                            Series: <span>{series}</span>
                        </h4>
                        <h4>
                            Stories: <span>{stories}</span>
                        </h4>
                        <h4>
                            Events: <span>{events}</span>
                        </h4>
                        <a
                            href={url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='border-btn yellow'
                        >
                            view on marvel
                        </a>
                    </article>
                </div>
                {comics > 0 && (
                    <WatchComicsBtn item={{ id, name, path: `creators/${id}/comics` }} />
                )}
            </section>
        </>
    );
};

export default SingleCreatorPage;
