import logo from "../../assets/voip_logo (1)/voip_logo.png";


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
                id="hero-main"
                className=" mb-[50px]  relative  min-h-[100vh] w-[100vw] flex justify-center   px-4   pb-20 md:px-20 desktop:flex-col desktop:items-center "
            >
                <div className="  absolute left-0 bottom-0 bg-gradient-to-t from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-[100%] h-[100px]  bottom-0 z-3"></div>

                <div
                    id="hero-left"
                    className=" mt-[100px] w-[60%] h-[100%] flex flex-col justify-center  gap-[4vmax] desktop:w-[100%]  desktop:mt-[50px] "
                >
                    <div id="hero-left-top" className="  flex flex-col gap-[3vmax]">

                        <h1 className=" text-[50px] relative font-outfit leading-tight  desktop:text-center phone:text-[35px]    ">

                            Revolutionizing the <br />
                            <span className=" text-primary-gradient">
                                Voice Over Internet Protocol <br />
                            </span>

                            through blockchain technology
                        </h1>

                        <p className=" flex leading-tight text-gray-200 text-[18px] w-[80%] tracking-[0.35px] desktop:w-[90%] desktop:text-center desktop:m-auto max-[550px]:w-[100%] ">
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
                                        className=" font-outfit btn text-white   font-medium   text-sm       "
                                    >
                                        Buy Token
                                    </button>
                                </a>
                                <button
                                    // onClick={openPDF}
                                    type="button"
                                    className=" font-outfit btn text-white   font-medium   text-sm       "
                                >
                                    White Paper
                                </button>
                                <a
                                    href="#contract1"
                                    type="button"
                                    className=" font-outfit btn text-white   font-medium   text-sm  "
                                >
                                    Contract
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5 desktop:items-center ">
                        <h3 className="text-xl phone:text-center ">Audited & KYC | 100% Secure & Verified</h3>
                        <div id="shocial-media" className="flex gap-4 items-center ">
                            <a href="">
                                <img src={youtube} width={40} height={40} alt="" />
                            </a>
                            <a href="">
                                <img src={Twitter} width={40} height={40} alt="" />
                            </a>
                            <a href="">
                                <img src={Telegram} width={40} height={40} alt="" />
                            </a>
                            <a href="">
                                <img src={Instagram} width={40} height={40} alt="" />
                            </a>
                            <a href="">
                                <img src={Medium} width={40} height={40} alt="" />
                            </a>
                        </div>
                    </div>


                </div>

                <div
                    id="hero-right"
                    className="relative mt-10 w-[40%] h-[100%] flex justify-center gap-0  desktop:w-[100%] "
                >

                    <div
                        id="hero-right-container"
                        className=" flex flex-col py-5 justify-center gap-9  border-2 border-[#D183FF] min-h-[810px] min-w-[160px] max-w-[600px] overflow-hidden rounded-[30px]   bg-cover bg-opacity-80 bg-center  px-4
                         
                        "

                    >
                        <div className="absolute inset-0 flex items-center justify-center   opacity-50 "
                        >
                            <img className="z-0 w-[80%] blur-sm " src={logo} alt="" />
                        </div>


                        <div
                            id="hero-rc-top "
                            className="w-[100%] z-10  flex flex-col justify-center items-center gap-6 "
                        >
                            <h2 className="font-outfit   text-center text-[3vmax] w-[90%] px-4 desktop:text-[40px] max-[400px]:text-[32px] ">
                                VOIP Finance
                            </h2>

                            <div className="reletive flex left-0 w-[100%] justify-center items-center p-3  ">
                                <p className="text-[17px] leading-tight  text-center  ">
                                    VOIP Finance aims to disrupt the traditional VoIP industry by
                                    leveraging blockchain technology to provide a decentralized,
                                    secure, and cost-effective solution for voice communication.
                                </p>
                            </div>

                            <a href="#" target="blank">
                                <button
                                    type="button"
                                    className=" font-outfit btn text-white   font-medium    text-sm  w-fit    "
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
                                        <img src={logo} width={25} height={25} alt="" />
                                        <button
                                            type="button"
                                            className=" font-outfit  text-black   font-bold   text-sm ">
                                            ETH
                                        </button>
                                    </div>
                                    <div className="flex gap-3 border pl-[1.5vw] pr-[2.7vw] bg-white   py-2 rounded-md ">
                                        <img src={logo} width={25} height={25} alt="" />
                                        <button
                                            type="button"
                                            className=" font-outfit  text-black   font-bold   text-sm      ">
                                            ETH
                                        </button>
                                    </div>
                                    <div className="flex gap-3 border pl-[1.5vw] pr-[2.7vw] bg-white   py-2 rounded-md ">
                                        <img src={logo} width={25} height={25} alt="" />
                                        <button
                                            type="button"
                                            className=" font-outfit  text-black   font-bold   text-sm      ">
                                            ETH
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div id="inputfields " className=" flex flex-col gap-6 items-center  w-[90%]">

                                <div className="space-y-2 w-full">
                                    <h3>Buy with</h3>
                                    <div className="relative  w-full">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <img src={logo} width={20} height={20} alt="" />
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
                                        className=" font-outfit btn text-white   font-medium   text-sm     "
                                    >
                                        Approve
                                    </button>
                                </a>

                            </div>

                            How to Buy VOIP Coins
                        </div>



                    </div>
                </div>
            </div >
        </>
    );
};

export default Hero;
