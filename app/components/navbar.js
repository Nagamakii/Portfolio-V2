import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='py-10 mb-12 flex justify-around'>
            <h1 className='text-xl font-mono'>madebyevan :)</h1>
                <ul className='flex items-center'>
                    <li>
                        <Link className='text-white px-4 py-2 font-mono rounded-md ml-8 border-solid border-2 border-purple-400' 
                        target="_blank" 
                        href="/Evan_Quah_Resume_TP.pdf">Resume</Link>
                    </li>
                    <li>
                        <Link className='text-white px-4 py-2 font-mono rounded-md ml-8 border-solid border-2 border-purple-400' 
                        target="_blank" 
                        href="/blog">Blog</Link>
                    </li>
                </ul>
      </nav>
    )
}