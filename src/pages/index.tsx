// pages/index.tsx
import Contact from '@/app/sections/contact'
import Projects from '@/app/sections/projects'
import Layout from '@/components/layout'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Work = () => {
  const router = useRouter()

  useEffect(() => {
    // Check if the previous path was '/about'
    if (router.asPath === '/' && window.history.state?.as === '/about') {
      document
        .getElementById('contact-section')
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [router.asPath])
  return (
    <Layout>
      <div className="container mx-auto flex flex-col items-center justify-between mt-20 px-4 lg:flex-row ">
        <hr />
        <div className="container mx-auto">
          <div className="border-t border-b border-gray-400 py-8">
            <h1 className=" text-lg md:text-4xl text-center md:text-left">
              Samora is a creator who cares about the visual aesthetics and
              spends his time delighting designers with design enhancement
              plugins.
            </h1>
          </div>
        </div>
      </div>
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Work
