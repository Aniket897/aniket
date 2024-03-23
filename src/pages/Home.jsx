import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { motion } from "framer-motion";


const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
        >
            <Hero />
            <About />
            <Projects />
            <Skills />

        </motion.div>
    )
}

export default Home;