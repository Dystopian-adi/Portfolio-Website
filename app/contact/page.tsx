'use client'

import { FC, useState } from 'react'
import Layout from '@/components/layout'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactPage: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
  
      if (response.ok) {
        toast.success('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    }
  
    setIsSubmitting(false)
  }
  

  const contactInfo = [
    { icon: Mail, text: 'aditya.bhatt717@gmail.com' },
    { icon: Phone, text: '+91 9974175359' },
    { icon: MapPin, text: 'Near Lighthouse, Umbergaon Town, Valsad, Gujarat 396170, India' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/' },
    { icon: Linkedin, href: 'https://linkedin.com/in/adityabhatt707' },
    { icon: Twitter, href: 'https://twitter.com/' },
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary via-secondary to-accent min-h-screen flex flex-col justify-center items-center text-highlight p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl bg-secondary/80 backdrop-blur-md rounded-lg shadow-xl overflow-hidden"
        >
          <div className="md:flex">
            {/* Contact Info Section */}
            <motion.div 
              className="md:w-1/2 bg-accent/90 p-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-6 text-highlight/80">
                I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 mr-4" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-8 flex space-x-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="w-6 h-6 hover:text-highlight transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            {/* Form Section */}
            <motion.div 
              className="md:w-1/2 p-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'message'].map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <label htmlFor={field} className="block text-sm font-medium text-highlight mb-1 capitalize">
                      {field}
                    </label>
                    {field === 'message' ? (
                      <Textarea
                        id={field}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full bg-primary/10 border-primary/20 text-highlight placeholder-highlight/50 focus:ring-accent focus:border-accent transition-all duration-300"
                        placeholder={`Your ${field} here...`}
                        rows={4}
                      />
                    ) : (
                      <Input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full bg-primary/10 border-primary/20 text-highlight placeholder-highlight/50 focus:ring-accent focus:border-accent transition-all duration-300"
                        placeholder={field === 'email' ? 'your.email@example.com' : `Your ${field}`}
                      />
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/80 text-highlight transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
        <ToastContainer position="bottom-right" theme="dark" />
      </div>
    </Layout>
  )
}

export default ContactPage