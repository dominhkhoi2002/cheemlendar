import React from "react"
import Link from "next/link"
import "./calendarNavLink.css"
type Props = {
  text: string
  active: boolean
}

const CalendarNavLink = (props: Props) => {
  return (
    <Link href={props.text.toLowerCase()} className={`nav-link-${props.active ? "active" : "disable"}`}>
      {props.text}
    </Link>
  )
}

export default CalendarNavLink
