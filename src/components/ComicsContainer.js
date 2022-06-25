import { useSelector } from 'react-redux';
import ItemsCounter from './ItemsCounter';

const ComicsContainer = () => {
    const { items } = useSelector((state) => state.comics);
    if (!items.length) return null;
    return (
        <>
            <ItemsCounter items={items} />
            <div className='comics'>
                {items.map((item) => {
                    const {
                        id,
                        title,
                        thumbnail: { path, extension },
                    } = item;
                    return (
                        <article key={id}>
                            <img src={`${path}.${extension}`} alt={title} />
                            <footer>
                                <div>
                                    <h4>{title}</h4>
                                    <button className='btn'>watch</button>
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
