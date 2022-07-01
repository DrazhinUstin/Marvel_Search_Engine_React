import { Accordion } from '../components';
import { faqData } from '../utils/localData';

const HomePage = () => {
    return (
        <>
            <section className='section section-center'>
                <div className='section-title'>
                    <h2>FAQ</h2>
                </div>
                <Accordion data={faqData} />
            </section>
        </>
    );
};

export default HomePage;
