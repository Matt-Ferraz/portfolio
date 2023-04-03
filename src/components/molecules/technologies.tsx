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
        <div key={tech.id} className="flex flex-col rounded-xl mx-4 my-2 p-2 duration-700 cursor-pointer hover:bg-off-white items-center justify-center">
          <ImageView width={150} height={150} path={tech.img} alt={tech.label}/>
          <SubTitle text={tech.label} color={"primary"} />
        </div>
      ))}
    </div>
  )
}