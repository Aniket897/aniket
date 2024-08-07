import Section from "./Section";
import SkillBox from "./SkillBox";

const Skills = () => {
  return (
    <Section>
      <div className="w-[90vw] md:w-[70vw] mx-auto mt-[50px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-3xl font-extrabold">
              <span className="text-heading">💻 </span>Skills
            </p>
            <div className="w-[100px] md:w-[300px] h-[1px] bg-heading"></div>
          </div>
        </div>
        <div className="mt-[50px] grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[50px] md:gap-3">
          <SkillBox
            heading="Languages"
            skills={["Javascript", "Python", "Typescript"]}
          />
          <SkillBox
            heading="FrameWorks/Libraries "
            skills={["React", "Express"]}
          />
          <SkillBox
            heading="Tools"
            skills={["Vs code", "Git", "Github", "Postman"]}
          />
          <SkillBox
            heading="Others"
            skills={[
              "HTML",
              "CSS",
              "TailwindCSS",
              "Shadcn",
              "Chakra ui",
              "Mongodb",
              "mongoose",
            ]}
          />
        </div>
      </div>
      {/* <div className="hidden relative justify-center mb-[6.5rem] lg:flex mt-[150px]">
        <img
          src={smallSphere}
          className="relative z-1"
          width={255}
          height={255}
          alt="Sphere"
        />
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
      </div> */}
      <div className="flex items-center justify-between w-[90vw] md:w-[70vw] mx-auto mt-[150px]">
        <div className="flex items-center gap-3">
          <p className="text-3xl font-extrabold">
            <span className="text-heading">⭐ </span>Github Stats
          </p>
          <div className="w-[100px] md:w-[300px] h-[1px] bg-heading"></div>
        </div>
      </div>
      <div className="flex items-center gap-3 mx-auto w-fit min-h-[40vh] max-md:flex-col max-md:w-[90vw] max-md:mt-9">
        {/* <p>
          <img
            src="https://github-readme-stats.vercel.app/api?username=Aniket897&theme=dark&hide_border=false&include_all_commits=true&count_private=true"
            alt="aniket897"
          />
        </p> */}

        <p>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Aniket897&theme=dark&hide_border=false"
            alt="aniket897"
          />
        </p>
      </div>
      {/* <p className="mx-auto w-fit mt-3">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aniket897&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
          alt="aniket897"
        />
      </p> */}
    </Section>
  );
};

export default Skills;


