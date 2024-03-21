
import PropTypes from 'prop-types';

const Step = ({ color, phase, heading, pera, pera2 }) => {
    return (
        <>
            <div id="step-main" className=" z-10 flex gap-20 justify-center   p-5 tablet:flex-col tablet:items-center tablet:gap-10  " >

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
                        <div className='flex flex-col gap-3'>
                            <p className=" text-xl" dangerouslySetInnerHTML={{ __html: pera }}></p>
                            <p className=" text-xl" dangerouslySetInnerHTML={{ __html: pera2 }}></p>
                        </div>
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
    pera: PropTypes.string.isRequired,
    pera2: PropTypes.string.isRequired

};

const Roadmap = () => {
    return (
        <>
            <div id="Roadmap" className=" relative flex gap-20 flex-col   min-h-screen bg-no-repeat    items-center justify-center my-20">

                <div className=" absolute left-0 top-[-20%]  phone:top-[-10%]   z-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width={1069} height={1371} viewBox="0 0 1069 1371" fill="none">
                        <g filter="url(#filter0_bdf_1020_134)">
                            <path d="M487 792.793C487 901.112 93.1315 1045.69 -10.9257 898.312C-119.215 898.312 -207 810.503 -207 702.185C-207 593.866 -15.1575 410 93.1314 410C201.42 410 487 684.475 487 792.793Z" fill="#8E00D3" fillOpacity="0.8" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1020_134" x="-616.8" y="0.200012" width="1685.7" height="1370.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="45.7" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1020_134" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx={352} dy={4} />
                                <feGaussianBlur stdDeviation="114.95" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_1020_134" result="effect2_dropShadow_1020_134" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1020_134" result="shape" />
                                <feGaussianBlur stdDeviation="204.9" result="effect3_foregroundBlur_1020_134" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div className='absolute right-0 top-[30%]    z-0' >
                    <svg xmlns="http://www.w3.org/2000/svg" width={996} height={1430} viewBox="0 0 996 1430" fill="none">
                        <g filter="url(#filter0_bdf_1020_146)">
                            <path d="M1009.23 725.979C1009.87 849.68 755.895 1018.73 632.193 1019.37C508.492 1020.01 411.154 829.194 410.515 705.493C409.876 581.792 658.928 410.8 782.629 410.161C906.331 409.523 1008.59 602.278 1009.23 725.979Z" fill="#6721E6" fillOpacity="0.9" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1020_146" x="0.713928" y="0.359924" width="1590.42" height="1428.81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
                        <span className="text-primary-gradient    " >Roadmap  </span>
                    </h1>
                    <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                        VOIP Finance aims to disrupt the traditional VoIP industry by leveraging blockchain technology to provide a decentralized, secure, and cost-effective solution for voice communication. The VOIP token serves as the native currency within the VOIP Finance ecosystem, enabling users to
                    </p>
                </div>

                <div className='flex flex-col gap-8'>


                    <Step
                        color="bg-[--secondry1-color]"
                        phase="PHASE 1"
                        heading="Presale and Token Distribution"
                        pera="Launch a presale to raise funds for further development and marketing effots"
                        pera2="Launch a presale to raise funds for further development and marketing efforts."
                    />
                    <Step
                        color="bg-[--secondry-color]"
                        phase="PHASE 2"
                        heading="Presale and Token Distribution"
                        pera="Launch a presale to raise funds for further development and marketing effots"
                        pera2="Launch a presale to raise funds for further development and marketing efforts."

                    />
                    <Step
                        color="bg-[--secondry1-color]"
                        phase="PHASE 3"
                        heading="Presale and Token Distribution"
                        pera="Launch a presale to raise funds for further development and marketing effots"
                        pera2="Launch a presale to raise funds for further development and marketing efforts."

                    />
                    <Step
                        color="bg-[--secondry-color]"
                        phase="PHASE 4"
                        heading="Presale and Token Distribution"
                        pera="Launch a presale to raise funds for further development and marketing effots"
                        pera2="Launch a presale to raise funds for further development and marketing efforts."

                    />

                    <Step
                        color="bg-[--secondry1-color]"
                        phase="PHASE 5"
                        heading="Presale and Token Distribution"
                        pera="Launch a presale to raise funds for further development and marketing effots"
                        pera2="Launch a presale to raise funds for further development and marketing efforts."

                    />




                </div>
            </div>

        </>
    )
}

export default Roadmap