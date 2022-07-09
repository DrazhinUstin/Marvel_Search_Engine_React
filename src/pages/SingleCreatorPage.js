import { useParams } from 'react-router-dom';
import useAxios from '../utils/useAxios';
import { Loading, PageHeader, CrumbTrail } from '../components';
import ErrorPage from './ErrorPage';
import image from '../assets/characters_4.jpg';

const SingleCreatorPage = () => {
    const { id } = useParams();
    const { isLoading, isError, data } = useAxios(`creators/${id}`);

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
        fullName,
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
                <CrumbTrail title={fullName} link={{ path: '/creators', title: 'creators' }} />
            </PageHeader>
            <section className='section section-center'>
                <h2 className='section-title'>{fullName}</h2>
                <div className='single-creator'>
                    <img src={`${path}.${extension}`} alt={fullName} />
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
                            visit marvel profile
                        </a>
                    </article>
                </div>
            </section>
        </>
    );
};

export default SingleCreatorPage;