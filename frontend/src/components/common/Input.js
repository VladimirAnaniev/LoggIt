import React from 'react'
import PropTypes from 'prop-types'

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default function Input ({type = 'text', name, placeholder, value, onChange}) {
  return (
    <div>
      <label htmlFor={name}>{placeholder} </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange} />
    </div>
  )
}