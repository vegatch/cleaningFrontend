
const InputEx = ({
    error,
    name,
    type,
    label,
    value,
    onChange,
    onBlur,
}) =>{
    return(
        <div>
            <label>
                {label}
                <input 
                    type={type}
                    name = {name}
                    value = {value}
                    min= {new Date().toISOString().split('T')[0]}
                    onChange = {onChange}
                    onBlur={onBlur}
                    autoComplete="off"
                />
            </label>
            {error && <p>{error}</p>}
        </div>
    )
}

export default InputEx;