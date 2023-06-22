"use client"
import React, { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import InputField from "@/components/InputField"
import "../ForgotPassword/forgot.css"
import "./change.css"
import { KeyOutlined } from "@ant-design/icons"
import Link from "next/link"
import Button from "@/components/Button"
import ModalContainer from "@/components/Modal/ModalContainer"
type Props = {}

const ChangePassword = (props: Props) => {
  const [password, setPassword] = useState("")
  const [Copassword, setCoPassword] = useState("")
  return (
    <div>
      <div>
        <Navbar activeNav="home" />
      </div>
      <div className="page">
        <div className="change-form">
          <div className="forgot-text">Reset password</div>
          <div className="forgot-input-field">
            <InputField
              icon={<KeyOutlined style={{ fontSize: "16px" }} />}
              type={1}
              title={"Password"}
              password={true}
              setInputValue={setPassword}
            />
            <InputField
              icon={<KeyOutlined style={{ fontSize: "16px" }} />}
              type={1}
              title={"Confirm Password"}
              password={true}
              setInputValue={setCoPassword}
            />
          </div>
          <div className="bottom-form-ctn-row">
            <Link className={"cancel-button-ctn"} href={"forgot-password"}>
              Hủy
            </Link>
            <div className="forgot-button-ctn">
              <ModalContainer
                text="Change"
                location="/login"
                notification="Are you sure about that"
                messenger="Password has been changed, return to the login page."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
