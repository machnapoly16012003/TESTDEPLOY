import classNames from 'classnames'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { FaBars } from 'react-icons/fa6'
import { RiInformation2Fill } from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import images from '~/assets'
import { Button } from '~/components/shared/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '~/components/shared/navigationMenu'
import { PATH_PUBLIC_APP } from '~/constants/paths'

const listNavbars = [
  {
    id: 1,
    label: 'Getting started',
    pathname: PATH_PUBLIC_APP.gettingStarted
  },
  {
    id: 2,
    label: 'Components',
    pathname: PATH_PUBLIC_APP.components
  },
  {
    id: 3,
    label: 'Documentation',
    pathname: PATH_PUBLIC_APP.document
  },
  {
    id: 4,
    label: 'Career',
    pathname: PATH_PUBLIC_APP.career
  },
  {
    id: 5,
    label: 'Products & Applications',
    pathname: PATH_PUBLIC_APP.productApplication
  }
]

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = memo(() => {
  const navigate = useNavigate()

  const windowRef = useRef(window)

  const { pathname } = useLocation()

  const [scrolledTo100, setScrolledTo100] = useState<boolean>(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (windowRef.current.scrollY >= 60 && !scrolledTo100) {
        setScrolledTo100(true)
      } else if (windowRef.current.scrollY < 60 && scrolledTo100) {
        setScrolledTo100(false)
      }
    }

    windowRef.current.addEventListener('scroll', handleScroll)
    return () => windowRef.current.removeEventListener('scroll', handleScroll)
  }, [scrolledTo100, windowRef])

  return (
    <header
      className={classNames(
        pathname === PATH_PUBLIC_APP.gettingStarted
          ? !scrolledTo100
            ? 'bg-transparent'
            : 'bg-white/[.6]'
          : 'bg-white/[.6]',
        `2xs:p-4 2xs:px-3 fixed top-0 z-[500] flex max-h-[80px] w-full items-center justify-between shadow-s-26 backdrop-blur-xl transition-colors duration-300 ease-in-out xs:gap-3 xs:p-4 xs:px-3 sm:gap-4 sm:p-4 md:gap-5 xl:px-[100px] 3xl:px-[100px]`
      )}
    >
      <div className='flex items-center xs:gap-2 md:gap-4'>
        <div className='flex items-center justify-between rounded-[50%] bg-gray-100 lg:hidden'>
          <button
            onClick={toggleMenu}
            className='relative rounded-[50%] bg-[#F8F8F9] text-2xl shadow-s-23 xs:p-[12px] md:p-[12px] xl:p-[16px]'
          >
            <FaBars className='relative z-10' />
          </button>
          {isMenuOpen && (
            <div className='shadow-lg absolute left-10 top-16 z-10 rounded-md bg-white p-8'>
              <ul className='space-y-2'>
                {listNavbars.map((nav) => (
                  <li
                    key={nav.id}
                    className={classNames(
                      pathname === nav.pathname && 'rp-text-linear',
                      'cursor-pointer hover:scale-[101%] hover:rp-text-linear'
                    )}
                    onClick={() => navigate(nav.pathname)}
                  >
                    {nav.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Link to='/' className='w-fit'>
          <div className='flex items-center gap-[5px] rounded-full bg-[#F8F8F9] p-[7px] shadow-s-23 xs:pr-[7px] sm:pr-[11px]'>
            <img src={images.logo.logo_fi} alt='logo-fiai' className='size-[34px]' />
            <p className='text-[18px]/[18.9px] font-bold xs:hidden sm:flex'>Fi Ai</p>
          </div>
        </Link>

        <div className='xs:hidden sm:hidden md:hidden lg:block'>
          <NavigationMenu>
            <NavigationMenuList>
              {listNavbars.map((nav) => (
                <NavigationMenuItem key={nav.id}>
                  <NavigationMenuTrigger
                    onClick={() => {
                      navigate(nav.pathname)
                    }}
                    className={classNames(
                      pathname === nav.pathname && 'rp-text-linear',
                      'px-3 text-[16px] font-medium hover:scale-[101%] hover:rp-text-linear'
                    )}
                  >
                    {nav.label}
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <Button
        onClick={() =>
          toast('SignIn feature is currently unavailable. Please try again later.', {
            icon: <RiInformation2Fill color='#5495FC' className='size-10' />
          })
        }
        variant='linear'
        className='h-[48px] w-[98px]'
        classNameText='text-[16px]/[16.8px] text-white'
      >
        Sign in
      </Button>
    </header>
  )
})

export default Header
