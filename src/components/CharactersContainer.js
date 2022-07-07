import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import ItemsCounter from './ItemsCounter';
import { cutString } from '../utils/helpers';

const CharactersContainer = () => {
    const { items } = useSelector((state) => state.characters);
    if (!items.length) return null;
    return (
        <>
            <ItemsCounter items={items} />
            <div className='characters'>
                {items.map((item) => {
                    const {
                        id,
                        name,
                        description,
                        thumbnail: { path, extension },
                    } = item;
                    return (
                        <article key={id}>
                            <img src={`${path}.${extension}`} alt={name} />
                            <div>
                                <h4>{name}</h4>
                                {description && <p>{cutString(description)}</p>}
                                <Link to={`/characters/${id}`} className='btn'>
                                    view profile
                                </Link>
                            </div>
                        </article>
                    );
                })}
            </div>
        </>
    );
};

export default CharactersContainer;
