import { memo, useEffect, useState } from 'react'

type TimeCountdownProps = { duration: number }

const TimeCountdownSimple: React.FC<TimeCountdownProps> = memo(({ duration }) => {
  const [time, setTime] = useState<number>(duration)

  useEffect(() => {
    setTime(duration)
  }, [duration])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time - 1000)
    }, 1000)

    return () => clearTimeout(timerId)
  }, [time])

  const getFormattedTime = (milliseconds: number) => {
    const total_seconds = Math.floor(milliseconds / 1000)
    const total_minutes = Math.floor(total_seconds / 60)
    const total_hours = Math.floor(total_minutes / 60)
    const total_days = Math.floor(total_hours / 24)

    const seconds = total_seconds % 60
    const minutes = total_minutes % 60
    const hours = total_hours % 24
    const days = total_days

    return { days, hours, minutes, seconds }
  }

  const formattedTime = getFormattedTime(time)

  return (
    <>
      {formattedTime.days > 0 && `${formattedTime.days} : `}
      {formattedTime.hours < 10 ? `0${formattedTime.hours}` : formattedTime.hours} :{' '}
      {formattedTime.minutes < 10 ? `0${formattedTime.minutes}` : formattedTime.minutes} :{' '}
      {formattedTime.seconds < 10 ? `0${formattedTime.seconds}` : formattedTime.seconds}
    </>
  )
})

export default TimeCountdownSimple
