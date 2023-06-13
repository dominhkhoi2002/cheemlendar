import React from "react"
import Link from "next/link"
import "./nav_link.css"
type Props = {
  text: string
  active: boolean
}

const NavLink = (props: Props) => {
  return (
    <Link href={props.text.toLowerCase()} className={`nav-link-${props.active ? "active" : "disable"}`}>
      {props.text}
    </Link>
  )
}

export default NavLink
