import classNames from 'classnames'
import { memo, useEffect, useRef, useState } from 'react'
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

interface HeaderProps {}

const HeaderSale: React.FunctionComponent<HeaderProps> = memo(() => {
  const navigate = useNavigate()

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
        pathname !== PATH_PUBLIC_APP.gettingStarted && 'bg-white/[.12] shadow-s-26 backdrop-blur-xl',
        scrolledTo100 ? 'bg-white/[.12] shadow-s-26 backdrop-blur-xl' : 'bg-transparent',
        `top-02xs:gap-3 2xs:p-4 2xs:px-3 fixed z-[500] flex max-h-[80px] w-full items-center justify-between transition-colors duration-300 ease-in-out xs:gap-3 xs:p-4 xs:px-3 sm:gap-4 sm:p-4 md:gap-5 xl:px-[100px]`
      )}
    >
      <div className='flex items-center gap-4'>
        <Link to='/' className='w-fit'>
          <div className='flex items-center gap-[5px] rounded-full bg-[#F8F8F9] p-[7px] shadow-s-23 xs:pr-[7px] sm:pr-[11px]'>
            <img src={images.logo.logo_fi} alt='logo-fiai' className='size-[34px]' />
            <p className='text-[18px]/[18.9px] font-bold xs:hidden sm:flex'>Fi Ai</p>
          </div>
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

      {pathname.split('/')[1] !== 'checkout' && (
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
