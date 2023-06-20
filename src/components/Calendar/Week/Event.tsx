import React from "react"
import "./event.css"
type Props = {
  weekStart: Date
  timeStart: Date
  timeEnd: Date
  category: number
  name: string
}

const colorStyles = [
  {
    //Blue
    bg: "#D1EEFB",
    line: "#0EA5E9",
    text: "#0369A1",
  },
  {
    //Green
    bg: "#E8F8F3",
    line: "#10B981",
    text: "#047857",
  },
  {
    //Red
    bg: "#FFE4E6",
    line: "#F43F5E",
    text: "#BE123C",
  },
  {
    //Purple
    bg: "#EFEAFA",
    line: "#8B5CF6",
    text: "#6D28D9",
  },
]
const formatTime = (date: Date): string => {
  return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
}
const Event = (props: Props) => {
  return (
    <div
      className="event"
      style={{
        top: `${62 * props.timeStart.getHours() + (62 / 60) * props.timeStart.getMinutes()}px`,
        height: `${(62 * (props.timeEnd.getTime() - props.timeStart.getTime())) / 3600000}px`,
        left: `${50 + 141 * (props.timeStart.getDate() - props.weekStart.getDate())}px`,
        background: colorStyles[props.category].bg,
        color: colorStyles[props.category].text,
        borderLeftColor: colorStyles[props.category].line,
      }}
    >
      <div className="task-time">
        {formatTime(props.timeStart)} - {formatTime(props.timeEnd)}
      </div>
      <div className="task-name">{props.name}</div>
    </div>
  )
}

export default Event
