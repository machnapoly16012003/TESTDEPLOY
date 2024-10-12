import classNames from 'classnames'
import { forwardRef, useCallback, useImperativeHandle, useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'

interface UploadFileProps {
  maxFiles?: number
  className?: string
}

export interface UploadFileRef {
  getFileUrls: () => string[]
  getSelectedFiles: () => SelectedFile[]
}

interface SelectedFile {
  name: string
  url: string
  file: File
}

const UploadFile = forwardRef<UploadFileRef, UploadFileProps>(({ className, maxFiles = 1 }, ref) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([])

  useImperativeHandle(ref, () => ({
    getFileUrls: () => selectedFiles.map((file) => file.url),
    getSelectedFiles: () => selectedFiles
  }))

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setErrorMessage(null)

      const newFiles = acceptedFiles.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
        file
      }))
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles].slice(0, maxFiles))
    },
    [maxFiles]
  )

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    fileRejections.forEach(({ file, errors }) => {
      errors.forEach((err) => {
        if (err.code === 'file-too-large') {
          setErrorMessage(`File "${file.name}" is too large. Maximum size allowed is 5MB.`)
        }
        if (err.code === 'file-invalid-type') {
          setErrorMessage(
            `File "${file.name}" is not a supported format. Only .doc, .docx, and .pdf files are allowed.`
          )
        }
      })
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      'application/pdf': [],
      'application/msword': [],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': []
    },
    maxFiles,
    maxSize: 5 * 1024 * 1024
  })

  return (
    <div>
      <div
        {...getRootProps({
          className: classNames(
            'flex h-[136px] w-full flex-col items-center justify-center rounded-[8px] border border-dashed transition-colors duration-300',
            isDragActive ? 'border-[#df28fb]' : 'border-blackDark/[.22]',
            className
          )
        })}
      >
        <input {...getInputProps()} />
        <div className='space-y-2'>
          <p className='text-[16px]/[24px]'>Upload your CV from your computer, or drag and drop it here</p>
          <p className='text-[14px]/[21px] text-blackMain/[.44]'>
            Supports .doc, .docx, and .pdf formats, with a maximum size of 5MB.
          </p>
        </div>

        <button
          className={classNames(
            'btn-explorer-now mx-auto mt-[14px] flex h-8 w-[120px] items-center justify-center gap-4 rounded-[6px] shadow-s-38 transition duration-200 ease-in-out hover:scale-[102%]'
          )}
        >
          <p className='text-[14px]/[22px] font-medium text-white'>Choose file</p>
        </button>
      </div>

      {errorMessage && <div className='mt-2 text-red-500'>{errorMessage}</div>}

      {selectedFiles.length > 0 && (
        <div className='mt-4'>
          <p className='text-[14px]/[21px] font-medium'>Selected Files:</p>
          <ul>
            {selectedFiles.map((file, index) => (
              <a href={file.url} key={index} className='text-[14px]/[21px] hover:text-[#df28fb]'>
                {file.name}
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
})

export default UploadFile
