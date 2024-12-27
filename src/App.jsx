import { Profiler } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className='overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 h-full'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Profile />
        <AboutMe />
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contacts/>

      </div>
    </div>
  )
}

export default App