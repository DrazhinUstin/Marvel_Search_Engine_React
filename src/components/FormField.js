const FormField = ({ label, type, name, value, onChange, placeholder, options }) => {
    if (type === 'checkbox') {
        return (
            <div className='form-field checkbox'>
                <input type={type} id={name} name={name} value={value} onChange={onChange} />
                <label htmlFor={name}>{label || name}</label>
            </div>
        );
    }
    return (
        <div className='form-field'>
            <label htmlFor={name}>{label || name}</label>
            {!options ? (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : (
                <select id={name} name={name} value={value} onChange={onChange}>
                    {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                    })}
                </select>
            )}
        </div>
    );
};

export default FormField;
