import AboutMeSection from '../organisms/AboutMe'

import {
  BsFillMoonStarsFill,
  BsDiscord,
  BsLinkedin,
  BsGithub
} from 'react-icons/bs'
import Image from 'next/image'


export default function HomeBody() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Welcome!</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <a className="bg-gradient-to-r from-gray-900 to-purple-700 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
          </ul>
        </nav>
        <div className="relative mx-auto bg-gradient-to-b from-purple-700 flex justify-center items-center rounded-full w-80 h-80 mt-20">
          <Image src="/../public/my-avatar.png" alt="avatar" width={300} height={300}/>
        </div>
        <AboutMeSection />
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <BsLinkedin/>
          <BsDiscord/>
          <BsGithub/>
        </div>
      </section>
    </main>   
  )
};