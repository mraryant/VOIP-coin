
import PropTypes from 'prop-types';

const Step = ({ color, phase, heading, pera }) => {
    return (
        <>
            <div id="step-main" className=" flex gap-20 justify-center   p-5 tablet:flex-col tablet:items-center tablet:gap-10  " >

                <div id="step-left" className="w-[40%] relative phone:tablet:w-[95%] tablet:w-[90%]">
                    <div className="  w-[100%] relative flex justify-center " >
                        <h1 className=" text-stroke-custom text-4xl font-bold   text-center absolute bottom-[100%] phone:text-3xl "
                        >{phase}</h1>
                    </div>
                    <div className={`roadmap-clip py-3 pl-[50px] pr-3 ${color}`} >
                        <h2 className="text-3xl phone:text-2xl " >{heading}</h2>
                    </div>
                </div>

                <div id="step-right " className="w-[50%] flex justify-center phone:tablet:w-[95%] tablet:w-[90%] ">
                    <div className="w-[90%]  flex gap-3 phone:w-[100%]  " >
                        <p className=" " >✧</p>
                        <p className=" text-xl" dangerouslySetInnerHTML={{ __html: pera }}></p>
                    </div>
                </div>
            </div>

        </>

    );
}
Step.propTypes = {
    color: PropTypes.string.isRequired,
    phase: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    pera: PropTypes.string.isRequired
};

const Roadmap = () => {
    return (
        <>
            <div id="eco-main" className="flex gap-20 flex-col   min-h-screen bg-no-repeat    items-center justify-center my-20">

                <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '>
                        <span className="text-primary-gradient    " >Roadmap  </span>
                    </h1>
                    <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                        VOIP Finance aims to disrupt the traditional VoIP industry by leveraging blockchain technology to provide a decentralized, secure, and cost-effective solution for voice communication. The VOIP token serves as the native currency within the VOIP Finance ecosystem, enabling users to
                    </p>
                </div>

                <Step
                    color="bg-[--secondry1-color]"
                    phase="PHASE 1"
                    heading="Presale and Token Distribution"
                    pera="Launch a presale to raise funds for further development and marketing effots
                            <br />
                            <br />
                            Launch a presale to raise funds for further development and marketing efforts."

                />
                <Step
                    color="bg-[--secondry-color]"
                    phase="PHASE 2"
                    heading="Presale and Token Distribution"
                    pera="Launch a presale to raise funds for further development and marketing effots
                            <br />
                            <br />
                            Launch a presale to raise funds for further development and marketing efforts."
                />
                <Step
                    color="bg-[--secondry1-color]"
                    phase="PHASE 3"
                    heading="Presale and Token Distribution"
                    pera="Launch a presale to raise funds for further development and marketing effots
                            <br />
                            <br />
                            Launch a presale to raise funds for further development and marketing efforts."
                />
                <Step
                    color="bg-[--secondry-color]"
                    phase="PHASE 4"
                    heading="Presale and Token Distribution"
                    pera="Launch a presale to raise funds for further development and marketing effots
                            <br />
                            <br />
                            Launch a presale to raise funds for further development and marketing efforts."
                />

                <Step
                    color="bg-[--secondry1-color]"
                    phase="PHASE 5"
                    heading="Presale and Token Distribution"
                    pera="Launch a presale to raise funds for further development and marketing effots
                            <br />
                            <br />
                            Launch a presale to raise funds for further development and marketing efforts."
                />





            </div>

        </>
    )
}

export default Roadmap