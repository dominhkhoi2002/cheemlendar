import React, { useRef, useState } from 'react'
import { Popover, Divider, Button } from 'antd'
import './event.css'
import { ClockCircleTwoTone, DeleteTwoTone, EditTwoTone } from '@ant-design/icons'
import EventModal from '@/components/Modal/EventModal'
type Props = {
	color_theme: number
	key?: any
	weekStart: Date
	timeStart: Date
	timeEnd: Date
	category: number | null
	name: string
	description: string
	setIsModalOpen: any
	setModalData: any
}

const colorStyles = [
	{
		//Blue
		bg: '#D1EEFB',
		line: '#0EA5E9',
		text: '#0369A1',
	},
	{
		//Green
		bg: '#E8F8F3',
		line: '#10B981',
		text: '#047857',
	},
	{
		//Red
		bg: '#FFE4E6',
		line: '#F43F5E',
		text: '#BE123C',
	},
	{
		//Purple
		bg: '#EFEAFA',
		line: '#8B5CF6',
		text: '#6D28D9',
	},
]
const formatTime = (date: Date): string => {
	return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}
const Event = (props: Props) => {
	function event_content(props: Props) {
		return (
			<div className='custom-pop-over'>
				<div className='popover-title' style={{ color: colorStyles[props.color_theme].text }}>
					{props.name}
				</div>
				<Divider style={{ backgroundColor: colorStyles[props.color_theme].line, margin: '0' }} />
				<div className='pop-over-info'>
					<div className='popover-time' style={{ color: colorStyles[props.color_theme].text }}>
						<ClockCircleTwoTone /> {formatTime(props.timeStart)} - {formatTime(props.timeEnd)}
					</div>
				</div>
				<div className='description'>{props.description}</div>
				<div className='popover-btn-ctn'>
					<DeleteTwoTone twoToneColor={'#FF4545'} style={{ cursor: 'pointer' }} />
					<EditTwoTone
						style={{ cursor: 'pointer' }}
						onClick={() => {
							props.setIsModalOpen(true)
							props.setModalData(
								<EventModal
									mode={'edit'}
									title={props.name}
									timeStart={props.timeStart}
									timeEnd={props.timeEnd}
									description={props.description}
									category={props.category}
									calendarCategory={null}
								/>,
							)
						}}
					/>
				</div>
			</div>
		)
	}

	return (
		<Popover content={event_content(props)} trigger={'click'} color={'#F5F5F5'} zIndex={998}>
			<div
				key={props.key}
				className='event'
				style={{
					top: `${62 * props.timeStart.getHours() + (62 / 60) * props.timeStart.getMinutes()}px`,
					height: `${(62 * (props.timeEnd.getTime() - props.timeStart.getTime())) / 3600000}px`,
					left: `${50 + 141 * (props.timeStart.getDate() - props.weekStart.getDate())}px`,
					background: colorStyles[props.color_theme].bg,
					color: colorStyles[props.color_theme].text,
					borderLeftColor: colorStyles[props.color_theme].line,
				}}>
				<div className='task-time'>
					{formatTime(props.timeStart)} - {formatTime(props.timeEnd)}
				</div>
				<div className='task-name'>{props.name}</div>
			</div>
		</Popover>
	)
}

export default Event
