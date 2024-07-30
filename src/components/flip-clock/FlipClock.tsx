'use client'
import React, { useState, useEffect } from 'react'

const FlipClock = () => {
  // State to hold the current time
  const [time, setTime] = useState(new Date())

  // Effect to update the time every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timerId) // Cleanup the timer on unmount
  }, [])

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`
  }

  // Extract hours, minutes, and seconds from the current time
  const hours = formatTime(time.getHours())
  const minutes = formatTime(time.getMinutes())
  const seconds = formatTime(time.getSeconds())

  return (
    <div className='container'>
      <div className='container-segment'>
        <div className='segment-title'>Hours</div>
        <div className='segment'>
          <div className='flip-card' data-hours-tens>
            <div className='top'>{hours[0]}</div>
            <div className='bottom'>{hours[0]}</div>
          </div>
          <div className='flip-card' data-hours-ones>
            <div className='top'>{hours[1]}</div>
            <div className='bottom'>{hours[1]}</div>
          </div>
        </div>
      </div>
      <div className='container-segment'>
        <div className='segment-title'>Minutes</div>
        <div className='segment'>
          <div className='flip-card' data-minutes-tens>
            <div className='top'>{minutes[0]}</div>
            <div className='bottom'>{minutes[0]}</div>
          </div>
          <div className='flip-card' data-minutes-ones>
            <div className='top'>{minutes[1]}</div>
            <div className='bottom'>{minutes[1]}</div>
          </div>
        </div>
      </div>
      <div className='container-segment'>
        <div className='segment-title'>Seconds</div>
        <div className='segment'>
          <div className='flip-card' data-seconds-tens>
            <div className='top'>{seconds[0]}</div>
            <div className='bottom'>{seconds[0]}</div>
          </div>
          <div className='flip-card' data-seconds-ones>
            <div className='top'>{seconds[1]}</div>
            <div className='bottom'>{seconds[1]}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipClock
