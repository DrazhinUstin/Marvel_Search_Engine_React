const ItemsCounter = ({ items }) => {
    return (
        <div className='items-counter'>
            total items: <span>{items.length}</span>
        </div>
    );
};

export default ItemsCounter;
