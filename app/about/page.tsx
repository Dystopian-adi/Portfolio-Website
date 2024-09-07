'use client'

import { FC, useState } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

const AboutPage: FC = () => {
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  if (inView) {
    controls.start('visible')
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary via-secondary to-accent min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <motion.div
          className="w-full max-w-6xl px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Section - Image */}
            <motion.div
              className="w-full md:w-1/2 mb-8 md:mb-0"
              variants={itemVariants}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setIsImageHovered(true)}
                onHoverEnd={() => setIsImageHovered(false)}
              >
                <motion.img
                  src="/images/avatar1.png"
                  alt="Aditya Bhatt"
                  className="w-full h-auto object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: isImageHovered ? 1.1 : 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-50"
                  animate={{ opacity: isImageHovered ? 0.7 : 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Right Section - Text */}
            <div className="w-full md:w-1/2 md:pl-12 space-y-6 text-center md:text-left">
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold leading-tight"
                variants={itemVariants}
              >
                Hello, I&#39;m
                <br />
                <motion.span
                  className="text-highlight inline-block"
                  animate={{
                    color: ['#E3CAA5', '#FFFBE9', '#E3CAA5'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Aditya Bhatt
                </motion.span>
              </motion.h2>
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-highlight/80"
                variants={itemVariants}
              >
                Full Stack Developer
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-highlight/70"
                variants={itemVariants}
              >
                Crafting digital experiences with code and creativity
              </motion.p>
              <motion.div
                className="flex justify-center md:justify-start space-x-4"
                variants={itemVariants}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-highlight text-highlight hover:bg-highlight hover:text-primary transition-all duration-300"
                  asChild
                >
                  <motion.a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-highlight text-highlight hover:bg-highlight hover:text-primary transition-all duration-300"
                  asChild
                >
                  <motion.a
                    href="https://www.linkedin.com/in/adityabhatt707"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-highlight text-highlight hover:bg-highlight hover:text-primary transition-all duration-300"
                  asChild
                >
                  <motion.a
                    href="mailto:aditya.bhatt717@gmail.com"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="h-6 w-6" />
                  </motion.a>
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <Button
              variant="ghost"
              onClick={() => setShowMore(!showMore)}
              className="text-highlight hover:text-white hover:bg-highlight/20 transition-all duration-300"
            >
              {showMore ? 'Show Less' : 'Learn More About Me'}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
            </Button>
          </motion.div>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 bg-highlight/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <h4 className="text-2xl font-bold mb-4 text-highlight">My Journey</h4>
                <p className="text-highlight/80 mb-4">
                  With over 3 years of experience in Full Stack development, I specialize in building intuitive and responsive web applications. My passion lies in solving complex problems and delivering seamless user experiences.
                </p>
                <p className="text-highlight/80 mb-4">
                  Proficient in PHP and its frameworks like Laravel and CodeIgniter, as well as modern JavaScript frameworks such as React and Svelte.js, I am always eager to explore and apply new technologies. My goal is to help startups and enterprises bring their digital products to life, enhancing their online presence and user engagement.
                </p>
                <p className="text-highlight/80">
                  Outside of coding, I enjoy keeping up with tech trends, diving into new hobbies, and exploring the latest gadgets or just unwinding with a good book and a cup of coffee.
                </p>

              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Layout>
  )
}

export default AboutPage