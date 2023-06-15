"use client"
import React, { useEffect } from "react"

type Props = {}
const getMonthNumber = () => {
  const now: any = new Date()
  return now.getMonth() + 1
}

const Page = (props: Props) => {
  useEffect(() => {
    window.location.replace(`/calendar/month/${getMonthNumber()}`)
  }, [])

  return <div></div>
}

export default Page
