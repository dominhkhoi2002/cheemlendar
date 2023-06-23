'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}
const getWeekNumber = () => {
	const now: any = new Date()
	const startOfYear: any = new Date(now.getFullYear(), 0, 1)
	const weekNumber = Math.ceil((now - startOfYear) / 604800000 + 1) + 1
	return weekNumber
}

const Page = (props: Props) => {
	const router = useRouter()
	useEffect(() => {
		if (typeof window !== 'undefined') {
			router.push(`/calendar/week/${getWeekNumber()}`)
		}
	}, [])
	return <div></div>
}

export default Page
