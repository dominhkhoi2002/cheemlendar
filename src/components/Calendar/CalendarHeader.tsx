"use client"
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Button from "../Button"
import CalendarNavLink from "./CalendarNavLink"
import "./calendarHeader.css"
import { Popover } from "antd"
const activeNavOptions = ["Day", "Week", "Month", "Year"] as const
type Props = {
  activeNav: (typeof activeNavOptions)[number]
}

const Navbar = (props: Props) => {
  const [uid, setUid] = useState(-1)
  const [avatar, setAvatar] = useState("")

  useEffect(() => {
    if (uid == -1) setUid(localStorage.getItem("uid"))
  }, [])
  useEffect(() => {
    if (uid != -1) setAvatar(`/accounts/Avatar/${uid}.jpg`)
  }, [uid])
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li>
          <CalendarNavLink text="Day" active={props.activeNav == "Day"} />
        </li>
        <li>
          <CalendarNavLink text="Week" active={props.activeNav == "Week"} />
        </li>
        <li>
          <CalendarNavLink text="Month" active={props.activeNav == "Month"} />
        </li>
        <li>
          <CalendarNavLink text="Year" active={props.activeNav == "Year"} />
        </li>
      </ul>

      {/* Buttons */}
      <div className="last-nav-ctn">
        <Button type="secondary" styles={{ padding: "12px 24px" }}>
          <Link href="/">This Week</Link>
        </Button>
        <Button type="primary" styles={{ padding: "12px 24px" }}>
          <Link href="/">+ Add</Link>
        </Button>
        <Popover
          content={
            <div>
              <p>Help</p>
              <Button
                type="secondary"
                styles={{ padding: "0px" }}
                onClick={() => {
                  localStorage.setItem("uid", "-1")
                  window.location.reload()
                }}
              >
                Sign out
              </Button>
            </div>
          }
          trigger="click"
        >
          <Image className="avatar" src={avatar} width={48} height={48} alt="avatar" />
        </Popover>
      </div>
    </div>
  )
}

export default Navbar
