// import { useEffect } from 'react';
import React from 'react';
import './input.css';


const Input = ({
  error,
  name,
  type,
  label,
  value,
  onChange,
  onBlur,
  fieldCurrent,

}) =>{

  // const [currentField, setCurrentField] = React.useState(false);

  const handleFocus = (e) => {
    return error = ''
  }

  

  
  return(
      <div className="field-container">
          <label>
              {label}
              <input 
                  type={type}
                  name = {name}
                  value = {value}
                  min= {new Date().toISOString().split('T')[0]}
                  onChange = {onChange}
                  onBlur={onBlur}
                  onFocus = {handleFocus}
                  autoComplete="off"
              />
          </label>
          { fieldCurrent === name && <p>{error}</p>}
      </div>
  )
}

export default Input;