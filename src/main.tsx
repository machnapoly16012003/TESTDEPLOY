import { Theme } from '@radix-ui/themes'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import '@radix-ui/themes/styles.css'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { setupAxiosClient } from './api/axiosClient.ts'
import App from './App.tsx'

import './index.scss'
import './styles.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </HelmetProvider>
)

setupAxiosClient()
