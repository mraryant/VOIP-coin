
import tokobg from "../../assets/Images/tokenomics.png"
import toko from "../../assets/Images/tokendistribution.png"

const Tokenomics = () => {
    return (
        <>
            <div id="toko-main" className=" relative flex gap-20 flex-col   min-h-screen bg-no-repeat    items-center justify-center my-20">

                <div className="absolute left-0 top-[-10%]  phone:top-[-10%] z-0" >
                    <svg xmlns="http://www.w3.org/2000/svg" width={1232} height={1130} viewBox="0 0 1232 1130" fill="none">
                        <g filter="url(#filter0_bdf_1020_136)">
                            <path d="M650 577.095C650 709.48 365.697 896 237.418 896C109.14 896 -130 848.957 -130 716.572C-130 584.187 9.64522 227 137.923 227C266.202 227 650 444.71 650 577.095Z" fill="#551FE5" fillOpacity="0.35" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1020_136" x="-356.3" y="0.699997" width="1588.2" height="1129.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="25.2" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1020_136" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx={352} dy={4} />
                                <feGaussianBlur stdDeviation="114.95" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_1020_136" result="effect2_dropShadow_1020_136" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1020_136" result="shape" />
                                <feGaussianBlur stdDeviation="113.15" result="effect3_foregroundBlur_1020_136" />
                            </filter>
                        </defs>
                    </svg>

                </div>

                <div className=" z-10 text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '>
                        <span className="text-primary-gradient    " >Tokenomics </span>
                    </h1>
                    <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                        VOIP Finance aims to disrupt the traditional VoIP industry by leveraging blockchain technology to provide a decentralized, secure, and cost-effective solution for voice communication. The VOIP token serves as the native currency within the VOIP Finance ecosystem, enabling users to
                    </p>
                </div>

                <div>
                    <div className=" z-10 relative object-cover flex justify-center items-center">
                        <div>
                            <img src={tokobg} alt="" id="bgimg" />
                        </div>

                        <div className=" absolute  object-contain w-[100%] h-[100%] flex justify-center items-center ">
                            <img src={toko} alt="" className="  w-[90%] " id="bgimg" />
                        </div>
                    </div>
                </div>

                <div className="flex z-10   max-w-[1300px] flex-wrap justify-center " >


                    <div className="w-[400.51px] phone:max-w-[310px]  h-[87px] mx-4 my-3 ">
                        <div className=" flex phone:max-w-[400px] justify-between  gap-5  p-6   bg-gradient-to-b from-indigo-500 to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Token Name</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">VOIP Finance</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex   justify-between gap-5  p-6   bg-gradient-to-b from-indigo-500 to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Symbol</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">VOIP</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex justify-between  gap-5  p-6   bg-gradient-to-b from-indigo-500 to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Decimal</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">18</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex justify-between  gap-5  p-6   bg-gradient-to-b from-indigo-500 to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Network</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">ERC20</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex justify-between  gap-5  p-6   bg-gradient-to-b from-indigo-500 to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
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