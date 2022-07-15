import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSpecificItem, getComics } from '../features/comics/comicsSlice';

const WatchComicsBtn = ({ item, className = 'border-btn blue' }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <button
                className={className}
                onClick={() => {
                    dispatch(setSpecificItem(item));
                    dispatch(getComics());
                    navigate('/comics');
                }}
            >
                watch comics
            </button>
        </div>
    );
};
export default WatchComicsBtn;
