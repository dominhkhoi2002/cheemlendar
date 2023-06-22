import CalendarMenu from "@/components/Calendar/CalendarMenu"
import WeekCalendar from "@/components/Calendar/Week/WeekCalendar"
import React from "react"

const content = () => {
  return <div>{<WeekCalendar />}</div>
}
export default function Page() {
  return (
    <div>
      <CalendarMenu content={content()} activeNav={"Week"}></CalendarMenu>
    </div>
  )
}
