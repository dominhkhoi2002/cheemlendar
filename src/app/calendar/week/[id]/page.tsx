import CalendarMenu from "@/components/Calendar/CalendarMenu"
import WeekCalendar from "@/components/Calendar/WeekCalendar"
import React from "react"
type Props = {
  weekNumber: number
}

const getDaysOfWeek = (weekNumber: number, year: number) => {
  const startDate = new Date()
  startDate.setFullYear(year)
  const firstMonday = startDate.getDate() + ((8 - startDate.getDay()) % 7) + (weekNumber - 1) * 7
  console.log(firstMonday)
  const days = []
  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setFullYear(new Date().getFullYear(), 0, firstMonday + i)
    days.push(date.getDate())
  }
  return days
}

const content = () => {
  return (
    <div>
      <div className="calendar-date-toolbar"></div>
    </div>
  )
}
const Page = (props: Props) => {
  console.log(getDaysOfWeek(25, 2023))
  return (
    <div>
      <CalendarMenu content={content()} activeNav={"Week"}></CalendarMenu>
    </div>
  )
}

export default Page
