import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5 px-5 flex flex-col place-items-center inset-x-0 bottom-0">
      <div>
        <h1 className="text-sm font-mono text-center">hi@evanquah.xyz</h1>
      </div>
      <div className="flex gap-4 mt-4">
        <a href="https://github.com/Nagamakii" className="text-white">
          <AiFillGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/evan-quah/" className="text-white">
          <AiFillLinkedin size={24} />
        </a>
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs font-mono">&copy; {new Date().getFullYear()} Evan Quah</p>
      </div>
    </footer>
  );
}