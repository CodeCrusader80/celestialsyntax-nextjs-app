'use client';

import {motion} from "framer-motion";
import {socials} from "@/constants";
import styles from "@/styles";
import {footerVariants} from "@/utils/motion";

const Footer = () => (
    <motion.footer
        variants={footerVariants}
        initial={"hidden"}
        whileInView={"show"}
        className={`${styles.paddings} py-8 relative`}
    >
        <div className={"footer-gradient"}/>
        <div className={`${styles.innerWidth} mx-auto flex flex-auto gap-8`}>
            <div className={"flex items-center justify-between flex-wrap gap-10"}>
                    <h4 className={"font-bold md:text-[64px] text-[44px] text-white"}>Enter the Metaverse </h4>
                <button type={"button"} className={"flex items-center h-fit py-4 px-8 bg-[#25618B] rounded-[32px] gap-[12px]"}>
                    <img src={"/vr-svgrepo-com.svg"} alt={"headset"} className={"w-[25px] h-[25px] object-contain"}/>
                    <span className={"font-normal text-[16px] text-white"}>ENTER METAVERSE</span>
                </button>
            </div>
            <div className={"flex flex-col"}>
                <div className={"mb-[50px] h-[2px] bg-white opacity-10"}/>
                <div className={"flex items-center justify-between flex-wrap gap-4"}>
                    <h4 className={"font-extrabold text-[24px] text-white"}>CelesticalSyntax</h4>
                </div>
            </div>
        </div>
    </motion.footer>
);
export default Footer;