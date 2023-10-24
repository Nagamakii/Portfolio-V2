import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import{AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import dog from '..public/dog.png'

export default function Home() {
  return (
    <div>
      <head>
        <title>Evan Quah Portfolio</title>
        <meta name="description" content='Blank'></meta>
        <link rel='icon' href='/favicon.ico' />
      </head>

      <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className='min-h-screen'> 
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>madebyevan</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li><a className='bg-gradiant-to-r from-cyan-500 to teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Evan Quah</h2>
            <h3 className='text-2xl py-2'>System Administrator and Security Student</h3>
            <p className='text-medium py-5 leading-8'>
              blah blah blah fix later
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3'>
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div>
          <div className='relative mx-auto bg-gradient-to-b from text-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={dog} layout='fill' />
          </div>
          </div>
        </section>
      </main>
    </div>
    )
}
