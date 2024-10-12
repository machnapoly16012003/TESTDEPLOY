import AOS from 'aos'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import useRouteElements from '~/hooks/useRouteElements'
import { Cursor } from './components/shared/cursor'
import useCheckGLB from './hooks/useCheckGLB'

function App() {
  const routeElements = useRouteElements()

  const { isWebGLBAvailable } = useCheckGLB()

  useEffect(() => {
    if (!isWebGLBAvailable()) {
      alert('WebGL không được hỗ trợ trên thiết bị của bạn.')
    }
  }, [isWebGLBAvailable])

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      duration: 1000, // Thời gian hiệu ứng (ms)
      offset: 200, // Khoảng cách bắt đầu hiệu ứng
      once: false
    })
  }, [])

  return (
    <>
      {routeElements}
      <Cursor />

      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              border: '0px solid #ffffff',
              color: '#ffffff',
              background: 'linear-gradient(126deg, #11B0F2 7.58%, #F200F2 92.42%)'
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: '#F200F2'
            }
          }
        }}
        containerClassName='my-toast-container'
      />
    </>
  )
}

export default App
