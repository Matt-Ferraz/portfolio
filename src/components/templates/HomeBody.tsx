import AboutMeSection from '../organisms/AboutMe'
import SocialMedia from '../organisms/SocialMedia'
import Nav from '../organisms/nav'
import MySkills from '../organisms/services'

export default function HomeBody() {
  return (
    <main className="bg-primary px-10">
      <section className="min-h-screen scroll-smooth">
        <Nav />
        <AboutMeSection />
        <div className="mt-64">
        <MySkills />
        </div>
        <SocialMedia />
      </section>
    </main>   
  )
};