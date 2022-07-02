import { HeroSlider, Accordion } from '../components';
import { images, faqData } from '../utils/localData';

const HomePage = () => {
    return (
        <>
            <HeroSlider data={images} />
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
