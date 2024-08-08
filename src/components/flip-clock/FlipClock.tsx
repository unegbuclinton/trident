'use client'
import React, { useState, useEffect } from 'react'

const FlipClock = () => {
  const calculateEndDate = () => {
    const endDate = new Date('2024-08-26T00:00:00')
    return endDate.getTime()
  }

  const getSavedEndDate = () => {
    const savedEndDate = localStorage.getItem('countdownEndDate')
    return savedEndDate ? parseInt(savedEndDate, 10) : calculateEndDate()
  }

  const [endDate, setEndDate] = useState(getSavedEndDate())
  const [time, setTime] = useState(() =>
    Math.max(0, Math.floor((endDate - new Date().getTime()) / 1000))
  )

  useEffect(() => {
    if (!localStorage.getItem('countdownEndDate')) {
      localStorage.setItem('countdownEndDate', endDate.toString())
    }

    const timerId = setInterval(() => {
      const currentTime = new Date().getTime()
      const remainingTime = Math.max(
        0,
        Math.floor((endDate - currentTime) / 1000)
      )
      setTime(remainingTime)

      if (remainingTime <= 0) {
        clearInterval(timerId)
      }
    }, 1000)

    return () => clearInterval(timerId)
  }, [endDate])

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`
  }

  const days = formatTime(Math.floor(time / (24 * 60 * 60)))
  const hours = formatTime(Math.floor((time % (24 * 60 * 60)) / (60 * 60)))
  const minutes = formatTime(Math.floor((time % (60 * 60)) / 60))
  const seconds = formatTime(time % 60)
  return (
    <div className='flex gap-2.5 justify-center lg:justify-end lg:mb-[140px] z-[5]'>
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
