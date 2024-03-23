import Button from "./Button";

const ProjectCard = ({ project }) => {
    return (
        // <div className=" bg-conic-gradient p-[2px] rounded-md">
            <div className="bg-n-8 text-n-3 border border-gray-600 rounded-md">
            <img className="rounded-tl-md rounded-tr-md" src={project.image} alt="" />
            <div className="flex items-center flex-wrap gap-4 text-gray p-4 border-y border-y-gray-600">
                {project.techStack.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className="p-4 flex flex-col gap-y-3">
                <h1 className="font-bold text-xl text-n-1">{project.title}</h1>
                <p className=" text-gray">{project.description}</p>
                <div className="flex items-center gap-4">
                    <Button>
                        <a href={project.live} rel="noreferrer" target="_blank" className="btn-primary cursor-pointer">Live</a>
                    </Button>
                    <Button>
                        <a href={project.github} rel="noreferrer" target="_blank" className="btn-primary cursor-pointer">Github</a>
                    </Button>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default ProjectCard;