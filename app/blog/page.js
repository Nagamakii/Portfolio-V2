import ParticleBackground from '../components/particle.jsx';

export const metadata = {
    title: 'Blog',
    description: 'Evan Quah Portfolio Blog Page',
    image: '/icon.ico',
  };

export default function Page() {
    return (
        <div className="relative">
        <ParticleBackground />
            <h1 className="text-5xl text-center font-mono">Coming Soon...</h1>
        </div>
    )
}