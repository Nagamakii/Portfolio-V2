import{AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import ParticleBackground from './components/particle';
import Troubleshoot from "../public/Troubleshoot.png";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import memory from "../public/Memory.png";
import files from "../public/Files.png";
import code from "../public/code.png";
import Image from 'next/image'

export default function Page() {
  return (
    <div className="relative">
      <ParticleBackground />

      <head>
        <title>Evan Quah Portfolio</title>
        <meta name="description" content="Blank"></meta>
        <link rel="icon" href="/icon.ico" type="image/x-icon" />
      </head>
      <main className="md:px-20 lg:px-40 relative z-10">
          <section className='min-h-screen'> 
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-mono'>madebyevan :)</h1>
              <ul className='flex items-center'>
              <li><a className='text-white px-4 py-2 font-mono rounded-md ml-8 border-solid border-2 border-purple-400' href='https://www.linkedin.com/in/evan-quah/'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center pt-20'>
            <h2 className='text-5xl py-2 text-purple-400 font-medium max-h-min font-mono'>Evan Quah</h2>
            <h3 className='text-2xl py-2 font-mono'>
              
              System Administrator and Security Student
              
            </h3>
            <p className='text-medium py-5 leading-8 md:text-xl max-w-xl mx-auto font-mono'>
              blah blah blah fix later
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-1'>
            <a href='https://github.com/Nagamakii'>
            <AiFillGithub />
            </a>
            <a href='https://www.linkedin.com/in/evan-quah/'>
            <AiFillLinkedin />
            </a>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-center text-3xl pb-10 font-mono'>Who I am</h3>
            <p className='text-medium pb-10 leading-8'>
            

            </p>
          </div>
            <div className='lg: gap-10 bg-black bg-opacity-75'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 border-solid border-2 border-purple-400'>
                <div className='flex justify-center items-center'>
                  <Image src={memory} width={100} height={100} />
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2 font-mono'>
                  
                  Home Lab
                  
                  </h3>
                <p className='font-mono'>
                
                Using a combination of Raspberry PI's, virutal machines, and other devices, I actively manage a home lab. 
                <br></br>
                Here I host some home automation code, docker containers, and expliotable virtual machines to use as sandbox testing enviornments.
                <br></br>
                My largest acheivement has been hosting a locally running SIEM, using the ELK stack. 

                </p>
                <h4 className='py-4 text-purple-400 font-mono'> Tools I use</h4>
                <p className='text-gray-200 py-1 font-mono'>Linux</p>
                <p className='text-gray-200 py-1 font-mono'>Docker</p>
                <p className='text-gray-200 py-1 font-mono'>Azure</p>
            </div>
            <div className='lg: gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 border-solid border-2 border-purple-400'>
                <div className='flex justify-center items-center'>
                  <Image src={code} width={100} height={100} />
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2 font-mono'>
                  
                  Things I make
                  
                  </h3>
                <p className='font-mono'>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                </p>
                <h4 className='py-4 text-purple-400 font-mono'> Tools I use</h4>
                <p className='text-gray-200 py-1 font-mono'>Nmap</p>
                <p className='text-gray-200 py-1 font-mono'>Wireshark</p>
                <p className='text-gray-200 py-1 font-mono'>Azure</p>
            </div>
          </div>
          <div className='lg: gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 border-solid border-2 border-purple-400'>
                <div className='flex justify-center items-center'>
                  <Image src={files} width={100} height={100} />
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2 font-mono'>
                  
                  Things I make
                  
                  </h3>
                <p className='font-mono'>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                </p>
                <h4 className='py-4 text-purple-400 font-mono'> Tools I use</h4>
                <p className='text-gray-200 py-1 font-mono'>Nmap</p>
                <p className='text-gray-200 py-1 font-mono'>Wireshark</p>
                <p className='text-gray-200 py-1 font-mono'>Azure</p>
            </div>
          </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text 3xl py-1 font-mono'>Portfolio</h3>
            <p className='text-medium py-5 leading-8 font-mono'>
            
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
    </div>
    )
}
