'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import DayToolbar from './DayToolbar'
import { FilterOutlined } from '@ant-design/icons'
import './weekCalendar.css'
import WeekGrid from './WeekGrid'
import { Checkbox, Popover } from 'antd'
import axios from 'axios'
import API_BASE_URL from '@/utils/config'
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
interface Calendar {
	calendar_id: number
	calendar_name: string
}
const WeekCalendar = (props: Props) => {
	const path = usePathname()
	const [dateOfWeek, setDateOfWeek] = useState(getDaysOfWeek(25, 2023))
	const [calendarCategory, setCaledarCategory] = useState<Calendar[] | null>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/calendars/getUserCalendar/${localStorage.getItem('uid')}`)
				if (response.status == 200) {
					setCaledarCategory(response.data)
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	const openFilter = () => {
		return (
			<div>
				{calendarCategory &&
					calendarCategory.map((e) => (
						<div key={e.calendar_id}>
							<Checkbox checked={true}>{e.calendar_name}</Checkbox>
						</div>
					))}
			</div>
		)
	}
	return (
		<div className='week-calendar-ctn'>
			<div className='week-header'>
				<Popover content={openFilter} title='Filter' trigger='click'>
					<FilterOutlined onClick={openFilter} />
				</Popover>

				<DayToolbar dateList={dateOfWeek.map((e) => e.getDate())}></DayToolbar>
			</div>
			<WeekGrid weekStart={dateOfWeek[0]} calendarCategory={calendarCategory}></WeekGrid>
		</div>
	)
}

export default WeekCalendar
