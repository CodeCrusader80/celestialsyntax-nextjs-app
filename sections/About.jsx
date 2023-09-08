'use client';

import {motion} from "framer-motion";
import styles from "@/styles";
import {TypingText} from "@/components";
import {fadeIn, staggerContainer} from "@/utils/motion";


const About = () => (
    <section
    className={`${styles.paddings} relative z-10`}
    >
        <div className={"gradient-02 z-0"}/>
        <motion.div
            variants={staggerContainer}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.25}}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText
                title={"| About Celestycalsyntax"}
                textStyles={"text-centered"}
            />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className={"mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"}
            >
                <span className={"font-extrabold text-white"}>Metaverse</span> a potential evolution of the internet, offers users a seamless blend of physical and digital experiences. It can provide immersive social interactions, diverse entertainment, and endless learning opportunities. <span className={"font-extrabold text-white"}>Imagine a world</span> where you can <span className={"font-extrabold text-white"}>work</span>, <span className={"font-extrabold text-white"}>play</span>, and <span className={"font-extrabold text-white"}>connect</span> like never before, transcending boundaries and unlocking new horizons in technology and human connection.
            </motion.p>
            <motion.img
                variants={fadeIn('up', 'tween', 0.3, 1)}
                src={"/arrow-down-svgrepo-com.svg"}
                alt={"arrow down"}
                className={"w-[18px] h-[28px] object-contain mt-[28px]"}
            />
        </motion.div>
    </section>
);

export default About;