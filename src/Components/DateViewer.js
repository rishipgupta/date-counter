import React from 'react'

const DateViewer = ({ currentDate }) => {
  return (
    <div>
      <p>My current date is {currentDate.toDateString()}</p>
    </div>
  )
}

export default DateViewer
