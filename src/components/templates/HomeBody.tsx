import AboutMeSection from "../organisms/AboutMe";
import SocialMedia from "../organisms/SocialMedia";
import Nav from "../organisms/nav";
import MySkills from "../organisms/services";

export default function HomeBody() {
    return (
        <main className="bg-off-white px-10">
            <section className="min-h-screen scroll-smooth fade-in">
                <Nav text="Welcome" animated={true} />
                <div className="top-in">
                    <AboutMeSection />
                </div>
                <div className="mt-64 fade-in">
                    <MySkills />
                </div>
                <SocialMedia />
            </section>
        </main>
    );
}
