
import htb1 from "../../assets/Images/abt1.svg"
import htb2 from "../../assets/Images/abt2.svg"
import htb3 from "../../assets/Images/abt3.svg"
import htb4 from "../../assets/Images/abt4.svg"

const Howtobuy = () => {
    return (
        <>
            <div id="htb-main" className="flex gap-20 flex-col   min-h-screen bg-no-repeat items-center justify-center my-5">

                <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '> How To
                        <span className="text-primary-gradient    " > Buy Voip  </span>
                        Coin
                    </h1>
                </div>

                <div className="flex gap-10 flex-wrap w-[80%] phone:w-[90%] justify-center " >
                    <div className=" min-h-[151px] max-w-[433px] origin-top-left   bg-purple-200 bg-opacity-10 rounded-[10px] border-neutral-500 backdrop-blur-[42px] p-[25px] flex gap-5" >
                        <div className=" " >
                            <div className=" h-[50px] w-[50px] ">
                                <img src={htb1} className=" h-full w-full " alt="" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5">
                            <h1 className=" text-4xl">Step 1</h1>
                            <p>Visit VOIP.com and Click on {'"Buy Token"'} Button</p>
                        </div>

                    </div>

                    <div className=" min-h-[151px] max-w-[433px] origin-top-left   bg-purple-200 bg-opacity-10 rounded-[10px] border-neutral-500 backdrop-blur-[42px] p-[25px] flex gap-5" >
                        <div className=" " >
                            <div className=" h-[50px] w-[50px] ">
                                <img src={htb2} className=" h-full w-full " alt="" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5">
                            <h1 className=" text-4xl">Step 2</h1>
                            <p>Connect Your Wallet to Metamask and Use USDT</p>
                        </div>

                    </div>

                    <div className=" min-h-[151px] max-w-[433px] origin-top-left   bg-purple-200 bg-opacity-10 rounded-[10px] border-neutral-500 backdrop-blur-[42px] p-[25px] flex gap-5" >
                        <div className=" " >
                            <div className=" h-[50px] w-[50px] ">
                                <img src={htb3} className=" h-full w-full " alt="" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5">
                            <h1 className=" text-4xl">Step 3</h1>
                            <p>Choose the Number of USDT and {'"APPROVE"'}</p>
                        </div>

                    </div>

                    <div className=" min-h-[151px] max-w-[433px] origin-top-left   bg-purple-200 bg-opacity-10 rounded-[10px] border-neutral-500 backdrop-blur-[42px] p-[25px] flex gap-5" >
                        <div className=" " >
                            <div className=" h-[50px] w-[50px] ">
                                <img src={htb4} className=" h-full w-full " alt="" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5">
                            <h1 className=" text-4xl">Step 4</h1>
                            <p>Choose the Number of USDT and {'"BUY"'} Checking Transactions</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Howtobuy