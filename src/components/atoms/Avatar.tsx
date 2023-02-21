import Image from 'next/image'
interface AvatarProp {
  width: number,
  height: number,
  path: string
}

export default function Avatar(props: AvatarProp) {
  const { width, height, path } = props;
  return (
    <div className="relative mx-auto bg-gradient-to-b from-purple-700 flex justify-center items-center rounded-full w-80 h-80 mt-20">
      <Image src={path} alt="avatar" width={width} height={height}/>
    </div>
  )
};