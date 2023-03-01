import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function ULsection() {
  return (
    <ul className="flex items-center">
      <li>
        <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
      </li>
      <li>
        <a className="bg-gradient-to-r from-gray-900 to-purple-700 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
        </li>
    </ul>
  )
}