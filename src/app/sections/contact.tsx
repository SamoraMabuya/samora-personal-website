import {
  IconTwitter,
  IconGithub,
  IconBxlLinkedinSquare,
} from '@/components/Icons'
import Link from 'next/link'

const Contact = () => {
  return (
    <section id="contact-section" className="py-12">
      <div className="container mx-auto px-4 text-center md:w-10/12">
        <div className="container mx-auto px-4 text-center border-t border-gray-400 py-8">
          <h2 className="text-2xl mb-4">Feel free to shoot me an email</h2>
          <Link
            href="mailto:samora.sm.sam@gmail.com"
            className="text-lg block hover:text-blue-500 mb-4"
          >
            <p>samora.sm.sam@gmail.com</p>
          </Link>
          <div className="flex justify-center space-x-4">
            <IconTwitter />
            <IconGithub />
            <IconBxlLinkedinSquare />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
