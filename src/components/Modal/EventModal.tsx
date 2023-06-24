import { ClockCircleOutlined, MenuOutlined } from '@ant-design/icons'
import { Input, TimePicker } from 'antd'
import React from 'react'
import './event_modal.css'
import dayjs from 'dayjs'

const modeOptions = ['create', 'edit'] as const
type Props = {
	activeNav: (typeof modeOptions)[number]
	title: string
	timeStart: Date
	timeEnd: Date
	description: string
}

const EventModal = (props: Props) => {
	return (
		<div>
			<Input className='modalTitle' value={props.title} />
			<ClockCircleOutlined />
			<div className='time-ctn'>
				<div className='date-str'>{props.timeStart.toLocaleString('en-US', { weekday: 'short' })}</div>
				<div className='time-picker'>
					<div>{props.timeStart.toLocaleTimeString('vi-VN')}</div>
					<TimePicker defaultValue={dayjs(props.timeStart.toLocaleTimeString('vi-VN'), 'HH:mm')} format={'HH:mm'} />
					<TimePicker defaultValue={dayjs(props.timeEnd.toLocaleTimeString('vi-VN'), 'HH:mm')} format={'HH:mm'} />
				</div>
			</div>
			<Input placeholder='Add guests' />
			<MenuOutlined />
			<Input placeholder='Add description' value={props.description} />
		</div>
	)
}

export default EventModal
