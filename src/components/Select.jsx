import React from "react";
import '../CSS/select.css'

const SelectItem = ({
  id,
  name,
  required,
  options,
  onChange,
  label,
  type,  
  value,  
  

  error, 
  fieldError,
  fieldCurrent,
  onBlur,
}) => (
  <div className="field-container">
    
    <label htmlFor={id}> {label} </label>
      <select 
          id={id} 
          name={name} 
          onChange={onChange} 
          onBlur={onBlur}
          required={required}>
        <option value='' hidden> Select an option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      { fieldCurrent === name && <p>{error}</p>}
  </div>
);

export default SelectItem;

