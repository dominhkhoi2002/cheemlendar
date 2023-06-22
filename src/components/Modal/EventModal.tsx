import { ClockCircleOutlined, MenuOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'

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
			<Input placeholder='Add guests' />
			<MenuOutlined />
			<Input placeholder='Add description' value={props.description} />
		</div>
	)
}

export default EventModal
