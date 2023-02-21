import AboutMe from '../molecules/TextAboutMe'
import Avatar from '../atoms/Avatar'

export default function AboutMeSection() {
  return (
    <>
      <Avatar
        width={300}
        height={300}
        path="/../public/my-avatar.png"
      />
      <AboutMe
        title="Mateus Ferraz"
        subTitle="Full stack Javascript developer and UI/UX designer"
        paragraph="My career started in April 2021, my first job as javascript front-end web developer, i was 15 years old at the time.
          Programming is not only my job, it is my passion, I just love to work with problem-solving and logical questions.
          Lately, I joined the mobile development and back-end teams, now doing full stack development, including the user experience."
      />
    </>    
  )
};