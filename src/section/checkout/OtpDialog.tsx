import classNames from 'classnames'
import { Dispatch, FC, memo, SetStateAction } from 'react'
import images from '~/assets'
import { Dialog } from '~/components/shared/dialog'
import { CloseIcon } from '~/components/shared/icon'

type OtpDialogProps = { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }

const OtpDialog: FC<OtpDialogProps> = memo(({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      zIndex='z-[700]'
      className={classNames('2xs:w-full h-fit !rounded-2xl bg-white/[.88] xs:w-full sm:w-[538px]')}
    >
      <div className='relative flex h-full flex-col items-center justify-center gap-4 p-5'>
        <div className='absolute right-4 top-4 cursor-pointer' onClick={() => setOpen(false)}>
          <CloseIcon className='xs:size-4 sm:size-5' />
        </div>

        <div className='space-y-3'>
          <img src={images.icon.otp} className='mx-auto xs:w-[80px] sm:w-[100px]' />
          <p className='text-center text-blackMain/[.76] xs:text-[14px]/[14.7px] sm:text-[20px]/[21px]'>
            Please enter your 6-digit authentication code from your email!
          </p>
          <a className='text-center text-blackMain/[.76] xs:text-[14px]/[14.7px] sm:text-[20px]/[21px]'>Resend</a>
        </div>
      </div>
    </Dialog>
  )
})

export default OtpDialog
