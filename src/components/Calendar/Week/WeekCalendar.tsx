"use client"
import React from "react"
import { usePathname } from "next/navigation"
type Props = {}

const getDaysOfWeek = (weekNumber: number, year: number) => {
  const startDate = new Date()
  startDate.setFullYear(year)
  const firstMonday = startDate.getDate() + ((8 - startDate.getDay()) % 7) + (weekNumber - 1) * 7
  const days = []
  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setFullYear(new Date().getFullYear(), 0, firstMonday + i)
    days.push(date.getDate())
  }
  return days
}

const WeekCalendar = (props: Props) => {
  const path = usePathname()
  return (
    <div>
      {getDaysOfWeek(parseInt(path.split("/")[3]), 2023).map((e) => (
        <h3 key={e}>{e}</h3>
      ))}
    </div>
  )
}

export default WeekCalendar
