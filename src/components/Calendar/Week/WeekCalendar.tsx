"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import DayToolbar from "./DayToolbar"
import { FilterOutlined } from "@ant-design/icons"
import "./weekCalendar.css"
import WeekGrid from "./WeekGrid"
type Props = {}

const getDaysOfWeek = (weekNumber: number, year: number): Date[] => {
  const firstDayOfYear = new Date(year, 0, 1)
  const daysToAdd = (weekNumber - 1) * 7
  const startDate = new Date(firstDayOfYear)
  startDate.setDate(firstDayOfYear.getDate() + daysToAdd)
  const daysOfWeek: Date[] = []
  for (let i = 1; i <= 7; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    daysOfWeek.push(date)
  }
  return daysOfWeek
}

const WeekCalendar = (props: Props) => {
  const path = usePathname()
  const [dateOfWeek, setDateOfWeek] = useState(getDaysOfWeek(25, 2023))
  return (
    <div className="week-calendar-ctn">
      <div className="week-header">
        <FilterOutlined />
        <DayToolbar dateList={dateOfWeek.map((e) => e.getDate())}></DayToolbar>
      </div>
      <div className="grid-view">
        <WeekGrid weekStart={dateOfWeek[0]}></WeekGrid>
      </div>
    </div>
  )
}

export default WeekCalendar
