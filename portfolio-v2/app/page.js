'use client'
import Image from 'next/image'
import{AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import ParticleBackground from './Components/ParticleBackground';
import { tsParticles } from "tsparticles-engine";
import Particles from 'react-tsparticles';

export default function Page() {
  return (  
    <div>
      <ParticleBackground>
        <head>
          <title>Evan Quah Portfolio</title>
            <meta name="description" content='Blank'></meta>
            <link rel='icon' href='/icon.ico' type='image/x-icon'/>
        </head>
        <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
          <section className='min-h-screen'> 
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl'>madebyevan :)</h1>
              <ul className='flex items-center'>
              <li><a className='text-white px-4 py-2 rounded-md ml-8 border-solid border-2 border-purple-400' href=''>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-purple-400 font-medium'>Evan Quah</h2>
            <h3 className='text-2xl py-2'>
              
              System Administrator and Security Student
              
            </h3>
            <p className='text-medium py-5 leading-8 md:text-xl max-w-xl mx-auto'>
              blah blah blah fix later
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3'>
            <a href='https://github.com/Nagamakii'>
            <AiFillGithub />
            </a>
            <a href='https://www.linkedin.com/in/evan-quah/'>
            <AiFillLinkedin />
            </a>
          </div>
          <div className='derrelative mx-auto bg-gradient-to-b from text-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} />
          </div>
        </section>
        
        <section>
          <div>
            <h3 className='text-3xl py-1'>Who I am</h3>
            <p className='text-medium py-5 leading-8'>
            
            <span className="text-purple-400"> Comptia, A+, Network+, and Security + certified. </span> As a tech enthusiast with a deep fascination for cybersecurity, I'm on a mission to safeguard the digital world from evolving threats.
            My journey into the realm of cybersecurity started with a strong foundation in my internship with Cybati, 
            creating and simulating SCADA and OT devices for use in cybersecurity conferences.
            I continued this learning and applied it during my work as a systems administrator. I managed and secured the office 365 tenant, SFTP server, and CRM systems. 
            I'm excited to leverage this knowledge to protect organizations and individuals from cyber risks.

            </p>
          </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 border-solid border-2 border-purple-400'>
                <div className='flex justify-center items-center'>
                  <Image src={design} width={100} height={100} />
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                  
                  Things I make
                  
                  </h3>
                <p>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                </p>
                <h4 className='py-4 text-purple-400'> Tools I use</h4>
                <p className='text-gray-200 py-1'>Nmap</p>
                <p className='text-gray-200 py-1'>Wireshark</p>
                <p className='text-gray-200 py-1'>Azure</p>
            </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 border-solid border-2 border-purple-400'>
                <div className='flex justify-center items-center'>
                  <Image src={design} width={100} height={100} />
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                  
                  Things I make
                  
                  </h3>
                <p>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                </p>
                <h4 className='py-4 text-purple-400'> Tools I use</h4>
                <p className='text-gray-200 py-1'>Nmap</p>
                <p className='text-gray-200 py-1'>Wireshark</p>
                <p className='text-gray-200 py-1'>Azure</p>
            </div>
          </div>
          <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 border-solid border-2 border-purple-400'>
                <div className='flex justify-center items-center'>
                  <Image src={design} width={100} height={100} />
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                  
                  Things I make
                  
                  </h3>
                <p>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                </p>
                <h4 className='py-4 text-purple-400'> Tools I use</h4>
                <p className='text-gray-200 py-1'>Nmap</p>
                <p className='text-gray-200 py-1'>Wireshark</p>
                <p className='text-gray-200 py-1'>Azure</p>
            </div>
          </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text 3xl py-1'>Portfolio</h3>
            <p className='text-medium py-5 leading-8'>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            <span className="text-purple-400"> agencies </span>
            consulted for <span className="text-purple-400">startups </span>
            and collaborated with talanted people to create digital products
            for both business and consumer use.
            
            </p>
          </div>
        </section>
        </main>
      </ParticleBackground>
    </div>
    )
}
