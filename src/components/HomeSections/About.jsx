
import { motion } from "framer-motion"
import abt1 from "../../assets/Images/abt1.png"


const About = () => {
    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, ease: "easeOut" },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };
    return (
        <>
            {/* bg-[url('/assets/aboutbg.svg')] */}
            <div className="flex flex-col items-center justify-center my-[100px]">
                <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '>
                        What Is <span className="text-primary-gradient    " >Voip Finance</span>  
                    </h1>
                    <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                        VOIP Finance aims to disrupt the traditional VoIP industry by leveraging blockchain technology to provide a decentralized, secure, and cost-effective solution for voice communication. The VOIP token serves as the native currency within the VOIP Finance ecosystem, enabling users to
                    </p>
                </div>


                <div id="about-main" className=" relative flex justify-center items-center py-10 min-h-[100vh] gap-10 w-[100vw]  overflow-hidden tablet:flex-col tablet:items-center " >




                    <div id="about-left" className=' flex justify-center items-center h-[90%] w-[40%] tablet:w-[80%] phone:w-[90%]'>
                        <img
                            src={abt1}
                            width={600}
                            height={600}
                            alt="Picture "
                        />
                    </div>

                    <div id="about-right" className=' h-[100%] w-[60%] flex flex-col justify-center items-center    gap-[20px]  tablet:w-[80%]'>
                        <div className='w-[100%] flex flex-col justify-center gap-[30px]'>
                            <div className=" space-y-4 ">
                                <h3 className='  text-primary-gradient text-xl '>ABOUT US</h3>
                                <h1
                                    className='text-5xl oxanium '> <span className="text-primary-gradient font-bold " >VOIP</span>  DeFi Crypto Call
                                </h1>
                            </div>
                            {/* <p className='text-xl leading-tight'> IPCD, a century innovative institution, is a beacon of transformation in organizational dynamics, steadfastly partnering with organizations to elevate their people functions and champion better work and working lives.     </p> */}

                            <motion.ul
                                variants={staggerVariants}
                                initial="hidden"
                                whileInView="visible"


                                className='flex flex-col gap-[20px] w-[85%] tablet:w-[100%] text-[23px]  leading-tight'>
                                <motion.li className=" font-extralight " variants={childVariants}>
                                    <span className="text-3xl font-medium "> Privacy : </span> Make secure calls to anywhere in the world anonymously and hassle free.
                                </motion.li>
                                <motion.li className="font-extralight  " variants={childVariants}>
                                    <span className="text-3xl font-medium "> Benefits : </span> Call Routing, Call Termination, Call Forwarding, Call Conferencing, Direct Inward dialing also.
                                </motion.li>
                                <motion.li className="font-extralight  " variants={childVariants}>
                                    <span className="text-3xl font-medium "> Accessibility : </span> Connect unlimited local and International with your love ones, Families or business clients using blockchain technology.
                                </motion.li>
                                <motion.li className="font-extralight  " variants={childVariants}>
                                    <span className="text-3xl font-medium "> Security : </span> Enjoy end-end Encrypted calls while keeping identity secure with Voip Finance DeFi and Web3 systems.
                                </motion.li>
                                <motion.li className="font-extralight  " variants={childVariants}>
                                    <span className="text-3xl font-medium ">Rewards :</span> Earn rewards and make calls globally. Use your rewards to make and receive calls seamlessly and save your spendings.
                                </motion.li>
                            </motion.ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default About