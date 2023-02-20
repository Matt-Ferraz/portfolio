export default function Title(props: { text: string }) {
	return (
		<h2 className="text-5xl py-2 text-purple-700 font-medium">{ props.text }</h2>
	)
};