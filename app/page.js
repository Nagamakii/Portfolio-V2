import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import ParticleBackground from './components/particle';
import memory from "../public/Memory.png";
import files from "../public/Files.png";
import code from "../public/code.png";
import Image from 'next/image';

export const metadata = {
  title: 'Home',
  description: 'Evan Quah Portfolio Main Page',
  image: '/icon.ico',
};

export default function Page() {
  return (
    <div className="relative">
      <ParticleBackground />
      <main className="md:px-20 lg:px-40 relative z-10">
        <section className='min-h-screen'> 
          <div className='pt-20'>
            <div className='text-center pt-20'>
              <p className='font font-mono'>Hi! I'm</p>
              <h2 className='text-5xl py-2 text-purple-400 font-medium max-h-min font-mono'>Evan</h2>
              <h3 className='text-2xl py-2 font-mono'>SysAdmin and Cybersecurity Student</h3>
              <p className='text-medium py-5 leading-8 md:text-xl max-w-xl mx-auto font-mono'>I like to build fun things</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-1'> 
              <a href='https://github.com/Nagamakii'>
                <AiFillGithub />
              </a>
              <a href='https://www.linkedin.com/in/evan-quah/'>
                <AiFillLinkedin />
              </a>
            </div> 
          </div>
        </section>
        <section>
<div>
  <h3 className='text-center text-3xl pb-1 font-mono'>Personal Projects</h3>
  <p className='text-medium pb-10 leading-8'>
  </p>
</div>
  <div className='lg: gap-10 bg-black bg-opacity-100'>
    <div className='text-center shadow-lg p-10 rounded-xl my-10 border-solid border-2 border-purple-400'>
      <div className='flex justify-center items-center'>
        <Image src={memory} width={100} height={100} />
      </div>
      <h3 className='text-lg font-medium pt-8 pb-2 font-mono'>
        
        Cybersecurity Home Lab

        </h3>
        
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-800"></hr>

      <p className='font-mono'>
      
      Using a combination of Raspberry PI's, virutal machines, and other devices, I actively manage a <span className="text-purple-400">Linux</span> based home lab. 

      Here I host some home automation code, <span className="text-purple-400">Docker</span> containers, and expliotable virtual machines to use as sandbox testing enviornments.
      
      I self-host a SIEM and XDR servers using <span className="text-purple-400">Wazuh</span> in this enviornment. 

      </p>
      <h4 className='py-4 text-purple-400 font-mono'>Tools</h4>
      <p className='text-gray-200 py-1 font-mono'>Linux</p>
      <p className='text-gray-200 py-1 font-mono'>Docker</p>
      <p className='text-gray-200 py-1 font-mono pb-8'>Wazuh</p>
      <a className='text-white px-10 py-2 font-mono rounded-md border-solid border-2 border-purple-400 justify-center' href='https://github.com/Nagamakii/Homelab'>Project Page</a>
  </div>
  <div className='lg: gap-10'>
    <div className='text-center shadow-lg p-10 rounded-xl my-10 border-solid border-2 border-purple-400'>
      <div className='flex justify-center items-center'>
        <Image src={code} width={150} height={150} />
      </div>
      <h3 className='text-lg font-medium pt-8 pb-2 font-mono'>
        
        NextJS Portfolio Website
        
        </h3>

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-800"></hr>

      <p className='font-mono'>
      
      A portfolio website built on <span className="text-purple-400">NextJS</span> and hosted on <span className="text-purple-400">Cloudflare</span>.
      
      Leveraging <span className="text-purple-400">Tailwind CSS</span> and ParticlesJs, this website is a simple and clean way to showcase my projects and skills.

      Focusing on interactivity and responsiveness, this website became a great way for me to learn new technologies and frameworks.
      
      </p>
      <h4 className='py-4 text-purple-400 font-mono'>Tools</h4>
      <p className='text-gray-200 py-1 font-mono'>NextJS</p>
      <p className='text-gray-200 py-1 font-mono'>Cloudflare</p>
      <p className='text-gray-200 py-1 font-mono pb-8'>Tailwind CSS</p>
      <a className='text-white px-10 py-2 font-mono rounded-md border-solid border-2 border-purple-400 justify-center' href='https://github.com/Nagamakii/Portfolio-V2'>Project Page</a>
  </div>
</div>
<div className='lg: gap-10'>
    <div className='text-center shadow-lg p-10 rounded-xl my-10 border-solid border-2 border-purple-400'>
      <div className='flex justify-center items-center'>
        <Image src={files} width={125} height={125} />
      </div>
      <h3 className='text-lg font-medium pt-8 pb-2 font-mono'>
        
        Ethical Hacking
        
        </h3>

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-800"></hr>

      <p className='font-mono'>

        I use <span className="text-purple-400">HackTheBox</span> and <span className="text-purple-400">TryHackMe</span> to learn and practice my skills in <span className="text-purple-400">penetration testing</span> and <span className="text-purple-400">network security</span>.

        I have completed multiple boxes on both platforms, and have learned about multiple tools, including <span className="text-purple-400">MetaSploit</span>, <span className="text-purple-400">Burpsuite</span>, and <span className="text-purple-400">Nmap</span> in the process.

      </p>
      <h4 className='py-4 text-purple-400 font-mono'>Tools</h4>
      <p className='text-gray-200 py-1 font-mono'>Virtual Machines</p>
      <p className='text-gray-200 py-1 font-mono'>Nmap</p>
      <p className='text-gray-200 py-1 font-mono'>Burpsuite</p>
      <p className='text-gray-200 py-1 font-mono'>MetaSploit</p>
      
  </div>
</div>
</div>
</section>
      </main>
    </div>
  );
}