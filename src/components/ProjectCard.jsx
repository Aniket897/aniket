import Button from "./Button";

const ProjectCard = ({ project }) => {
  return (
    // <div className=" bg-conic-gradient p-[2px] rounded-md">
    <div className=" glass text-n-3 border border-gray-600 rounded-md">
      <img className="rounded-tl-md rounded-tr-md" src={project.image} alt="" />
      <div className="flex items-center flex-wrap gap-4 text-gray p-4 border-y border-y-gray-600">
        {project.techStack.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="p-4 flex flex-col gap-y-3">
        <h1 className="font-bold text-xl text-n-1">{project.title}</h1>
        <p className=" text-gray">{project.description}</p>
        <div className="flex items-center gap-4">
          <Button href={project.live}>Live</Button>
          <Button href={project.github}>Github</Button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProjectCard;
