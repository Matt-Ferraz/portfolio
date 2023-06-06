import PageHead from "../templates/PageHead";
import HomeBody from "../templates/HomeBody";

interface HeadProps {
    title: string;
    favIconPath: string;
}

export default function Home(props: HeadProps) {
    return (
        <>
            <PageHead title={props.title} favIconPath={props.favIconPath} />
            <HomeBody />
        </>
    );
}
