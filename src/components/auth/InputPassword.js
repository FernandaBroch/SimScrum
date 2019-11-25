import React from 'react'

const InputPassword = (props) => {
  return (
    <div className="input-field">
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" onChange={props.handleChange} />
    </div>
  )
}
export default (InputPassword)
