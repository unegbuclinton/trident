'use client'
import React, { useState, useEffect } from 'react'

const FlipClock = ({
  initialDays = 5,
  initialHours = 0,
  initialMinutes = 0,
  initialSeconds = 0,
}) => {
  // State to hold the remaining time in seconds
  const [time, setTime] = useState(
    initialDays * 24 * 60 * 60 +
      initialHours * 60 * 60 +
      initialMinutes * 60 +
      initialSeconds
  )

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`
  }

  const days = formatTime(Math.floor(time / (24 * 60 * 60)))
  const hours = formatTime(Math.floor((time % (24 * 60 * 60)) / (60 * 60)))
  const minutes = formatTime(Math.floor((time % (60 * 60)) / 60))
  const seconds = formatTime(time % 60)

  return (
    <div className='flex gap-2.5 justify-center lg:justify-end lg:mb-[140px] z-10'>
      <div className='container-segment'>
        <div className='segment-title'>Days</div>
        <div className='segment'>
          <div className='flip-card'>
            <div className='top'>{days[0]}</div>
            <div className='bottom'>{days[0]}</div>
          </div>
          <div className='flip-card'>
            <div className='top'>{days[1]}</div>
            <div className='bottom'>{days[1]}</div>
          </div>
        </div>
      </div>
      <div className='container-segment'>
        <div className='segment-title'>Hours</div>
        <div className='segment'>
          <div className='flip-card'>
            <div className='top'>{hours[0]}</div>
            <div className='bottom'>{hours[0]}</div>
          </div>
          <div className='flip-card'>
            <div className='top'>{hours[1]}</div>
            <div className='bottom'>{hours[1]}</div>
          </div>
        </div>
      </div>
      <div className='container-segment'>
        <div className='segment-title'>Minutes</div>
        <div className='segment'>
          <div className='flip-card'>
            <div className='top'>{minutes[0]}</div>
            <div className='bottom'>{minutes[0]}</div>
          </div>
          <div className='flip-card'>
            <div className='top'>{minutes[1]}</div>
            <div className='bottom'>{minutes[1]}</div>
          </div>
        </div>
      </div>
      <div className='container-segment'>
        <div className='segment-title'>Seconds</div>
        <div className='segment'>
          <div className='flip-card'>
            <div className='top'>{seconds[0]}</div>
            <div className='bottom'>{seconds[0]}</div>
          </div>
          <div className='flip-card'>
            <div className='top'>{seconds[1]}</div>
            <div className='bottom'>{seconds[1]}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipClock
