"use client"
import { useRouter } from "next/navigation"
import React from "react"

type Props = {}
const getWeekNumber = () => {
  const now: any = new Date()
  const startOfYear: any = new Date(now.getFullYear(), 0, 1)
  const weekNumber = Math.ceil((now - startOfYear) / 604800000 + 1) + 1
  return weekNumber
}

const Page = (props: Props) => {
  let router = useRouter()
  router.push(`/calendar/week/${getWeekNumber()}`)
  return <div></div>
}

export default Page
