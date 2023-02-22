import {
  BsFillMoonStarsFill,
  BsDiscord,
  BsLinkedin,
  BsGithub
} from 'react-icons/bs'

export default function SocialMedia() { 
  return (
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
      <BsLinkedin/>
      <BsDiscord/>
      <BsGithub/>
    </div>
  )
};