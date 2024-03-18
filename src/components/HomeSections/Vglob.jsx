
import vglob from "../../assets/Images/vglob.png"


const Vglob = () => {
    return (
        <>
            <div id="listing" className=' relative min-h-[100vh] w-[100vw] px-10 py-20   flex flex-col gap-20'>


                <div id="filler-main" className='flex  w-full gap-10 tablet:flex-col-reverse tablet:items-center '>



                    <div id="filler-left" className='w-[50%] h-[100%] flex tablet:w-[80%]  justify-center '>
                        <img
                            src={vglob}
                            alt='VOIP  '
                            className='   '
                        />
                    </div>



                    <div id="filler-right" className=' w-[60%] flex flex-col justify-center   gap-10 tablet:w-[100%] tablet:text-center '>
                        <h1 className='text-5xl font-bold  tablet:text-4xl   '>
                            Real-World <span className="text-primary-gradient">Crypto Adoption</span>
                        </h1>
                        <div className="  max-w-2xl  ">

                            <p className="text-xl   tablet:text-center">
                                Voip Finance is committed to bridging the gap between the crypto realm and real-life utility. Our mission extends beyond digital transactions, as we believe in bringing cryptocurrency to the forefront of everyday experiences. We understand that true adoption goes beyond the virtual realm, and {"that's"} why {"we're"} pioneering real-life integration like never before.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </>

    )
}

export default Vglob