const LoadMoreBtn = ({ onClick }) => {
    return (
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <button className='border-btn' onClick={onClick}>
                load more
            </button>
        </div>
    );
};

export default LoadMoreBtn;
