import Title from '../atoms/Title'
import SubTitle from '../atoms/SubTitle'
import Paragraph from '../atoms/Paragraph'

interface AboutMeProp {
  title: string,
  subTitle: string,
  paragraph: string
};

export default function AboutMe(props: AboutMeProp) {
  return (
    <div className="text-center p-10">
      <Title text={ props.title } />
      <SubTitle text={ props.subTitle } />
      <Paragraph text={ props.paragraph } />
    </div>
  )
};