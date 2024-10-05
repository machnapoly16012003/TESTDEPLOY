import classNames from 'classnames'
import { Dispatch, FC, memo, SetStateAction } from 'react'
import { Dialog } from '~/components/shared/dialog'
import RadioWalletGroupField from '~/components/shared/form/RadioWalletGroupField'
import { CloseIcon } from '~/components/shared/icon'
import { useAppSelector } from '~/redux/configStore'

type ISelectCardPaymentDialogProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const SelectCardPaymentDialog: FC<ISelectCardPaymentDialogProps> = memo(({ open, setOpen }) => {
  const { listWallets } = useAppSelector((s) => s.cardPayment)

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      zIndex='z-[700]'
      className={classNames(
        'h-fit !rounded-2xl bg-white/[.88] !backdrop-blur-[80px] xs:w-[374px] md:w-[374px] xl:w-[374px]'
      )}
    >
      <div className='relative flex h-full flex-col items-center justify-center gap-4 xs:min-h-[586px] xs:p-8 xs:px-5 xs:pt-14 md:min-h-[586px] md:px-[15px] md:pb-[55px] md:pt-[76px]'>
        <div className='absolute right-4 top-4 cursor-pointer' onClick={() => setOpen(false)}>
          <CloseIcon className='size-4' color='#0D0D0D' />
        </div>

        <p className='text-nowrap text-center font-semibold text-black xs:text-[30px]/[48px] md:text-[32px]/[48px]'>
          Wallet Connected
        </p>

        <div className='flex w-full flex-1 items-center justify-center'>
          <div className='flex flex-col items-center gap-2'>
            <RadioWalletGroupField name='walletAddress' options={listWallets} />
            <p className='text-[14px] font-medium'>Adequate Balance Required</p>
          </div>
        </div>

        <div className='w-full px-5'>
          <button
            onClick={() => setOpen(false)}
            className={classNames(
              'z-10 flex w-full items-center justify-center gap-4 rounded-[8px] bg-ln-text-product p-[18px] py-3 transition duration-300 ease-in-out hover:scale-[101%] hover:bg-ln-text-product-left'
            )}
          >
            <p className='font-semibold text-white xs:text-[16px]/[20px] md:text-[16px]/[20px] xl:text-[16px]/[20px]'>
              Confirm
            </p>
          </button>
        </div>
      </div>
    </Dialog>
  )
})

export default SelectCardPaymentDialog
