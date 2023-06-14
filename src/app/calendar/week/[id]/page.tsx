import CalendarMenu from "@/components/Calendar/CalendarMenu"
import React from "react"

type Props = {}

const content = () => {
  return <div>Hello</div>
}
const page = (props: Props) => {
  return (
    <div>
      <CalendarMenu content={content()} activeNav={"Week"}></CalendarMenu>
    </div>
  )
}

export default page
