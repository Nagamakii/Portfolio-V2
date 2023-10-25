import Image from 'next/image'
import {BsAlignCenter, BsFillMoonStarsFill} from 'react-icons/bs'
import{AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

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
            <h3 className='text-2xl py-2'>
              
              System Administrator and Security Student
              
            </h3>
            <p className='text-medium py-5 leading-8'>
              blah blah blah fix later
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3'>
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from text-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} fill objectFit='cover' />
          </div>
        </section>
        
        <section>
          <div>
            <h3 className='text-3xl py-1'>Things I offer</h3>
            <p className='text-medium py-5 leading-8'>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products
            for both business and consumer use.
            
            </p>
          </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <div className='flex justify-center items-center'>
                  <Image src={design} width={100} height={100} />
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                  
                  Things I make
                  
                  </h3>
                <p>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                </p>
                <h4 className='py-4 text-teal-400'> Tools I use</h4>
                <p className='text-gray-200 py-1'>Nmap</p>
                <p className='text-gray-200 py-1'>Wireshark</p>
                <p className='text-gray-200 py-1'>Azure</p>
            </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <div className='flex justify-center items-center'>
                  <Image src={design} width={100} height={100} />
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                  
                  Things I make
                  
                  </h3>
                <p>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                </p>
                <h4 className='py-4 text-teal-400'> Tools I use</h4>
                <p className='text-gray-200 py-1'>Nmap</p>
                <p className='text-gray-200 py-1'>Wireshark</p>
                <p className='text-gray-200 py-1'>Azure</p>
            </div>
          </div>
          <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <div className='flex justify-center items-center'>
                  <Image src={design} width={100} height={100} />
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                  
                  Things I make
                  
                  </h3>
                <p>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                </p>
                <h4 className='py-4 text-teal-400'> Tools I use</h4>
                <p className='text-gray-200 py-1'>Nmap</p>
                <p className='text-gray-200 py-1'>Wireshark</p>
                <p className='text-gray-200 py-1'>Azure</p>
            </div>
          </div>
          </div>
        </section>
      </main>
    </div>
    )
}
