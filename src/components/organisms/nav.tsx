import SubTitle from '../atoms/SubTitle'
import ULsection from '../molecules/ul'

export default function Nav() { 
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <SubTitle text="Welcome stranger!"/>
      <ULsection />
  </nav>
  )
};