import Button from "./Button";
import Queote from "./Queote";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

const Hero = () => {
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
            <div className="relative w-[90vw] lg:w-[70vw] mx-auto flex mt-[70px] md:mt-[150px] max-md:flex-col items-center justify-between">
                <div className="md:w-[50%] flex flex-col gap-y-4" >
                    <p className="text-5xl font-extrabold text-n-1">Aniket is a <span className="text-color-1">web designer</span> and <span className="text-color-1">front-end developer</span></p>
                    <p className="text-gray mt-3 text-xl text-n-3">He crafts responsive websites where technologies meet creativity</p>
                    <Button className="w-[150px]" href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent('')}&body=${encodeURIComponent('')}`}>
                        {/* {EmailLink()} */}
                        {/* Email Me */}
                        <a href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent('')}&body=${encodeURIComponent('')}`} className="w-full h-full flex items-center justify-center">
                            Email Me
                        </a>
                    </Button>
                </div>
                <div className="mt-[40px] md:mt-[-80px]">
                    <img src="https://aniket-kangane.vercel.app/heroimg.svg" alt="" />
                    <div className="flex items-center justify-center p-2 border border-gray-600 text-n-3 gap-3 rounded-md">
                        <div className="w-3 h-3 bg-heading"></div>
                        <p className="text-gray">Open for new opportunities
                            <span className="text-n-2"> Nothing</span></p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <BackgroundCircles />
                </div>
            </div>
            <Queote />
            <BottomLine />
        </Section>
    )
}

export default Hero;