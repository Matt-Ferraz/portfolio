import SubTitle from "../atoms/SubTitle";
import ULsection from "../molecules/ul";

interface PropsType {
    text: string,
    animated: boolean
}

export default function Nav(props: PropsType) {
    return (
        <nav className="py-10 mb-12 flex justify-between">
            <div className={props.animated ? "left-in" : ""}>
                <SubTitle text={props.text} />
            </div>
            <div className={props.animated ? "right-in" : ""}>
                <ULsection />
            </div>
        </nav>
    );
}
