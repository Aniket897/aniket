import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <a
                            href={"https://www.linkedin.com/in/aniket-kangane/"}
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                        >
                            <IoLogoLinkedin />
                        </a>
                        <p className="text-xs">Linkden</p>
                    </div>

                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <a
                            href={"https://github.com/Aniket897"}
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                        >
                            <FaSquareGithub />
                        </a>
                        <p className="text-xs">Github</p>
                    </div>

                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <a
                            href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent('')}&body=${encodeURIComponent('')}`}
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                        >
                            <MdEmail />
                        </a>
                        <p className="text-xs">E-mail</p>
                    </div>

                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <a
                            href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent('')}&body=${encodeURIComponent('')}`}
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                        >
                            <FaSquareWhatsapp />
                        </a>
                        <p className="text-xs">What's App</p>
                    </div>
                </ul>
            </div>
        </Section>
    );
};

export default Footer;
