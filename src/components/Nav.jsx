
const Nav = ({title , des}) => {
  return (
    <div className="w-[90vw] md:w-[70vw] mx-auto">
        <p className="font-extrabold text-4xl mt-[60px]"><span className="text-heading">/</span>{title}</p>
        <p className="mt-5 text-gray">{des}</p>
    </div>
  )
}

export default Nav