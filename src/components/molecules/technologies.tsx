import SubTitle from "../atoms/SubTitle";
import ImageView from "../atoms/ImageView";
interface Technology {
  id: number;
  label: string;
  key: string;
  img: string;
}

interface Technologies extends Array<Technology> {}

interface TechnologiesProps {
  techs: Technologies;
}

export default function Technologies({techs}: TechnologiesProps) {
  return (
    <div className="flex flex-wrap my-3">
      {techs.map((tech) => (
        <div key={tech.id} className="flex flex-col m-1">
          <ImageView width={150} height={150} path={tech.img} alt={tech.label} bgGradient={false} />
          <SubTitle text={tech.label}/>
        </div>
      ))}
    </div>
  )
}