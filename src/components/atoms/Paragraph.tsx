export default function Paragraph(props: { text: string }) {
  return (
    <p className="text-md py-5 leading-8 text-gray-800">{ props.text }</p>
  )
};