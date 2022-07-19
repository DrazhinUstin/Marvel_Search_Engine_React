import { Link } from 'react-router-dom';
import ItemsCounter from './ItemsCounter';

const ComicsContainer = ({ items, counter = true }) => {
    if (!items.length) return null;
    return (
        <>
            {counter && <ItemsCounter items={items} />}
            <div className='comics'>
                {items.map((item, index) => {
                    const {
                        id,
                        title,
                        thumbnail: { path, extension },
                    } = item;
                    return (
                        <article key={index}>
                            <img src={`${path}.${extension}`} alt={title} />
                            <footer>
                                <div>
                                    <h4>{title}</h4>
                                    <Link to={`/comics/${id}`} className='btn'>
                                        watch
                                    </Link>
                                </div>
                            </footer>
                        </article>
                    );
                })}
            </div>
        </>
    );
};

export default ComicsContainer;
