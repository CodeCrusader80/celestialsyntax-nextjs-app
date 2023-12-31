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
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div className={"footer-gradient"}/>
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <div className={"flex items-center justify-between flex-wrap gap-5"}>
                    <h4 className={"font-bold md:text-[64px] text-[44px] text-white"}>Enter the Metaverse </h4>
                <button type={"button"} className={"flex items-center py-3 px-5 bg-[#25618B] rounded-[32px] gap-[10px]"}>
                    <img src={"/vr-svgrepo-com.svg"} alt={"headset"} className={"w-[25px] h-[25px] object-contain"}/>
                    <span className={"font-normal text-[16px] text-white"}>ENTER METAVERSE</span>
                </button>
            </div>
        </div>
        <div className={"flex flex-col"}>
                <div className={"mt-[10px] mb-[20px] h-[2px] bg-white opacity-10"}/>
            <div className={"flex items-center justify-between flex-wrap gap-4"}>
                <h4 className={"font-extrabold text-[24px] text-white"}>CelesticalSyntax</h4>
                <p className={"font-normal text-[14px] text-white opacity-50"}>
                    Copyright © 2021 - 2023 CelesicalSyntax. All rights reserved.
                </p>
                <div className={"flex gap-4"}>
                    {socials.map((social) => (
                        <a key={social.name} href={social.link} target={"_blank"} rel={"noopener noreferrer"}>
                            <img
                                src={social.url}
                                alt={social.name}
                                className={"w-[24px] h-[24px] object-contain cursor-pointer"}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </motion.footer>
);
export default Footer;