import React, { useState, useCallback } from 'react'

interface OtpInputProps {
  length: number
  onChangeOtp: (otp: string) => void
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onChangeOtp }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''))

  const handleChange = useCallback(
    (element: HTMLInputElement, index: number) => {
      const value = element.value
      if (!value) return

      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (index < length - 1 && value) {
        const nextElement = element.nextElementSibling as HTMLInputElement
        if (nextElement) {
          nextElement.focus()
        }
      }

      onChangeOtp(newOtp.join(''))
    },
    [otp, length, onChangeOtp]
  )

  const handleBackspace = useCallback(
    (element: HTMLInputElement, index: number) => {
      const newOtp = [...otp]
      newOtp[index] = ''
      setOtp(newOtp)

      if (index > 0) {
        const prevElement = element.previousElementSibling as HTMLInputElement
        if (prevElement) {
          prevElement.focus()
        }
      }

      onChangeOtp(newOtp.join(''))
    },
    [otp, onChangeOtp]
  )

  return (
    <div className='flex items-center justify-center xs:gap-2 md:gap-5'>
      {otp.map((data, index) => (
        <input
          key={index}
          type='text'
          maxLength={1}
          value={data}
          className='rounded-[8px] border-[1.5px] border-[#9291A5] text-center text-[16px] xs:size-[38px] md:size-12'
          onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
          onKeyDown={(e) => {
            if (e.key === 'Backspace') {
              handleBackspace(e.target as HTMLInputElement, index)
            }
          }}
        />
      ))}
    </div>
  )
}

export default OtpInput
