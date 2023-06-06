import Title from "../atoms/Title";
import SubTitle from "../atoms/SubTitle";
import Paragraph from "../atoms/Paragraph";

interface AboutMeProp {
    title: string;
    subTitle: string;
    paragraph: string;
    color: string;
}

export default function AboutMe(props: AboutMeProp) {
    return (
        <div className="text-center p-10">
            <Title text={props.title} color={"primary"} />
            <SubTitle text={props.subTitle} color={"primary"} />
            <Paragraph text={props.paragraph} color={"primary"} />
        </div>
    );
}
