import classNames from 'classnames'
import { Dispatch, FC, memo, SetStateAction, useCallback, useEffect, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { QueryConfig } from '~/@types/common'
import images from '~/assets'
import { Dialog } from '~/components/shared/dialog'
import { OtpInput } from '~/components/shared/form'
import { CloseIcon } from '~/components/shared/icon'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import useQueryConfig from '~/hooks/useQueryConfig'

type OtpDialogProps = { productId: string; open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }

const OtpDialog: FC<OtpDialogProps> = memo(({ productId, open, setOpen }) => {
  const navigate = useNavigate()

  const queryConfig: QueryConfig = useQueryConfig()

  const [otp, setOtp] = useState<string>('')

  const handleChangeOtp = useCallback((newOtp: string) => {
    setOtp(newOtp)
  }, [])

  const handleConfirmOTP = useCallback(() => {
    navigate({
      pathname: `${PATH_PUBLIC_APP.checkout.root}/complete/${productId}`,
      search: createSearchParams({
        ...queryConfig
      }).toString()
    })
  }, [productId])

  useEffect(() => {
    if (otp.split('').length === 6) {
      console.log('otp', otp)
      handleConfirmOTP()
    }
  }, [otp])

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      zIndex='z-[700]'
      className={classNames('h-fit !rounded-2xl bg-white/[.88] xs:w-full md:w-[600px] xl:w-[670px]')}
    >
      <div className='relative flex h-full flex-col items-center justify-center gap-4 xs:p-8 md:min-h-[362px] md:p-10'>
        <div className='absolute right-4 top-4 cursor-pointer' onClick={() => setOpen(false)}>
          <CloseIcon className='size-4' color='#9291A5' />
        </div>

        <div>
          <img src={images.icon.otp} className='mx-auto xs:w-[80px] sm:w-[100px]' />

          <p className='mt-5 text-center font-semibold text-[#1E1B39] xs:px-0 xs:text-[16px]/[18.6px] md:px-10 md:text-[18px]/[24px] xl:px-0'>
            Please enter your 6-digit authentication code{' '}
            <span className='text-center xs:hidden md:block'>from your email!</span>
          </p>

          <div className='mb-4 mt-5'>
            <OtpInput length={6} onChangeOtp={handleChangeOtp} />
          </div>

          <p className='!mt-5 cursor-pointer text-center font-medium text-[#1E1B39]/[.68] underline xs:text-[16px]/[16.8px] sm:text-[18px]/[21px]'>
            Resend
          </p>
        </div>
      </div>
    </Dialog>
  )
})

export default OtpDialog
