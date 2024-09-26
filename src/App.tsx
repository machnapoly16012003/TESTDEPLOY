import AOS from 'aos'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import useRouteElements from '~/hooks/useRouteElements'
import { Cursor } from './components/shared/cursor'

function App() {
  const routeElements = useRouteElements()

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
      <>
        {routeElements}
        <Cursor />
      </>

      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              border: '0px solid #ffffff',
              color: '#ffffff',
              background: 'linear-gradient(270deg, #5495FC 0%, #31D366 100%)'
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: '#60EC8E'
            }
          }
        }}
      />
    </>
  )
}

export default App
