import Image from 'next/image'
interface ImageProps {
  width: number,
  height: number,
  path: string,
  alt: string,
  bgGradient: boolean
}

export default function ImageView(props: ImageProps) {
  const { width, height, path, alt, bgGradient } = props;
  return (
    <div
      className={
        bgGradient ?
          "relative mx-auto bg-gradient-to-b from-purple-700 flex justify-center items-center rounded-full w-80 h-80 mt-20"
          :
          "flex items-center justify-center bg-center"
        }>
      <Image src={path} alt={alt} width={width} height={height}/>
    </div>
  )
};