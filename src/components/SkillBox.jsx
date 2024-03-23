
const SkillBox = ({heading , skills}) => {
  return (
    <div className="border border-gray-600 h-fit rounded-md">
        <div className="border-b p-3 border-b-gray-600">
        <p className="text-center">{heading}</p>
        </div>
        <div className="p-3 text-n-3">
            {skills.map((item , index) => <p key={index}>{item}</p>)}
        </div>
    </div>
  )
}

export default SkillBox;