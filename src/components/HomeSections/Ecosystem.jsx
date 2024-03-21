import echo from "../../assets/Images/echo.png"

const Ecosystem = () => {
    return (
        <>
            <div id="Ecosystem" className="flex z-10 gap-20 flex-col bg-cover min-h-screen bg-no-repeat   bg-left bg-[url(/ecosystem.png)] items-center justify-center my-20">
                <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '>
                        Voip Finance   <span className="text-primary-gradient    " >Ecosystem  </span>
                    </h1>
                    <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                        VOIP Finance aims to disrupt the traditional VoIP industry by leveraging blockchain technology to provide a decentralized, secure, and cost-effective solution for voice communication. The VOIP token serves as the native currency within the VOIP Finance ecosystem, enabling users to
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-28 laptop:gap-10 " >


                    <div className="brradis max-w-[352px] min-h-[420px] origin-top-left   bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-3 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-4 echosystem-gradient rounded-full " >
                                <img src={echo} alt="" />
                            </div>
                            <div className="text-3xl text-center">
                                <h3>Introducing Voip Token and DeFi Integration  </h3>
                            </div>
                            <div className=" text-center" >
                                Enter Voip Finance (DeFi) platform, revolutionizing the VoIP ecosystem with its innovative token-based solution. Say goodbye to cumbersome KYC procedures and hello to anonymous calls, safeguarded by Voip DeFi Direct Calls, ensuring your peace of mind.

                            </div>
                        </div>
                    </div>

                    <div className="brradis max-w-[352px] min-h-[420px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-3 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-4 echosystem-gradient rounded-full " >
                                <img src={echo} alt="" />
                            </div>
                            <div className="text-3xl text-center">
                                <h3>Empowering Communication with DeFi Web3 Integration  </h3>
                            </div>
                            <div className=" text-center" >
                                Voip Finance is a world where your Erc-20 DeFi/Web3 wallet seamlessly connects with a secure Voip DeFi calling system, backed by multi-layered blockchain technology.

                            </div>
                        </div>
                    </div>

                    <div className="brradis max-w-[352px] min-h-[420px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-3 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-4 echosystem-gradient rounded-full " >
                                <img src={echo} alt="" />
                            </div>
                            <div className="text-3xl text-center">
                                <h3>Effortless Business Communication with Direct Inward Dial  </h3>
                            </div>
                            <div className=" text-center" >
                                Voip {"Finance's"} Direct Inward Dial feature allows businesses to seamlessly receive calls from anywhere in the world, empowering them with end-to-end control over their communication channels.

                            </div>
                        </div>
                    </div>

                    <div className="brradis max-w-[352px] min-h-[420px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-3 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-4 echosystem-gradient rounded-full " >
                                <img src={echo} alt="" />
                            </div>
                            <div className="text-3xl text-center">
                                <h3> Stake and Earn Rewards: The Future of VoIP  </h3>
                            </div>
                            <div className=" text-center" >
                                Users who stake via VoIP can participate in the growth of the ecosystem while reaping the benefits of their investment.

                            </div>
                        </div>
                    </div>

                    <div className="brradis max-w-[352px] min-h-[420px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-3 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-4 echosystem-gradient rounded-full " >
                                <img src={echo} alt="" />
                            </div>
                            <div className="text-3xl text-center">
                                <h3> Defi Web3 PBX  </h3>
                            </div>
                            <div className=" text-center" >
                                Integrating DeFi and Web3 principles into the PBX system within the VoIP ecosystem can unlock new opportunities for innovation, efficiency, and decentralization.
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Ecosystem