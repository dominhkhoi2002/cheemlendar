"use client"
import { usePathname } from "next/navigation"
import React, { useEffect } from "react"

type Props = {}
const getDayNumber = () => {
  const now: any = new Date()
  const startOfYear: any = new Date(now.getFullYear(), 0, 1)
  const dayNumber = Math.ceil((now - startOfYear) / 86400000 + 1)
  return dayNumber
}

const Page = (props: Props) => {
  const pathname = usePathname()

  useEffect(() => {
    window.location.replace(`/calendar/day/${getDayNumber()}`)
  }, [])

  return <div></div>
}

export default Page
