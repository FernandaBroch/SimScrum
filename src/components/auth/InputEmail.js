import React from 'react'

const InputEmail = (props) => {
  return (
    <div className="input-field" >
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={props.handleChange} />
    </div>
  )
}
export default (InputEmail)
