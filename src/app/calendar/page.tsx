"use client"
import { usePathname } from "next/navigation"
import React, { useEffect } from "react"

type Props = {}
const getWeekNumber = () => {
  const now: any = new Date()
  const startOfYear: any = new Date(now.getFullYear(), 0, 1)
  const weekNumber = Math.ceil((now - startOfYear) / 604800000 + 1)
  return weekNumber
}

const Page = (props: Props) => {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/calendar") {
      window.location.replace(`/calendar/week/${getWeekNumber()}`)
    }
  }, [])

  return <div></div>
}

export default Page
