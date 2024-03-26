
import tokobg from "../../assets/Images/tokenomics.png"
import toko from "../../assets/Images/tokendistribution.png"
import { motion } from "framer-motion"

const Tokenomics = () => {
    return (
        <>
            <div id="Tokenomics" className=" overflow-x-hidden relative flex gap-20 flex-col   min-h-screen bg-no-repeat    items-center justify-center my-20">

                <div className=" w-[100%] h-[100%] absolute left-[-30%] top-[-10%]  tablet:w-[150%]    z-0" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="  w-[100%] h-[100%] " viewBox="0 0 1440 1627" fill="none">
                        <g filter="url(#filter0_bdf_1020_146)">
                            <path d="M1062.35 828.378C1063.2 992.04 742.412 1215.63 586.143 1216.43C429.874 1217.24 306.85 964.752 306.005 801.089C305.159 637.427 619.728 411.274 775.998 410.467C932.267 409.661 1061.51 664.715 1062.35 828.378Z" fill="#6721E6" fillOpacity="0.6" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1020_146" x="-103.797" y="0.665588" width="1748.05" height="1625.57" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="45.7" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1020_146" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx={352} dy={4} />
                                <feGaussianBlur stdDeviation="114.95" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_1020_146" result="effect2_dropShadow_1020_146" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1020_146" result="shape" />
                                <feGaussianBlur stdDeviation="204.9" result="effect3_foregroundBlur_1020_146" />
                            </filter>
                        </defs>
                    </svg>

                </div>

                <div className=" z-10 text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '>
                        <span className="text-primary-gradient    " >Tokenomics </span>
                    </h1>
                    {/* <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                        VOIP Finance aims to disrupt the traditional VoIP industry by leveraging blockchain technology to provide a decentralized, secure, and cost-effective solution for voice communication. The VOIP token serves as the native currency within the VOIP Finance ecosystem, enabling users to
                    </p> */}
                </div>

                <div>
                    <div className=" z-10 relative object-cover flex justify-center items-center">
                        <div>
                            <img src={tokobg} alt="" id="bgimg" />
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            transition={{
                                duration: 1,
                                ease: [0.6, 0.01, -0.05, 0.9],

                            }}
                            whileInView={{ scale: [0.5, 0.95] }}

                            className=" absolute   top-[17px] object-contain w-[100%] h-[100%] flex justify-center items-center ">
                            <img src={toko} alt="" className="  w-[100%] " id="bgimg" />
                        </motion.div>
                    </div>
                </div>

                <div className="flex z-10   max-w-[1300px] flex-wrap justify-center " >


                    <div className="w-[400.51px] phone:max-w-[310px]  h-[87px] mx-4 my-3 ">
                        <div className=" flex phone:max-w-[400px] justify-between  gap-5  p-6   bg-gradient-to-b from-[#353475] to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Token Name</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">Voip Finance</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex   justify-between gap-5  p-6    bg-gradient-to-b from-[#353475] to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Symbol</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">VOIP</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex justify-between  gap-5  p-6   bg-gradient-to-b from-[#353475] to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Decimal</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">18</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex justify-between  gap-5  p-6   bg-gradient-to-b from-[#353475] to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Network</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">ERC20</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex justify-between  gap-5  p-6   bg-gradient-to-b from-[#353475] to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Supply</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">1B</div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Tokenomics