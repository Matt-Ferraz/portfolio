export default function Title(props: { text: string; color?: string }) {
    return (
        <h2 className={`text-5xl py-2 text-${props.color ?? "primary"}`}>
            {props.text}
        </h2>
    );
}
