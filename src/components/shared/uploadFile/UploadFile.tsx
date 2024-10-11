import classNames from 'classnames'
import { Dispatch, forwardRef, SetStateAction } from 'react'

interface UploadFileProps {
  maxFiles?: number
  className?: string
  onCompleteUpload?: (links: string[], blobs: Blob[]) => void
}

export interface UploadFileRef {
  setFileUrls?: Dispatch<SetStateAction<string[]>>
  className?: string
}

const UploadFile = forwardRef<UploadFileRef, UploadFileProps>(({ className }) => {
  return (
    <div
      className={classNames(
        className,
        'flex h-[136px] w-full flex-col items-center justify-center rounded-[8px] border border-dashed border-blackDark/[.22]'
      )}
    >
      <div className='space-y-2'>
        <p className='text-[16px]/[24px]'>Upload your CV from your computer, or drag and drop it here</p>
        <p className='text-[14px]/[21px] text-blackMain/[.44]'>
          Supports .doc, .docx, and .pdf formats, with a maximum size of 5MB.
        </p>
      </div>

      <button
        className={classNames(
          'shadow-s-38 btn-explorer-now mx-auto mt-[14px] flex h-8 w-[120px] items-center justify-center gap-4 rounded-[6px] transition duration-200 ease-in-out hover:scale-[102%]'
        )}
      >
        <p className='text-[14px]/[22px] font-medium text-white'>Choose file</p>
      </button>
    </div>
  )
})

export default UploadFile
