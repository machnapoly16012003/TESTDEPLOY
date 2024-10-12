import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import { Dispatch, FC, memo, SetStateAction, useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { LIST_GENDER_OPTIONS } from '~/@types/listOptionCommon'
import { ApplyForm } from '~/@types/models'
import { Dialog } from '~/components/shared/dialog'
import { InputField, RadioGroupBaseField } from '~/components/shared/form'
import { CloseIcon } from '~/components/shared/icon'
import { UploadFile } from '~/components/shared/uploadFile'
import useValidationForm from '~/hooks/useValidationForm'

type ApplyCVDialogProps = { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }

export interface SelectedFile {
  name: string
  url: string
  file: File
}

const ApplyCVDialog: FC<ApplyCVDialogProps> = memo(({ open, setOpen }) => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([])

  const { applyValidateFrom } = useValidationForm()

  const applyFrom = useForm<ApplyForm>({
    defaultValues: { gender: 0 },
    resolver: yupResolver(applyValidateFrom),
    mode: 'onBlur'
  })

  const { handleSubmit, clearErrors, reset } = applyFrom

  useEffect(() => {
    if (selectedFiles.length > 0) setErrorMessage('')
  }, [selectedFiles])

  const handleApplyFrom = useCallback(
    (values: ApplyForm) => {
      if (selectedFiles.length === 0) return setErrorMessage('Please select file to submit!')
      console.log('ApplyForm', values, selectedFiles)
    },
    [selectedFiles]
  )
  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      zIndex='z-[700]'
      className={classNames('h-fit !rounded-2xl bg-white xs:w-full md:w-[600px] lg:w-[700px] xl:w-[820px]')}
    >
      <div className='relative flex h-full flex-col items-center justify-start gap-4 text-left xs:p-8 md:min-h-[362px] md:p-10 xl:px-[85px] xl:py-[40px]'>
        <div
          className='absolute right-4 top-4 cursor-pointer'
          onClick={() => {
            setOpen(false)
            clearErrors()
            reset()
            setErrorMessage('')
          }}
        >
          <CloseIcon className='size-4' color='#000000' />
        </div>

        <div className='w-full space-y-1'>
          <FormProvider {...applyFrom}>
            <div className='flex items-center'>
              <p className='min-w-[125px] flex-shrink-0 pb-3 text-[16px]/[24px] font-medium'>Full Name</p>
              <InputField fullWidth name='fullName' placeholder='Enter your full name' />
            </div>
            <div className='flex items-center pt-2'>
              <p className='min-w-[125px] flex-shrink-0 pb-5 text-[16px]/[24px] font-medium'>Gender</p>
              <RadioGroupBaseField name='gender' options={LIST_GENDER_OPTIONS} />
            </div>
            <div className='flex items-center'>
              <p className='min-w-[125px] flex-shrink-0 pb-3 text-[16px]/[24px] font-medium'>Phone</p>
              <InputField fullWidth name='phone' placeholder='Enter your phone' />
            </div>
            <div className='flex items-center'>
              <p className='min-w-[125px] flex-shrink-0 pb-3 text-[16px]/[24px] font-medium'>Address</p>
              <InputField fullWidth name='addressDetail' placeholder='Enter your address' />
            </div>
            <div className='flex items-center'>
              <p className='min-w-[125px] flex-shrink-0 pb-3 text-[16px]/[24px] font-medium'>Email</p>
              <InputField fullWidth name='email' placeholder='Enter your email' />
            </div>

            <div className='relative !mt-5'>
              <UploadFile selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
              <p
                className={classNames(
                  errorMessage ? 'opacity-100' : 'opacity-0',
                  '2xs:text-[13px] absolute -bottom-5 z-[] ml-2 text-left text-red-500 xs:text-[13px] sm:text-[14px]'
                )}
              >
                {errorMessage}
              </p>
            </div>
          </FormProvider>
          <button
            onClick={handleSubmit(handleApplyFrom)}
            className={classNames(
              'btn-explorer-now mx-auto !mt-10 flex w-[160px] items-center justify-center gap-4 rounded-[8px] transition duration-200 ease-in-out hover:scale-[102%] xs:p-[10px] md:p-[10px]'
            )}
          >
            <p className='font-semibold text-white xs:text-[18px]/[20px] md:text-[20px]/[20px] xl:text-[20px]/[20px]'>
              Submit
            </p>
          </button>
        </div>
      </div>
    </Dialog>
  )
})

export default ApplyCVDialog
