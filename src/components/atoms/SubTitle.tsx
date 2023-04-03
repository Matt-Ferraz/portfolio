export default function SubTitle(props: { text: string, color?: string }) {
    return (
      <h3 className={`text-2xl py-2 text-${props.color ?? ""}`}>{ props.text }</h3>
    )
};