import React from "react"
import "./dayToolbar.css"
type Props = {
  dateList: number[]
}
const WeekDate = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const DayToolbar = (props: Props) => {
  return (
    <div className="tool-bar-ctn">
      {props.dateList.map((date, id) => (
        <div key={id} className = "tool-bar-date">
          <span style={{ color: "#000" }}>{date}</span> {WeekDate[id]}
        </div>
      ))}
    </div>
  )
}

export default DayToolbar
