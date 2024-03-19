
import tokobg from "../../assets/Images/tokenomics.png"
import toko from "../../assets/Images/tokendistribution.png"

const Tokenomics = () => {
    return (
        <>
            <div id="toko-main" className="flex gap-20 flex-col   min-h-screen bg-no-repeat    items-center justify-center my-20">

                <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '>
                        <span className="text-primary-gradient    " >Tokenomics </span>
                    </h1>
                    <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                        VOIP Finance aims to disrupt the traditional VoIP industry by leveraging blockchain technology to provide a decentralized, secure, and cost-effective solution for voice communication. The VOIP token serves as the native currency within the VOIP Finance ecosystem, enabling users to
                    </p>
                </div>

                <div>
                    <div className=" relative object-cover flex justify-center items-center">
                        <div>
                            <img src={tokobg} alt="" id="bgimg" />
                        </div>

                        <div className=" absolute  object-contain w-[100%] h-[100%] flex justify-center items-center ">
                            <img src={toko} alt="" className="  w-[90%] " id="bgimg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tokenomics