"use client"
import React from "react"
import { usePathname } from "next/navigation"
import DayToolbar from "./DayToolbar"
import { FilterOutlined } from "@ant-design/icons"
import "./weekCalendar.css"
import WeekGrid from "./WeekGrid"
type Props = {}

const getDaysOfWeek = (weekNumber: number, year: number): Date[] => {
  const startDate = new Date()
  startDate.setFullYear(year)
  const firstMonday = startDate.getDate() + ((7 - startDate.getDay()) % 7) + (weekNumber - 1) * 7
  const days: Date[] = []
  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setFullYear(new Date().getFullYear(), 0, firstMonday + i)
    days.push(date)
  }
  return days
}

const WeekCalendar = (props: Props) => {
  const path = usePathname()
  return (
    <div className="week-calendar-ctn">
      <div className="week-header">
        <FilterOutlined />
        <DayToolbar dateList={getDaysOfWeek(26, 2023).map((e) => e.getDate())}></DayToolbar>
      </div>
      <div className="grid-view">
        <WeekGrid weekStart={getDaysOfWeek(26, 2023)[0]}></WeekGrid>
      </div>
    </div>
  )
}

export default WeekCalendar
