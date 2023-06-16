import React from "react"
import "./weekgrid.css"
type Props = {}
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
    </>
  )
}

export default WeekGrid
