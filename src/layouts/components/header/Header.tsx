import classNames from 'classnames'
import { memo, useCallback, useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import images from '~/assets'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '~/components/shared/navigationMenu'
import { PATH_PUBLIC_APP } from '~/constants/paths'

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = memo(() => {
  const navigate = useNavigate()

  const { pathname } = useLocation()

  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  // const handleAlert = () => {
  //   alert('you do not have administrative rights, please contact the administrator.')
  // }

  useEffect(() => {
    window.addEventListener('scroll', function () {
      const header = document.querySelector('header')
      if (window.scrollY > 100) {
        header?.classList.add('header-active')
      } else {
        header?.classList.remove('header-active')
      }
    })
    return () => {}
  }, [])

  return (
    <header className='shadow-md fixed left-0 top-0 z-[9999] w-full bg-white'>
      <div className='header_desktop hidden h-[80px] lg:block'>
        <div className='container-wrapper mx-auto flex h-full items-center justify-between'>
          <div className='flex items-center gap-10'>
            <Link to='/' className='text-lg font-bold text-gray-800'>
              <img src={images.logo.logo_fi} alt='logo-fiai' className='w-[50px]' />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={() => {
                      // (window.location.href = 'https://pre.fi.ai/')
                      navigate(PATH_PUBLIC_APP.gettingStarted)
                    }}
                    className={classNames(pathname === PATH_PUBLIC_APP.gettingStarted && 'rp-text-linear')}
                  >
                    Getting started
                    {/* <TbLockCancel className='absolute left-[0px] top-[0px] text-[0.7em]' /> */}
                  </NavigationMenuTrigger>
                  {/* <NavigationMenuContent>
                    <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                      <li className='row-span-3'>
                        <NavigationMenuLink asChild>
                          <a
                            className='focus:shadow-md flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none'
                            href='/'
                          >
                            <img src={images.logo.logo_fi} alt='logo-fiai' />
                            <div className='mb-2 mt-4 text-lg font-medium'>shadcn/ui</div>
                            <p className='text-sm leading-tight text-muted-foreground'>
                              Beautifully designed components that you can copy and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href='/docs' title='Introduction'>
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href='/docs/installation' title='Installation'>
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href='/docs/primitives/typography' title='Typography'>
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent> */}
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={() =>
                      // document.querySelector('#ai-work')?.scrollIntoView({ block: 'start', behavior: 'smooth' })
                      navigate(PATH_PUBLIC_APP.components)
                    }
                    className={classNames(pathname === PATH_PUBLIC_APP.components && 'rp-text-linear')}
                  >
                    Components
                    {/* <TbLockCancel className='absolute left-[3px] top-[0px] text-[0.7em]' /> */}
                  </NavigationMenuTrigger>
                  {/* <NavigationMenuContent>
                    <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                      {menuBar.map((component) => (
                        <ListItem key={component.title} title={component.title} href={component.href}>
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent> */}
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={
                      () => navigate(PATH_PUBLIC_APP.document)
                      // document.querySelector('#in-store')?.scrollIntoView({ block: 'start', behavior: 'smooth' })
                    }
                    className={classNames(pathname === PATH_PUBLIC_APP.document && 'rp-text-linear')}
                  >
                    Documentation
                    {/* <TbLockCancel className='absolute left-[3px] top-[0px] text-[0.7em]' /> */}
                  </NavigationMenuTrigger>
                  {/* <Link to=''>
                    <NavigationMenuLink className={(navigationMenuTriggerStyle(), 'relative')} onClick={handleAlert}>
                      Documentation
                      <TbLockCancel className='absolute left-[-7px] top-[-8px] text-[0.7em]' />
                    </NavigationMenuLink>
                  </Link> */}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* <div className='flex items-center gap-2'>
            <div className='flex h-[40px] w-[100px] items-center justify-center overflow-hidden rounded-[20px] bg-primary-gradient bg-clip-text p-2 font-semibold text-transparent'>
              <Link to='/' className='' onClick={handleAlert}>
                Login
              </Link>
            </div>
            <ButtonPrimary>
              <Link to='/' className='' onClick={handleAlert}>
                Register
              </Link>
            </ButtonPrimary>
          </div> */}
        </div>
      </div>

      <div className='flex items-center justify-between bg-gray-100 p-4 lg:hidden'>
        <button onClick={toggleMenu} className='relative rounded-[50%] bg-white text-2xl xs:p-[12px] md:p-[16px]'>
          <FaBars className='relative z-10' />
          {/* <TbLockCancel className='absolute left-[0px] top-[3px] text-[0.7em]' /> */}
        </button>
        {/* <ButtonPrimary>
          <Link to='/#' className='' onClick={handleAlert}>
            SIGN IN
          </Link>
        </ButtonPrimary> */}
        {isMenuOpen && (
          <div className='shadow-lg absolute left-10 top-16 z-10 rounded-md bg-white p-8'>
            <ul className='space-y-2'>
              <li
                className={classNames(
                  pathname === PATH_PUBLIC_APP.gettingStarted && 'rp-text-linear',
                  'cursor-pointer hover:text-blue-500'
                )}
                onClick={() => navigate(PATH_PUBLIC_APP.gettingStarted)}
              >
                Getting started
              </li>
              <li
                className={classNames(
                  pathname === PATH_PUBLIC_APP.components && 'rp-text-linear',
                  'cursor-pointer hover:text-blue-500'
                )}
                onClick={() => navigate(PATH_PUBLIC_APP.components)}
              >
                Components
              </li>
              <li
                className={classNames(
                  pathname === PATH_PUBLIC_APP.document && 'rp-text-linear',
                  'cursor-pointer hover:text-blue-500'
                )}
                onClick={() => navigate(PATH_PUBLIC_APP.document)}
              >
                Documentation
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
})

export default Header
