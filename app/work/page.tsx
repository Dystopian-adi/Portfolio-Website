'use client'

import { FC, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronUp, ExternalLink, Github, X } from 'lucide-react'
import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const projects = [
  {
    title: "Pixaloop Solution",
    description: "A comprehensive digital solutions website offering services in web development, design, and digital marketing. I contributed to the website's development, ensuring a seamless user experience and responsive design.",
    image: "/images/avatar1.png",
    category: "Web Development",
    technologies: ["PHP", "javascript", "Bootstrap CSS"],
    liveUrl: "https://pixaloopsolution.com",
    githubUrl: ""
  },
  {
    title: "Riseup Infotech",
    description: "This website showcases a technology solutions company specializing in software development and IT consulting. My role involved full-stack development, from front-end design to back-end integration.",
    image: "/images/avatar1.png",
    category: "Full-Stack Development",
    technologies: ["PHP", "Laravel", "MySql"],
    liveUrl: "https://riseupinfotech.com",
    githubUrl: ""
  },
  {
    title: "Anicalls",
    description: "A recruitment and HR solutions platform that connects businesses with top talent. I worked on creating a user-friendly interface and integrated advanced search features for better candidate matching.",
    image: "/images/avatar1.png",
    category: "Web Application",
    technologies: ["PHP", "Codeigniter", "MySql"],
    liveUrl: "https://anicalls.com",
    githubUrl: ""
  },
  {
    title: "IABB",
    description: "A business advisory and consultancy website based in South Africa. I was responsible for the entire web development process, focusing on optimizing performance and accessibility.",
    image: "/images/avatar1.png",
    category: "Web Development",
    technologies: ["PHP", "Bootstrap", "MySQL"],
    liveUrl: "https://iabb.co.za",
    githubUrl: ""
  },
  {
    title: "Property Audit",
    description: "A platform for real estate auditing and property management. I developed custom modules for property listings, audit trails, and secure data management.",
    image: "/images/avatar1.png",
    category: "Web Application",
    technologies: ["React", "Firebase", "Node.js"],
    liveUrl: "https://propertyaudit.in",
    githubUrl: ""
  },
  {
    title: "The Politician",
    description: "A political news and information portal providing real-time updates and insights. I led the development of the website, focusing on performance optimization and real-time data integration.",
    image: "/images/avatar1.png",
    category: "Web Development",
    technologies: ["PHP", "Codeigniter", "MySql"],
    liveUrl: "https://thepolitician.in",
    githubUrl: ""
  },
  {
    title: "The Politician - Telugu Version",
    description: "The regional version of \"The Politician\" website, catering to the Telugu-speaking audience. My role involved adapting the content management system to support multilingual features and customizing the UI for the regional audience.",
    image: "/images/avatar1.png",
    category: "Localization",
    technologies: ["PHP", "Codeigniter", "MySql"],
    liveUrl: "https://telugu.thepolitician.in",
    githubUrl: ""
  },
  {
    title: "The Politician Mobile App",
    description: "A mobile application for accessing \"The Politician\" on the go. I contributed to the app's development, focusing on user interface design and smooth navigation.",
    image: "/images/avatar1.png",
    category: "Mobile App",
    technologies: ["Flutter", "PHP", "MySql"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.thepolitician.project&pcampaignid=web_share",
    githubUrl: ""
  },
  {
    title: "Stokes Heritage Orchard",
    description: "A desktop application and corresponding website for a retail management solution. My role involved developing the desktop application for efficient retail operations management and synchronizing it with the online platform.",
    image: "/images/avatar1.png",
    category: "Desktop Application",
    technologies: ["PHP", "Python", "Bootstrap"],
    liveUrl: "https://stokes.olivetech.com",
    githubUrl: ""
  }
]

const WorkPage: FC = () => {
  const [showButton, setShowButton] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary via-secondary to-accent min-h-screen text-highlight" ref={containerRef}>
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16 lg:py-24"
          style={{ opacity }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.h1>
          <Tabs defaultValue="All" className="mb-6 md:mb-8 justify-center">
            <div className="flex justify-center">
              <motion.div 
                className="relative max-w-full overflow-x-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TabsList className="flex bg-highlight/20 backdrop-blur-sm p-1 rounded-full space-x-2 min-w-max">
                  {categories.map((category, index) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setSelectedCategory(category)}
                      className="text-highlight hover:text-primary data-[state=active]:bg-highlight data-[state=active]:text-primary rounded-full px-3 py-1 flex-shrink-0 transition-all duration-300"
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {category}
                      </motion.span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>
            </div>
          </Tabs>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className="bg-highlight/10 hover:bg-highlight/20 transition-all duration-300 rounded-lg shadow-lg cursor-pointer backdrop-blur-sm border border-highlight/20 group"
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader className="p-0 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-start p-2 sm:p-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-highlight font-semibold">{project.category}</span>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg sm:text-xl text-highlight mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-highlight/80 line-clamp-2">{project.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-primary/95 backdrop-blur-md text-highlight border border-highlight/20 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                    <p className="text-highlight/80">{selectedProject.category}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                    className="text-highlight hover:text-accent"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-highlight mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-accent/20 text-highlight px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button asChild variant="outline" className="bg-highlight/10 hover:bg-highlight/20 text-highlight border-highlight/20">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-highlight/10 hover:bg-highlight/20 text-highlight border-highlight/20">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showButton && (
            <motion.div
              className="fixed bottom-4 right-4 z-40 sm:bottom-8 sm:right-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={scrollToTop}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-highlight text-primary hover:bg-accent hover:text-highlight transition-colors duration-300"
              >
                <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  )
}

export default WorkPage