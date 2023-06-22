'use client'
import React, { useEffect, useState } from 'react'
import './weekgrid.css'
import Event from './Event'
import axios from 'axios'
type Props = {
	weekStart: Date
}
const API_BASE_URL = 'http://localhost:4001/api'
const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	'Content-Type': 'application/json',
}
const Line = (hour: number) => {
	return (
		<>
			<div className='hour-display'>{`${((hour - 1) % 12) + 1} ${hour > 11 ? 'PM' : 'AM'}`}</div>
			<div className='hour-line'>
				{Array.from(Array(7).keys()).map((e, id) => (
					<div key={id} className='cell'></div>
				))}
			</div>
		</>
	)
}
const WeekGrid = (props: Props) => {
	const [events, setEvents] = useState([])
	useEffect(() => {
		const getEvents = async (weekStart: Date) => {
			try {
				let tmpDate = weekStart.getDate() + 7
				let endDate = new Date(weekStart)
				endDate.setDate(tmpDate)
				const response = await axios.post(
					`${API_BASE_URL}/events/getAllEvents`,
					{
						userId: '1',
						start_date: weekStart.toISOString().split('T')[0],
						end_date: endDate.toISOString().split('T')[0],
					},
					{ headers },
				)
				setEvents(response.data)
			} catch (error) {
				throw new Error('Error retrieving data')
			}
		}
		getEvents(props.weekStart)
	}, [])
	return (
		<>
			{Array.from(Array(24).keys()).map((e, id) => (
				<div key={id} className='line'>
					{Line(id)}
				</div>
			))}
			{events &&
				events.map((e) => {
					return (
						<Event
							key={e['event_id']}
							weekStart={props.weekStart}
							timeStart={new Date(e['start_datetime'])}
							timeEnd={new Date(e['end_datetime'])}
							category={e['color_theme']}
							name={e['event_title']}
							description={e['description']}
							color_theme={e['color_theme']}></Event>
					)
				})}
		</>
	)
}

export default WeekGrid
