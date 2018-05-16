import React from 'react'

const Button = (props) => (
    <button onClick={props.func}>{props.text}</button>
)

export default Button
