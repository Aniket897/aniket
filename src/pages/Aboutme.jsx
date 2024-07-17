import Button from "../components/Button";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

const Aboutme = () => {
  const EmailLink = () => {
    const recipient = "aniketbkangane9637@gmail.com";
    const subject = "";
    const body = "";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    return (
      <a
        href={mailtoLink}
        className="btn-primary flex items-center justify-center gap-1"
      >
        {" "}
        <ion-icon name="mail-unread-outline"></ion-icon> email me !!
      </a>
    );
  };
  return (
    <Section>
      <motion.div
        className="mt-[100px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <Nav title={"About-me"} des="who i am" />
        <div className="mt-[100px] max-md:gap-y-8 flex max-md:flex-col items-center justify-between w-[90vw] md:w-[70vw] mx-auto max-md:text-center">
          <div className="md:w-[50%] flex flex-col gap-y-4 text-gray">
            <p>👋 Hello, i’m Aniket!</p>

            <p>
              ⭐ A passionate Full Stack Developer from India. I've been
              building stuff on the 🌐 web since when I was in 10th standard,
              I've made countless projects and I also posses 🪄 magical powers
              of using react to build 🚀 delightful user interfaces.
            </p>
            <p>
              ⭐ Proactive Full Stack Developer proficient in MERN Stack <br /> <br />
              ⭐ Solid understanding of Full Stack technologies including HTML,
              CSS, Javascript, ReactJs, NodeJs, ExpressJs, Mongodb. <br />{" "}
              <br /> ⭐ Collaborative team player with strong problem-solving
              skills and attention to detail.
            </p>

            <div className="mt-5  gap-3 flex items-center max-md:mx-auto">
              <Button
                href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent(
                  ""
                )}&body=${encodeURIComponent("")}`}
              >
                email me
              </Button>
              <Button href="https://drive.google.com/file/d/1Oa4ZtRlLyCFHyLRpwOwwuVyzsG5hlISj/view?usp=sharing">
                Resume ~~>
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
        <Skills />
      </motion.div>
    </Section>
  );
};

export default Aboutme;
