import { BsFillMoonStarsFill } from 'react-icons/bs'
import AboutMeSection from '../organisms/AboutMe'
import SocialMedia from '../organisms/SocialMedia'

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
        <AboutMeSection />
        <SocialMedia />
      </section>
    </main>   
  )
};