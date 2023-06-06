import Head from "next/head";

interface HeadProps {
    title: string;
    favIconPath: string;
}

export default function PageHead(props: HeadProps) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href={props.favIconPath} />
        </Head>
    );
}
