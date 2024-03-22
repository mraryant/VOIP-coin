import logo from "../../assets/voip_logo (1)/voip_logo.png";
import eth from "../../assets/Images/eth.png";
import usdt from "../../assets/Images/usdt.png";
import bnb from "../../assets/Images/bnb.png";



import youtube from "../../assets/Images/YouTube.png"
import Twitter from "../../assets/Images/Twitter.png"
import Telegram from "../../assets/Images/Telegram App.png"
import Instagram from "../../assets/Images/Instagram.png"
import Medium from "../../assets/Images/Medium.png"

const Hero = () => {
    // const openPDF = () => {
    //     window.open("/assets/IPCD whitepaper.pdf", "_blank");
    // };

    return (
        <>

            <div
                id="Hero"
                className=" mb-[50px]  relative  min-h-[100vh] w-[100vw] flex justify-center   px-4   pb-20 md:px-20 desktop:flex-col desktop:items-center "
            >


                <div id="blob" className=" max-w-[1246px]  absolute left-0 top-[-10%]  z-0 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1010" viewBox="0 0 1246 1010" fill="none">
                        <g filter="url(#filter0_bdf_1020_171)">
                            <path d="M-63.1577 238.455C13.7903 93.0208 142.965 102.611 263.676 166.478C384.388 230.346 681.873 305.569 604.925 451.003C874.254 658.547 128.005 825.459 7.29294 761.592C-113.419 697.724 -140.106 383.889 -63.1577 238.455Z" fill="#551FE5" fillOpacity="0.3" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1020_171" x="-332.812" y="-104.109" width="1577.82" height="1113.41" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="25.2" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1020_171" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="352" dy="4" />
                                <feGaussianBlur stdDeviation="114.95" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_1020_171" result="effect2_dropShadow_1020_171" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1020_171" result="shape" />
                                <feGaussianBlur stdDeviation="113.15" result="effect3_foregroundBlur_1020_171" />
                            </filter>
                        </defs>
                    </svg>
                </div>




                <div
                    id="hero-left"
                    className=" z-10 mt-[100px] w-[60%] h-[100%] flex flex-col justify-center  gap-[4vmax] desktop:w-[100%]  desktop:mt-[50px] "
                >
                    <div id="hero-left-top" className="  flex flex-col gap-[3vmax]">

                        <h1 className=" text-[50px] font-bold relative font-outfit leading-tight  desktop:text-center phone:text-[35px]    ">

                            Revolutionizing the <br />
                            <span className=" phone:text-[27px] text-primary-gradient">
                                Voice Over Internet Protocol <br />
                            </span>

                            through blockchain technology
                        </h1>

                        <p className=" flex font-light leading-tight text-gray-200 text-[18px] w-[80%] tracking-[0.35px] desktop:w-[90%] desktop:text-center desktop:m-auto max-[550px]:w-[100%] ">
                            Our platform is user-friendly, secure, and designed to provide you with the tools and resources you need to make informed trades and maximize your profits.. Our platform is user-friendly, secure, and designed to

                        </p>
                    </div>

                    <div id="hero-left-bottom" className="flex desktop:justify-center ">
                        <div
                            id="hero-l-bottom-right"
                            className="flex flex-col justify-center   gap-3 max-[760px]:ml-[0px]  "
                        >

                            <div id="hero-bottom-buttons"
                                className="flex  gap-4 phone:flex-wrap phone:justify-center "
                            >
                                <a href="   " target="blank">
                                    <button
                                        type="button"
                                        className=" font-outfit btn2 text-white   font-medium   text-sm       "
                                    >
                                        White Paper
                                    </button>
                                </a>
                                <button
                                    // onClick={openPDF}
                                    type="button"
                                    className=" font-outfit btn2 text-white   font-medium   text-sm       "
                                >
                                    KYC
                                </button>
                                <a
                                    href="#contract1"
                                    type="button"
                                    className=" font-outfit btn2 text-white   font-medium   text-sm  "
                                >
                                    Audit
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5 desktop:items-center ">
                        <h3 className="text-xl phone:text-center ">Audited & KYC | 100% Secure & Verified</h3>
                        <div id="shocial-media" className="flex gap-4 items-center ">
                            <a className=" hover:scale-[1.2] transform-scale duration-200  " href="">
                                <img src={youtube} width={40} height={40} alt="" />
                            </a>
                            <a className=" hover:scale-[1.2] transform-scale duration-200  " href="">
                                <img src={Twitter} width={40} height={40} alt="" />
                            </a>
                            <a className=" hover:scale-[1.2] transform-scale duration-200  " href="">
                                <img src={Telegram} width={40} height={40} alt="" />
                            </a>
                            <a className=" hover:scale-[1.2] transform-scale duration-200  " href="">
                                <img src={Instagram} width={40} height={40} alt="" />
                            </a>
                            <a className=" hover:scale-[1.2] transform-scale duration-200  " href="">
                                <img src={Medium} width={40} height={40} alt="" />
                            </a>
                        </div>
                    </div>


                </div>

                <div
                    id="hero-right"
                    className="relative z-10 mt-10 w-[40%] h-[100%] flex justify-center gap-0  desktop:w-[100%] "
                >

                    <div
                        id="hero-right-container"
                        className=" flex flex-col py-5 justify-center gap-9  border-2 border-[#D183FF] min-h-[810px] min-w-[160px] max-w-[600px] overflow-hidden rounded-[30px]   bg-cover bg-opacity-80 bg-center  px-4
                         
                        "

                    >
                        <div className="absolute inset-0 flex items-center justify-center   opacity-50 "
                        >
                            <img className="z-0 w-[80%] opacity-40 blur-sm " src={logo} alt="" />
                        </div>


                        <div
                            id="hero-rc-top "
                            className="w-[100%] z-10  flex flex-col justify-center items-center gap-6 "
                        >
                            <h2 className="font-outfit font-bold  text-center text-[3vmax] w-[90%] px-4 desktop:text-[40px] max-[400px]:text-[32px] ">
                                Voip Finance
                            </h2>

                            <div className="reletive flex left-0 w-[100%] justify-center items-center p-3  ">
                                <p className="text-[17px] leading-tight  text-center  ">
                                    VOIP Finance aims to disrupt the traditional VoIP industry by
                                    leveraging blockchain technology to provide a decentralized,
                                    secure, and cost-effective solution for voice communication.
                                </p>
                            </div>

                            <a href="#" target="blank" className=" px-5" >
                                <button
                                    type="button"
                                    className="   font-outfit btn2 text-white   font-medium    text-sm  w-fit px-5    "
                                >
                                    Connect Wallet
                                </button>
                            </a>


                        </div>

                        <div
                            id="hero-rc-mid "
                            className="w-[100%]  z-10 flex flex-col justify-center items-center gap-6 "
                        >

                            <div id="pricing">
                                <h2 className="font-outfit  text-center space-x-[2vw]   ">
                                    <span>Listing Price :
                                        $ 0.20</span>
                                    <span> →</span>
                                    <span>Next Price :
                                        $ 0.40</span>
                                </h2>
                            </div>

                            <div id="buy-buttons" className=" w-[90%] space-y-2">

                                <div className=" flex gap-5 flex-wrap  justify-center  ">
                                    <div className="flex gap-3 border pl-[1.5vw] pr-[2.7vw] bg-white   py-2 rounded-md ">
                                        <img src={eth} width={15} height={25} alt="" />
                                        <button
                                            type="button"
                                            className=" font-outfit  text-black   font-bold   text-sm ">
                                            ETH
                                        </button>
                                    </div>
                                    <div className="flex gap-3 border pl-[1.5vw] pr-[2.7vw] bg-white   py-2 rounded-md ">
                                        <img src={usdt} width={25} height={25} alt="" />
                                        <button
                                            type="button"
                                            className=" font-outfit  text-black   font-bold   text-sm      ">
                                            USDT
                                        </button>
                                    </div>
                                    <div className="flex gap-3 border pl-[1.5vw] pr-[2.7vw] bg-white   py-2 rounded-md ">
                                        <img src={bnb} width={25} height={25} alt="" />
                                        <button
                                            type="button"
                                            className=" font-outfit  text-black   font-bold   text-sm      ">
                                            CARD
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div id="inputfields " className=" flex flex-col gap-6 items-center  w-[90%]">

                                <div className="space-y-2 w-full">
                                    <h3>Buy with</h3>
                                    <div className="relative  w-full">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <img src={usdt} width={20} height={20} alt="" />
                                        </div>
                                        <input type="text" id="Amount" className="bg-white border border-gray-300 text-lg text-gray-900   rounded-lg  block w-full ps-10 p-2.5  "
                                            placeholder="Enter Amount"
                                            required
                                        />
                                    </div>

                                </div>


                                <div className="  space-y-2 w-full">
                                    <h3>You will get</h3>
                                    <div className="relative ">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <img src={logo} width={20} height={20} alt="" />
                                        </div>
                                        <input type="text" id="recive" className="bg-white border border-gray-300 text-lg text-gray-900   rounded-lg  block w-full ps-10 p-2.5  "
                                            placeholder="Get Amount"
                                            required
                                        />
                                    </div>

                                </div>

                                <a href="#" target="blank">
                                    <button
                                        type="button"
                                        className=" btn2 font-outfit  text-white   font-medium   text-sm     "
                                    >
                                        Approve
                                    </button>
                                </a>

                            </div>

                            <div className=" flex gap-2  hover:scale-[1.1] transform-scale duration-300  "    >
                                <img src={youtube} alt="" />
                                <p> How to Buy VOIP Coins</p>

                            </div>
                        </div>



                    </div>
                </div>
            </div >
        </>
    );
};

export default Hero;
