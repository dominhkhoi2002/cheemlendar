import CalendarMenu from "@/components/Calendar/CalendarMenu"
import WeekCalendar from "@/components/Calendar/Week/WeekCalendar"
import React from "react"
type Props = {
  weekNumber: number
}

const content = () => {
  return (
    <div>
      <WeekCalendar />
    </div>
  )
}
export default function Page(props: Props) {
  return (
    <div>
      <CalendarMenu content={content()} activeNav={"Week"}></CalendarMenu>
    </div>
  )
}
