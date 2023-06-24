'use client'
import React, { useEffect, useState } from 'react'
import './weekgrid.css'
import Event from './Event'
import axios from 'axios'
import { Modal } from 'antd'
import EventModal from '@/components/Modal/EventModal'
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
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
	const gridRef = useRef<HTMLDivElement>(null)
	const [onClickCreateEvent, setOnClickCreateEvent] = useState(false)
	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault()
		if (gridRef.current && ['cell', 'hour-line'].includes((event.target as HTMLDivElement).className)) {
			const { left, top } = gridRef.current.getBoundingClientRect()
			const mousePosX = event.clientX - left
			const mousePosY = event.clientY - top + gridRef.current.scrollTop
			setMousePos({ x: mousePosX, y: mousePosY })
			setOnClickCreateEvent(true)
		}
	}

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault()
		if (gridRef.current) {
			const { left, top } = gridRef.current.getBoundingClientRect()
			const mousePosX = event.clientX - left
			const mousePosY = event.clientY - top + gridRef.current.scrollTop
			if (onClickCreateEvent) {
				setNewEventData({
					color_theme: 0,
					weekStart: props.weekStart,
					timeStart: calculateTimeOnPosition(mousePos.x, mousePos.y, props.weekStart),
					timeEnd: calculateTimeOnPosition(mousePosX, mousePosY, props.weekStart),
					category: 0,
					name: '',
					description: '',
				})
			}
		}
	}

	const handleMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault()
		if (gridRef.current) {
			const { left, top } = gridRef.current.getBoundingClientRect()
			const mousePosX = event.clientX - left
			const mousePosY = event.clientY - top + gridRef.current.scrollTop
			if (onClickCreateEvent) {
				let timeStart = calculateTimeOnPosition(mousePos.x, mousePos.y, props.weekStart)
				let timeEnd = calculateTimeOnPosition(mousePosX, mousePosY, props.weekStart)
				console.log(timeStart, timeEnd)
				setModalData(<EventModal mode={'create'} title={''} timeStart={timeStart} timeEnd={timeEnd} description={''} />)
				setNewEventData({
					color_theme: 0,
					weekStart: props.weekStart,
					timeStart: timeStart,
					timeEnd: timeEnd,
					category: 0,
					name: '',
					description: '',
				})
				setIsModalOpen(true)
				setOnClickCreateEvent(false)
			}
		}
	}

	const [modalData, setModalData] = useState(<></>)
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
		<div
			className='grid-view'
			ref={gridRef}
			onMouseDown={(event) => {
				handleMouseDown(event)
			}}
			onMouseUp={(events) => {
				handleMouseUp(events)
			}}
			onMouseMove={(events) => {
				handleMouseMove(events)
			}}>
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
							color_theme={e['color_theme']}
							setIsModalOpen={setIsModalOpen}
							setModalData={setModalData}></Event>
					)
				})}
			<Modal
				style={{ zIndex: 1000 }}
				open={isModalOpen}
				onCancel={() => {
					setIsModalOpen(false)
				}}>
				{modalData}
			</Modal>
		</>
	)
}

export default WeekGrid
