export default function ULsection() {
  const scroll = (x:number, y: number) => {
    // window.scroll(x, y)
    alert(`${y}`)
  }
  return (
    <ul className="flex items-center">
      <li>
        <a className="text-off-white px-4 py-2 rounded-md ml-8 hover:text-primary hover:bg-off-white hover:rounded-md  duration-700">My resume</a>
      </li>
      <li>
        <a className="text-off-white px-4 py-2 rounded-md ml-8 hover:text-primary hover:bg-off-white hover:rounded-md  duration-700" href="#">My work</a>
      </li>
      <li>
        <a className="text-off-white px-4 py-2 rounded-md ml-8 hover:text-primary hover:bg-off-white hover:rounded-md  duration-700" href="#">About me</a>
      </li>
    </ul>
  )
}
