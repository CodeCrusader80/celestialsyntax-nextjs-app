'use client';

import {motion} from "framer-motion";
import styles from "@/styles";
import {fadeIn} from "@/utils/motion";

const ExploreCard = ({id, imgUrl, title, index, active, handleClick}) => (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative ${active === id ? `lg:flex-[3.5] flex-[10]` : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[100px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
        onClick={() => handleClick(id)}
    >
        <img
            src={imgUrl}
            alt={title}
            className={"absolute w-full lg:h-full max-[1264px]:h-full object-cover rounded-[24px]"}
        />
        {active !== id ? (
            <h3 className={"font-semibold text-2xl text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] max-[1000px]:text-s "}>
                {title}
            </h3>
        ) : (
            <div className={"absolute bottom-0 p-8 justify-start w-full flex-col rounded-b-[14px]"}>
                <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1000px]:rounded-[10px] max-[1000px]:mb-[5px]`}>
                    <img
                    src={"/vr-svgrepo-com.svg"}
                    alt={"headset"}
                    className={"w-1/2 h-1/2 object-contain"}
                    />
                </div>
                <p className={"font-normal text-[16px] leading-[20px] text-white uppercase"}>
                    Enter the Metaverse
                </p>
                <h2 className={"mt-[15px] font-semibold text-[17px] text-white max-[1000px]:mt-[0px]"}>
                    {title}
                </h2>
            </div>
        )}
    </motion.div>
);

export default ExploreCard;