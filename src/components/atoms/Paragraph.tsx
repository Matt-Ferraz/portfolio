export default function Paragraph(props: { text: string; color?: string }) {
    return (
        <p
            className={`text-md py-5 leading-8 text-${
                props.color ?? "primary"
            }`}
        >
            {props.text}
        </p>
    );
}
