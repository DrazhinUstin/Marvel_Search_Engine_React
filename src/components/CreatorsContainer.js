import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemsCounter from './ItemsCounter';

const CreatorsContainer = () => {
    const { items, name } = useSelector((state) => state.creators);
    if (!items.length) return null;
    return (
        <>
            <ItemsCounter items={items} />
            <ul className='creators'>
                {items.map(({ id, fullName }) => {
                    const index = fullName.toUpperCase().indexOf(name.trim().toUpperCase());
                    if (~index) {
                        const substr = fullName.slice(index, index + name.trim().length);
                        const beforeSubstr = fullName.slice(0, index);
                        const afterSubstr = fullName.slice(index + substr.length);
                        return (
                            <li key={id}>
                                <Link to={`/creators/${id}`}>
                                    {beforeSubstr}
                                    <span>{substr}</span>
                                    {afterSubstr}
                                </Link>
                            </li>
                        );
                    }
                    return (
                        <li key={id}>
                            <Link to={`/creators/${id}`}>{fullName}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default CreatorsContainer;
