import Image from "next/image";
interface ImageProps {
    width: number;
    height: number;
    path: string;
    alt: string;
}

export default function ImageView(props: ImageProps) {
    const { width, height, path, alt } = props;
    return (
        <div className={"flex items-center justify-center bg-center"}>
            <Image src={path} alt={alt} width={width} height={height} />
        </div>
    );
}
