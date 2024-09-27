import classNames from 'classnames'
import { memo, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import images from '~/assets'
import { Button } from '~/components/shared/button'
import { PATH_PUBLIC_APP } from '~/constants/paths'

interface HeaderProps {}

const HeaderSale: React.FunctionComponent<HeaderProps> = memo(() => {
  const windowRef = useRef(window)

  const { pathname } = useLocation()

  const [scrolledTo100, setScrolledTo100] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (windowRef.current.scrollY >= 100 && !scrolledTo100) {
        setScrolledTo100(true)
      } else if (windowRef.current.scrollY < 100 && scrolledTo100) {
        setScrolledTo100(false)
      }
    }

    windowRef.current.addEventListener('scroll', handleScroll)
    return () => windowRef.current.removeEventListener('scroll', handleScroll)
  }, [scrolledTo100, windowRef])

  return (
    <header
      className={classNames(
        pathname !== PATH_PUBLIC_APP.gettingStarted && 'shadow-header bg-white/[.12] backdrop-blur-xl',
        scrolledTo100 ? 'shadow-header bg-white/[.12] backdrop-blur-xl' : 'bg-transparent',
        `top-02xs:gap-3 2xs:p-4 2xs:px-3 fixed z-[500] flex max-h-[80px] w-full items-center justify-between transition-colors duration-300 ease-in-out xs:gap-3 xs:p-4 xs:px-3 sm:gap-4 sm:p-4 md:gap-5 xl:px-[100px]`
      )}
    >
      <Link to='/' className='w-fit'>
        <div className='flex items-center gap-[5px] rounded-full bg-[#F8F8F9] p-[7px] shadow-s-23 xs:pr-[7px] sm:pr-[11px]'>
          <img src={images.logo.logo_fi} alt='logo-fiai' className='size-[34px]' />
          <p className='text-[18px]/[18.9px] font-bold xs:hidden sm:flex'>Fi Ai</p>
        </div>
      </Link>

      {pathname.split('/')[1] !== PATH_PUBLIC_APP.checkout.root && (
        <div className='flex items-center gap-5'>
          <p className='text-[16px]/[16.8px] font-semibold'>Log In</p>
          <Button variant='linear' className='h-[48px] w-[98px]' classNameText='text-[16px]/[16.8px] text-white'>
            Sign in
          </Button>
        </div>
      )}
    </header>
  )
})

export default HeaderSale
