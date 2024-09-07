'use client'

import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { FC } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Head from 'next/head';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aditya Bhatt | Frontend Engineer</title>
      </Head>
      <body className="bg-primary text-gray-100">
        <div className="flex flex-col min-h-screen">
          <motion.header
            className={`fixed w-full z-50 transition-all duration-300 ${
              scrolled ? 'bg-secondary/90 shadow-lg' : 'bg-primary/90'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <nav className="flex justify-between items-center max-w-6xl mx-auto p-4">
              <motion.h1
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/" className="hover:text-accent transition-colors duration-300">
                  Aditya Bhatt
                </Link>
              </motion.h1>

              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
                  {/* Reverting to the old simpler hamburger icon */}
                  {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  )}
                </button>
              </div>

              <ul className="hidden md:flex space-x-4">
                {navItems.map((item) => (
                  <motion.li key={item.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link 
                      href={item.href} 
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        pathname === item.href ? 'bg-accent text-primary' : 'hover:bg-accent/20'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
              <motion.ul
                className="md:hidden mt-4 space-y-4 p-4 bg-secondary/95 backdrop-blur-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map((item) => (
                  <motion.li key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href={item.href} 
                      className={`block p-2 rounded-lg transition-colors duration-300 ${
                        pathname === item.href ? 'bg-accent text-primary' : 'hover:bg-accent/20'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.header>

          <main className="flex-1 pt-20 md:pt-16 bg-highlight">
            {children}
          </main>

          <footer className="bg-secondary text-white p-4 text-center">
            <p>&copy; 2023 Aditya Bhatt. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

export default Layout
