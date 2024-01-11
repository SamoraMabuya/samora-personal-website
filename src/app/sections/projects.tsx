import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function IconGithub() {
  return (
    <svg viewBox="0 0 1024 1024" fill="currentColor" height="30px" width="30px">
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
    </svg>
  )
}

function IconFigma() {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
      <path
        fill="currentColor"
        d="M8.5 2a3 3 0 000 6h7a3 3 0 100-6h-7zM15.5 9a3 3 0 100 6 3 3 0 000-6zM5.5 12a3 3 0 013-3h3v6h-3a3 3 0 01-3-3zM8.5 16a3 3 0 103 3v-3h-3z"
      />
    </svg>
  )
}

const Projects = () => {
  const projectItems = [
    {
      title: 'Neonize',
      imageUrl: '/neonize-cover.webp',
      description:
        'Neonize is a figma plugin that Figma enthusiasts can use to enhance their designs with glow effects.',
      github: 'https://github.com/SamoraMabuya/neonize',
      liveVersion:
        'https://www.figma.com/community/plugin/1300043926906272268/neonize',
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:w-10/12">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className="relative border-2 border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div onClick={() => window.open(item.liveVersion, '_blank')}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={600}
                  height={500}
                  objectFit="cover"
                  className="rounded-lg"
                />
                <p className="text-xl  mt-2">{item.title}</p>
              </div>
              <hr className="my-2 border-gray-300" />
              <p className="text-md">{item.description}</p>
              <div className="flex justify-between mt-4">
                <Link href={item.github}
                  className="flex items-center cursor-pointer hover:text-blue-500"
                >
                  <IconGithub />
                  <p className="ml-2 ext-md">GitHub</p>
                </Link>
                <Link href={item.liveVersion}
                  className="flex items-center cursor-pointer hover:text-blue-500"
                >
                  <IconFigma />
                  <p className="ml-2 ext-md">Live</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
