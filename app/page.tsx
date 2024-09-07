'use client'

import { FC, useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Layout from '../components/layout'

const HomePage: FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <Layout>
      <div className="bg-primary min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {/* Left Section - Text */}
          <div className="space-y-6 w-full md:w-1/2 text-center md:text-left">
            <motion.span
              className="inline-block bg-accent p-2 rounded-lg text-sm font-semibold"
              variants={itemVariants}
            >
              👋 Hi there! I'm Aditya Bhatt
            </motion.span>
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold leading-snug"
              variants={itemVariants}
            >
              A{' '}
              <motion.span
                className="text-highlight inline-block"
                animate={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
              >
                Full Stack Developer.
              </motion.span>
              <br />I{' '}
              <motion.span
                className="text-highlight inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
              >
                Build
              </motion.span>{' '}
              and{' '}
              <motion.span
                className="text-highlight inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5, delay: 0.25 }}
              >
                Elevate
              </motion.span>{' '}
              Products for Startups{' '}
              <motion.span
                className="text-highlight inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
              >
                and Enterprises
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-300"
              variants={itemVariants}
            >
              Over 3 years of experience leveraging programming tools to deliver high-quality results. Expert in full stack development with a focus on creating scalable and efficient solutions.
            </motion.p>
            <motion.button
              className="bg-highlight text-primary font-semibold px-6 py-3 rounded-lg mt-4 hover:bg-highlight-rgb transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Right Section - Illustration */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              animate={{ rotate: isHovered ? [0, -5, 5, -5, 0] : 0 }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.img
                src="/images/avatar2.png"
                alt="Illustration"
                className="max-w-[28rem] max-h-[22rem] w-full h-auto rounded-lg"
                initial={{ filter: 'grayscale(100%)' }}
                animate={{ filter: 'grayscale(0%)' }}
                transition={{ duration: 1 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0"
                animate={{ opacity: isHovered ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default HomePage