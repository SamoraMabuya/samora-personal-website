import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isNavOpen) {
        setIsNavOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isNavOpen])
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-30 top-0 text-gray-900">
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Left side - Logo and Nav Items for medium screens and up */}
        <div className="flex items-center justify-start">
          <Link href="/">
            <div className="title-font font-medium text-gray-900 cursor-pointer">
              <span className="text-xl">Samora</span>
            </div>
          </Link>
          <nav className="hidden md:block ml-10 absolute md:relative w-full md:w-auto left-0 md:left-auto">
            <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/process">Process</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
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
          <div className="hidden md:flex items-center space-x-4">
            <Image
              src="/icons/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
            />
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Mobile Menu - Full-screen overlay or off-canvas menu */}
        <div
          className={`${
            isNavOpen ? 'fixed' : 'hidden'
          } inset-0 bg-[#71717a] z-50 overflow-y-auto h-full w-full`}
        >
          <ul className="p-5 space-y-4">
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/process">Process</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div
          className={`${
            isNavOpen ? 'fixed' : 'hidden'
          } inset-0 bg-[#71717a] z-50 overflow-y-auto h-full w-full`}
        >
          <button
            onClick={() => setIsNavOpen(false)}
            className="p-4 text-white float-right"
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
          <ul className="flex flex-col items-center justify-center min-h-screen pt-10 space-y-10">
            <li className="text-white">
              <Link href="/work">Work</Link>
            </li>
            <li className="text-white">
              <Link href="/process">Process</Link>
            </li>
            <li className="text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="text-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
