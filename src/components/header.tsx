import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { IconTwitter, IconGithub, IconBxlLinkedinSquare } from './Icons'
import { useRouter } from 'next/router'
import Image from 'next/image'
const Header = () => {
  const router = useRouter()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [shouldScrollToContact, setShouldScrollToContact] = useState(false)

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/' && shouldScrollToContact) {
        document
          .getElementById('contact-section')
          ?.scrollIntoView({ behavior: 'smooth' })
        setShouldScrollToContact(false) // Reset the state
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [shouldScrollToContact, router.events])

  const handleClickContact = () => {
    console.log('scroll clicked')
    if (router.pathname !== '/') {
      setShouldScrollToContact(true) // Set the state to true to indicate the next action
      router.push('/')
    } else {
      // We are already on the home page, so scroll directly
      document
        .getElementById('contact-section')
        ?.scrollIntoView({ behavior: 'smooth' })
    }
    closeMobileMenu()
  }

  const isActiveLink = (path: string, routerPath: string): boolean => {
    return routerPath === path
  }

  const closeMobileMenu = () => {
    setIsNavOpen(false)
  }

  return (
    <header className="relative w-full z-30 pt-12 text-gray-900 px-10 md:px-0 ">
      <div className="container mx-auto flex items-center justify-between md:w-10/12">
        {/* Left side - Logo and Nav Items for medium screens and up */}
        <div className="flex items-center justify-start">
          <nav className="hidden md:block absolute md:relative w-full md:w-auto left-0 md:left-auto">
            <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10">
              <li
                className={`${
                  isActiveLink('/', router.pathname)
                    ? 'text-blue-400'
                    : 'text-gray-900'
                } hover:text-blue-500`}
              >
                <Link href="/">
                  <p>Work</p>
                </Link>
              </li>
              <li
                className={`${
                  isActiveLink('/about', router.pathname)
                    ? 'text-blue-500'
                    : 'text-gray-900'
                } hover:text-blue-500`}
              >
                <Link href="/about">
                  <p> About</p>
                </Link>
              </li>
              {/* For non-path based 'Contact' you can use state to manage the active color */}
              <li
                className={`${
                  shouldScrollToContact ? 'text-blue-500' : 'text-gray-900'
                } hover:text-blue-500`}
              >
                <button onClick={handleClickContact}>
                  <p>Contact</p>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 flex items-center justify-start md:justify-center">
          <Link href="/">
            <div className="w-5/12 title-font font-medium text-gray-900 cursor-pointer">
              <Image width={100} height={100} src={'/sLogo.svg'} alt={'logo'} />
            </div>
          </Link>
        </div>
        {/* Right side - Menu icon for mobile and Social Icons for medium screens and up */}
        <div className="flex items-center">
          {/* Menu Icon for mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsNavOpen(!isNavOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>{' '}
            </button>
          </div>

          {/* Social Icons - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-10">
            <IconTwitter />
            <IconGithub />
            <IconBxlLinkedinSquare />
          </div>
        </div>

        {/* Mobile Menu - Full-screen overlay or off-canvas menu */}

        <div
          className={`${
            isNavOpen ? 'fixed' : 'hidden'
          } inset-0 bg-[#71717a] z-50 overflow-y-auto h-full w-full flex items-center justify-center`}
        >
          <button
            onClick={() => setIsNavOpen(false)}
            className="p-4 text-white absolute top-0 right-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="text-center space-y-10">
            <li
              className={
                isActiveLink('/', router.pathname)
                  ? 'text-blue-400'
                  : 'text-white'
              }
            >
              <Link href="/" onClick={closeMobileMenu}>
                <p>Work</p>
              </Link>
            </li>
            <li
              className={
                isActiveLink('/about', router.pathname)
                  ? 'text-blue-500'
                  : 'text-white'
              }
            >
              <Link href="/about" onClick={closeMobileMenu}>
                <p> About</p>
              </Link>
            </li>
            {/* For non-path based 'Contact' you can use state to manage the active color */}
            <li
              className={shouldScrollToContact ? 'text-blue-500' : 'text-white'}
            >
              <button onClick={handleClickContact}>
                <p>Contact</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
