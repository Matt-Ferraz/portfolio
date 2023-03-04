import SubTitle from "../atoms/SubTitle";
import ImageView from "../atoms/ImageView";
export interface Technology {
  id: number;
  label: string;
  key: string;
  img: string;
}

interface Technologies extends Array<Technology> {}

interface TechnologiesProps {
  techs: Technology[]
}

export default function Technologies({ techs }: TechnologiesProps) {
  return (
    <div className="flex flex-wrap my-3 justify-center">
      {techs.map((tech) => (
        <div key={tech.id} className="flex flex-col rounded-xl mx-4 my-2 p-2 duration-700 cursor-pointer items-center justify-center shadow-xl hover:shadow-gray-700">
          <ImageView width={150} height={150} path={tech.img} alt={tech.label} bgGradient={false} />
          <SubTitle text={tech.label}/>
        </div>
      ))}
    </div>
  )
}