import { PageHeader, CrumbTrail } from '../components';

const ErrorPage = () => {
    return (
        <PageHeader title='page not found' position='top' link={{ title: 'back home', path: '/' }}>
            <CrumbTrail title='404' />
        </PageHeader>
    );
};

export default ErrorPage;
