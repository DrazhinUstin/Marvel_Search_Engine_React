import { useParams } from 'react-router-dom';
import useAxios from '../utils/useAxios';
import { Loading, PageHeader, CrumbTrail } from '../components';
import ErrorPage from './ErrorPage';

const SingleCharacterPage = () => {
    const { id } = useParams();
    const { isLoading, isError, data } = useAxios(`characters/${id}`);

    if (isLoading) {
        return (
            <>
                <Loading />
                <PageHeader title='heroes area'>
                    <CrumbTrail title='heroes' />
                </PageHeader>
            </>
        );
    }

    if (isError) {
        return <ErrorPage />;
    }

    const {
        name,
        description,
        thumbnail: { path, extension },
        comics: { available: comics },
        series: { available: series },
        stories: { available: stories },
        events: { available: events },
        urls: [{ url }],
    } = data.results[0];
    return (
        <>
            <PageHeader title='heroes area'>
                <CrumbTrail title={name} link={{ path: '/characters', title: 'heroes' }} />
            </PageHeader>
            <section className='section section-center'>
                <h2 className='section-title'>{name}</h2>
                <div className='single-character'>
                    <img src={`${path}.${extension}`} alt={name} />
                    <article>
                        {description && <p>{description}</p>}
                        <h4>
                            comics: <span>{comics}</span>
                        </h4>
                        <h4>
                            series: <span>{series}</span>
                        </h4>
                        <h4>
                            stories: <span>{stories}</span>
                        </h4>
                        <h4>
                            events: <span>{events}</span>
                        </h4>
                        <a
                            href={url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='border-btn yellow'
                        >
                            visit marvel profile
                        </a>
                    </article>
                </div>
            </section>
        </>
    );
};

export default SingleCharacterPage;
