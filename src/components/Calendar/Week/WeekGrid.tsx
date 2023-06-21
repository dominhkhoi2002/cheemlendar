import React from "react"
import "./weekgrid.css"
import Event from "./Event"
type Props = {
  weekStart: Date
}
const Line = (hour: number) => {
  return (
    <>
      <div className="hour-display">{`${((hour - 1) % 12) + 1} ${hour > 11 ? "PM" : "AM"}`}</div>
      <div className="hour-line">
        {Array.from(Array(7).keys()).map((e, id) => (
          <div key={id} className="cell"></div>
        ))}
      </div>
    </>
  )
}
const WeekGrid = (props: Props) => {
  return (
    <>
      {Array.from(Array(24).keys()).map((e, id) => (
        <div key={id} className="line">
          {Line(id)}
        </div>
      ))}
      <Event
        weekStart={props.weekStart}
        timeStart={new Date("2023-07-19 11:13:00")}
        timeEnd={new Date("2023-07-19 13:13:00")}
        category={0}
        name={"Hello"}
      ></Event>
      <Event
        weekStart={props.weekStart}
        timeStart={new Date("2023-07-23 10:13:00")}
        timeEnd={new Date("2023-07-23 14:25:00")}
        category={1}
        name={"Hello"}
      ></Event>
      <Event
        weekStart={props.weekStart}
        timeStart={new Date("2023-07-24 06:00:00")}
        timeEnd={new Date("2023-07-24 08:20:00")}
        category={2}
        name={"Hello"}
      ></Event>
      <Event
        weekStart={props.weekStart}
        timeStart={new Date("2023-07-24 10:00:00")}
        timeEnd={new Date("2023-07-24 12:20:00")}
        category={3}
        name={"Hello"}
      ></Event>
    </>
  )
}

export default WeekGrid
