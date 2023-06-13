import React from "react"
import { MailOutlined } from "@ant-design/icons"
import "./input_field.css"

const options = [1, 2] as const

type Props = {
  setInputValue(value: string): void
  type: (typeof options)[number]
  icon: any
  title: string
  text?: string
  password?: boolean
}

const InputField = (props: Props) => {
  return (
    <div className="inputField">
      {props.type == 1 && (
        <div className="type1InputField">
          <div className="first_icon">{props.icon}</div>
          <div className="field-ctn">
            <div className="tittle-ctn">{props.title}</div>
            <div className="input-ctn">
              {props.password ? (
                <input
                  type="password"
                  className="custom-input-field password-input"
                  placeholder="Enter your password"
                  onChange={(e) => props.setInputValue(e.target.value)}
                ></input>
              ) : (
                <input
                  type="text"
                  className="custom-input-field"
                  placeholder={props.text}
                  onChange={(e) => props.setInputValue(e.target.value)}
                ></input>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InputField
