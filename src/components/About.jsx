import { resumeLink } from "../constants/links";
import Button from "./Button";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import { saveAs } from "file-saver";

const About = () => {
  const downloadPdf = () => {
    const pdfUrl = "/aniket_kangane_resume.pdf";
    saveAs(pdfUrl, "aniket_kangane.pdf");
  };

  return (
    <Section>
      <div className="w-[90vw] md:w-[70vw] mx-auto mt-[100px] max-md:text-center ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-3xl font-extrabold">
              <span className="text-heading">👦 </span>About-me
            </p>
            <div className="w-[100px] md:w-[300px] h-[1px] bg-heading"></div>
          </div>
        </div>
        <div className=" mt-[50px] md:mt-[100px] flex items-center justify-between max-md:flex-col max-md:gap-[60px]">
          <div className="md:w-[50%] flex flex-col gap-y-4 text-xl">
            <p className=" text-gray">👋 Hello, i’m Aniket Kangane!</p>

            <p className=" text-gray">
              A passionate FrontEnd developer from India. I've been building
              stuff on the 🌐 web since when I was in 10th standard, I've made
              countless projects and I also posses 🪄 magical powers of using
              react to build 🚀 delightful user interfaces.
            </p>

            <div className="flex items-center gap-4">
              <Button className="max-md:mx-auto" onClick={downloadPdf}>
                Resume
              </Button>
            </div>
          </div>
          <div className="rounded-full overflow-hidden md:w-[30%] aspect-square">
            <img
              className="w-full h-full object-cover"
              src="/profile.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default About;
