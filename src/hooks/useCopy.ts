import toast from 'react-hot-toast'

const useCopy = () => {
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('Copied')
    } catch (error) {
      console.log('Error copying text: ', error)
    }
  }

  return {
    copyToClipboard
  }
}

export default useCopy
