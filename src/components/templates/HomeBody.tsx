import AboutMeSection from '../organisms/AboutMe'
import SocialMedia from '../organisms/SocialMedia'
import Nav from '../organisms/nav'
import MySkills from '../organisms/services'

export default function HomeBody() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <Nav />
        <AboutMeSection />
        <SocialMedia />
        <MySkills />
      </section>
    </main>   
  )
};