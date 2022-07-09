const LoadMoreBtn = ({ className = 'border-btn', onClick }) => {
    return (
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <button className={className} onClick={onClick}>
                load more
            </button>
        </div>
    );
};

export default LoadMoreBtn;
