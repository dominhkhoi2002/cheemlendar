import { ClockCircleOutlined, MenuOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import './event_modal.css'
const modeOptions = ['create', 'edit'] as const
type Props = {
	mode: (typeof modeOptions)[number]
	title: string
	timeStart: Date
	timeEnd: Date
	description: string
}

const EventModal = (props: Props) => {
	return (
		<div>
			<Input className='modalTitle' defaultValue={props.title} placeholder='Add Title' />
			<ClockCircleOutlined />
			<Input placeholder='Add guests' />
			<MenuOutlined />
			<Input.TextArea rows={3} placeholder='Add description' defaultValue={props.description} />
		</div>
	)
}

export default EventModal
