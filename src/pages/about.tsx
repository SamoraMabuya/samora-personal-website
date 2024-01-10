// pages/about.tsx
import React from 'react'
import Layout from '@/components/layout'
import Image from 'next/image'

const About = () => {
  return (
    <Layout>
      <div>
        <div className="md:w-10/12 mx-auto px-4 py-16 flex flex-col md:flex-row">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl ">
              Samora is an enthusiastic creator focused on creating in demand
              web experiences for his users.
            </h1>
            <h2 className="border-t-2 border-b-2 border-gray-300 text-2xl mt-4 mb-2 py-4 text-center">
              Hi there
            </h2>
            <p className="text-md">
              Samora is an enthusiastic creator known for his blend of technical
              and design abilities, using his skills to create visually
              appealing and functional web experiences for users.
            </p>

            <p>
              Currently, Samora focuses on frontend development and visual
              design at Kriterion, leveraging some of the trendiest and latest
              technologies. Working closely with his team, Samora's role is key
              in conceptualizing designs and translating them into workable,
              wonderful features.
            </p>

            <p>
              Before joining Kriterion in October 2021, Samora was a PHP
              developer under contract at Providence Software Solutions. This
              was his first official developer role and an exciting opportunity.
              Although his first contract role was at Providence, his journey as
              a software developer began before this.
            </p>

            <p>
              In December 2020, Samora received an unexpected opportunity to
              work on a short-term project as an Android developer. This was the
              first time Samora worked on a team of developers and designers. Up
              until this point, Samora worked predominantly on small freelance
              projects as a way to build experience to a limited capacity.
            </p>

            <p>
              His educational background is based in the creative field, having
              obtained his Bachelor's in Film Arts from Open Window, an
              institute based in Centurion, Gauteng.
            </p>

            <p>
              Beyond his professional endeavors, Samora is an avid outdoor
              enthusiast, enjoying activities like hiking and rock climbing, and
              maintaining an active lifestyle through various types of physical
              activities.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10 self-start">
            <Image
              src="/portrait-of-samora.webp" // Replace with your image path
              alt="A picture of Samora"
              width={400}
              height={550}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
