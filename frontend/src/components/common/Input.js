import React from 'react'

export default function Input (props) {
  let type = props.type || 'text'
  return (
    <div>
      <label htmlFor={props.name}>{props.placeholder} </label>
      <input
        type={type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange} />
    </div>
  )
}