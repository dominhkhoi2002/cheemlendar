import { ClockCircleOutlined, MenuOutlined, TeamOutlined, CalendarOutlined } from '@ant-design/icons'
import { Divider, Input, Select, TimePicker } from 'antd'
import React, { useEffect, useState } from 'react'
import './event_modal.css'
import dayjs, { Dayjs } from 'dayjs'

const modeOptions = ['create', 'edit'] as const
type Props = {
	calendarCategory: any
	mode: (typeof modeOptions)[number]
	title: string
	timeStart: Date
	timeEnd: Date
	description: string
	category: number | null
}

const EventModal = (props: Props) => {
	const [timeStart, setTimeStart] = useState<Dayjs | null>(null)
	const [timeEnd, setTimeEnd] = useState<Dayjs | null>(null)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [category, setCategory] = useState(-1)
	useEffect(() => {
		setTimeStart(dayjs(props.timeStart))
		setTimeEnd(dayjs(props.timeEnd))
		setTitle('')
		setDescription('')
	}, [props.timeStart, props.timeEnd])

	const onChangeStart = (value: Dayjs | null) => {
		setTimeStart(value)
	}

	const onChangeEnd = (value: Dayjs | null) => {
		setTimeEnd(value)
	}
	return (
		<div>
			<Input className='modalTitle' placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)} />
			<Divider className='title-divider' />
			<div className='time-ctn'>
				<ClockCircleOutlined />
				<div className='date-str'>{props.timeStart.toLocaleString('en-US', { weekday: 'short', day: 'numeric' })}</div>
				<div className='time-picker'>
					<TimePicker className='tp' value={timeStart} onChange={onChangeStart} format={'HH:mm'} minuteStep={5} />
					<div>ー</div>
					<TimePicker className='tp' value={timeEnd} onChange={onChangeEnd} format={'HH:mm'} minuteStep={5} />
				</div>
			</div>
			<div className='team-ctn'>
				<TeamOutlined />
				<Input placeholder='Add guests' />
			</div>
			<div className='calendar-select-ctn'>
				<CalendarOutlined />
				<Select
					showSearch
					placeholder='Select Calendar'
					onChange={(value) => {
						setCategory(value)
					}}
					options={[
						{ value: 0, label: 'Add new' },
						...props.calendarCategory.map((e: any) => {
							e.value = e.calendar_id
							e.label = e.calendar_name
							return e
						}),
					]}
				/>
				{category === 0 && <Input placeholder='New category Name' />}
			</div>
			<div className='description-ctn'>
				<MenuOutlined style={{ paddingTop: '5px' }} />
				<Input.TextArea
					rows={3}
					placeholder='Add description'
					defaultValue={props.description}
					value={description}
					onChange={(e) => {
						setDescription(e.target.value)
					}}
				/>
			</div>
		</div>
	)
}

export default EventModal
