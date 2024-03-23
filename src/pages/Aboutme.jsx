import Button from "../components/Button";
import Nav from "../components/Nav"
import Section from "../components/Section";
import Skills from "../components/Skills";
import { motion } from "framer-motion";



const Aboutme = () => {
    const EmailLink = () => {
        const recipient = 'aniketbkangane9637@gmail.com';
        const subject = '';
        const body = '';

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        return (
            <a href={mailtoLink} className="btn-primary flex items-center justify-center gap-1"> <ion-icon name="mail-unread-outline"></ion-icon> email me !!</a>
        );
    }
    return (
        <Section>
            <motion.div className="mt-[100px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
            >
                <Nav title={"About-me"} des="who i am" />
                <div className="mt-[100px] max-md:gap-y-8 flex max-md:flex-col items-center justify-between w-[70vw] mx-auto">
                    <div className="md:w-[50%] flex flex-col gap-y-4 text-gray text-xl">
                        <p>👋 Hello, i’m Aniket!</p>

                        <p>a self-taught passionate FrontEnd developer from India. I've been building stuff on the 🌐 web since when I was in 10th standard, I've made countless projects and I also posses 🪄 magical powers of using react to build 🚀 delightful user interfaces.
                        </p>
                        <p>
                            Proactive React developer proficient in JavaScript and React.js framework. Solid understanding of frontend technologies including HTML, CSS. Collaborative team player with strong problem-solving skills and attention to detail. Experienced in integrating frontend components with server-side logic using Git for collaborative projects.</p>

                        <div className="mt-5 max-md:flex-col gap-y-3 flex items-center gap-1">
                            <Button>
                                {EmailLink()}
                            </Button>
                            <Button>
                                <a href="https://drive.google.com/file/d/1Oa4ZtRlLyCFHyLRpwOwwuVyzsG5hlISj/view?usp=sharing" target="_blank" className="btn-primary">Resume ~~></a>
                            </Button>
                        </div>
                    </div>
                    <div className="rounded-full overflow-hidden md:w-[30%] aspect-square">
                        <img className="w-full h-full object-cover" src="/profile.png" alt="" />
                    </div>
                </div>
                <Skills />
            </motion.div>
        </Section>
    )
}

export default Aboutme;