import React from "react"
import "./button.css"

type Props = {
  children?: any
  type?: string
  onClick?: any
  disabled?: boolean
  htmlType?: any
  styles?: object
}

const Button = (props: Props) => {
  return (
    <button
      className={`custom-btn-${props.type}`}
      style={props.styles}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.htmlType}
    >
      {props.children}
    </button>
  )
}

export default Button
