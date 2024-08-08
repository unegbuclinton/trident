'use client'
import useCountdownTimer from '@/lib/conutdownTimer'
import React from 'react'

const FlipClock = () => {
  const preciseEndDate = new Date('2024-08-26T00:00:00').getTime()

  const { days, hours, minutes, seconds } = useCountdownTimer(preciseEndDate)

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`
  }

  const formattedDays = formatTime(days)
  const formattedHhours = formatTime(hours)
  const formattedMinutes = formatTime(minutes)
  const formattedSseconds = formatTime(seconds)
  return (
    <div className='flex gap-2.5 justify-center lg:justify-end lg:mb-[140px] z-[5]'>
      <div className='container-segment'>
        <div className='segment-title'>Days</div>
        <div className='segment'>
          <div className='flip-card'>
            <div className='top'>{formattedDays[0]}</div>
            <div className='bottom'>{formattedDays[0]}</div>
          </div>
          <div className='flip-card'>
            <div className='top'>{formattedDays[1]}</div>
            <div className='bottom'>{formattedDays[1]}</div>
          </div>
        </div>
      </div>
      <div className='container-segment'>
        <div className='segment-title'>Hours</div>
        <div className='segment'>
          <div className='flip-card'>
            <div className='top'>{formattedHhours[0]}</div>
            <div className='bottom'>{formattedHhours[0]}</div>
          </div>
          <div className='flip-card'>
            <div className='top'>{formattedHhours[1]}</div>
            <div className='bottom'>{formattedHhours[1]}</div>
          </div>
        </div>
      </div>
      <div className='container-segment'>
        <div className='segment-title'>Minutes</div>
        <div className='segment'>
          <div className='flip-card'>
            <div className='top'>{formattedMinutes[0]}</div>
            <div className='bottom'>{formattedMinutes[0]}</div>
          </div>
          <div className='flip-card'>
            <div className='top'>{formattedMinutes[1]}</div>
            <div className='bottom'>{formattedMinutes[1]}</div>
          </div>
        </div>
      </div>
      <div className='container-segment'>
        <div className='segment-title'>Seconds</div>
        <div className='segment'>
          <div className='flip-card'>
            <div className='top'>{formattedSseconds[0]}</div>
            <div className='bottom'>{formattedSseconds[0]}</div>
          </div>
          <div className='flip-card'>
            <div className='top'>{formattedSseconds[1]}</div>
            <div className='bottom'>{formattedSseconds[1]}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipClock
