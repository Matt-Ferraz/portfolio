import AboutMe from "../molecules/TextAboutMe";
import ImageView from "../atoms/ImageView";

export default function AboutMeSection() {
    return (
        <>
            <ImageView
                width={300}
                height={300}
                path="/apple-avatar.png"
                alt="Avatar"
            />
            <AboutMe
                title="Mateus Ferraz"
                subTitle="Full stack Javascript developer and UI/UX designer"
                color={"white"}
                paragraph="My career started in April 2021, my first job as javascript front-end web developer, i was 15 years old at the time.
          Programming is not only my job, it is my passion, I love to work with problem-solving questions. 
          Then I joined the mobile development and back-end teams, now doing full stack development, including the user experience."
            />
        </>
    );
}
