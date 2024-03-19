

const Blogs = () => {
    return (
        <>
            <div id="blog-main" className="flex relative gap-20 flex-col my-20 phone:px-5  min-h-screen bg-no-repeat items-center justify-center  ">

                <div className=" absolute left-0 top-[-20%]  phone:top-[-10%]   z-0" >
                    <svg xmlns="http://www.w3.org/2000/svg" width={1193} height={1240} viewBox="0 0 1193 1240" fill="none">
                        <g filter="url(#filter0_bdf_1020_145)">
                            <path d="M610.686 561.5C610.686 750.381 401.567 1003.91 212.686 1003.91C-65.3146 1003.91 -136.814 1032.79 -136.814 843.909C-136.814 655.027 -149.696 227 39.1855 227C228.067 227 610.686 372.619 610.686 561.5Z" fill="url(#paint0_linear_1020_145)" fillOpacity="0.2" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1020_145" x="-363.3" y="0.699997" width="1555.89" height="1238.69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="25.2" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1020_145" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx={352} dy={4} />
                                <feGaussianBlur stdDeviation="114.95" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_1020_145" result="effect2_dropShadow_1020_145" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1020_145" result="shape" />
                                <feGaussianBlur stdDeviation="113.15" result="effect3_foregroundBlur_1020_145" />
                            </filter>
                            <linearGradient id="paint0_linear_1020_145" x1={189} y1={616} x2={720} y2={616} gradientUnits="userSpaceOnUse">
                                <stop stopColor="#AB00FF" />
                                <stop offset={1} stopColor="#7D3D8A" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>

                <div className=" absolute right-0 top-[20%]  phone:top-[-10%]   z-0" >
                    <svg xmlns="http://www.w3.org/2000/svg" width={665} height={1100} viewBox="0 0 665 1100" fill="none">
                        <g filter="url(#filter0_bdf_1020_148)">
                            <path d="M909 589.512C909 698.198 783.972 866 675.312 866C566.651 866 308.568 831.982 308.568 723.297C41.9235 685.319 505.096 227 613.756 227C722.417 227 900.371 480.471 909 589.512Z" fill="#551FE5" fillOpacity="0.35" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1020_148" x="0.699997" y="0.699997" width="1490.2" height="1099.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="25.2" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1020_148" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx={352} dy={4} />
                                <feGaussianBlur stdDeviation="114.95" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_1020_148" result="effect2_dropShadow_1020_148" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1020_148" result="shape" />
                                <feGaussianBlur stdDeviation="113.15" result="effect3_foregroundBlur_1020_148" />
                            </filter>
                        </defs>
                    </svg>


                </div>

                <div className=" text-center z-10  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '> Our Recent
                        <span className="text-primary-gradient  " > Blogs </span>

                    </h1>
                </div>

                <div className="z-10" >
                    <div className=" flex justify-center  gap-[4vmax] flex-wrap ">

                        <div id="blogcard" className="  p-5 flex  justify-center items-center    bg-zinc-900 rounded-[28px]  " >

                            <div className=" max-w-[300px] h-[100%] flex gap-5 justify-center items-center flex-col    ">

                                <img className="w-full h-60   rounded-[19px] shadow border border-white" src="https://via.placeholder.com/282x240" />

                                <div className=" flex flex-col gap-5">


                                    <div className="left-[2px] text-left  text-white text-lg font-bold leading-[18px]">Real-World Crypto Adoption</div>

                                    <div className="left-[2px] top-[282px]  text-white text-[12px] font-medium leading-[10px]">26 July 2023</div>

                                    <div className="   text-neutral-400 text-md font-normal   leading-tight ">VOIP Finance is committed to bridging the gap between the crypto realm and real-life utility. Our mission extends beyond... </div>
                                </div>
                            </div>
                        </div>

                        <div id="blogcard" className="  p-5 flex  justify-center items-center    bg-zinc-900 rounded-[28px]  " >

                            <div className=" max-w-[300px] h-[100%] flex gap-5 justify-center items-center flex-col    ">

                                <img className="w-full h-60   rounded-[19px] shadow border border-white" src="https://via.placeholder.com/282x240" />

                                <div className=" flex flex-col gap-5">


                                    <div className="left-[2px] text-left  text-white text-lg font-bold leading-[18px]">Real-World Crypto Adoption</div>

                                    <div className="left-[2px] top-[282px]  text-white text-[12px] font-medium leading-[10px]">26 July 2023</div>

                                    <div className="   text-neutral-400 text-md font-normal   leading-tight ">VOIP Finance is committed to bridging the gap between the crypto realm and real-life utility. Our mission extends beyond... </div>
                                </div>
                            </div>
                        </div>

                        <div id="blogcard" className="  p-5 flex  justify-center items-center    bg-zinc-900 rounded-[28px]  " >

                            <div className=" max-w-[300px] h-[100%] flex gap-5 justify-center items-center flex-col    ">

                                <img className="w-full h-60   rounded-[19px] shadow border border-white" src="https://via.placeholder.com/282x240" />

                                <div className=" flex flex-col gap-5">


                                    <div className="left-[2px] text-left  text-white text-lg font-bold leading-[18px]">Real-World Crypto Adoption</div>

                                    <div className="left-[2px] top-[282px]  text-white text-[12px] font-medium leading-[10px]">26 July 2023</div>

                                    <div className="   text-neutral-400 text-md font-normal   leading-tight ">VOIP Finance is committed to bridging the gap between the crypto realm and real-life utility. Our mission extends beyond... </div>
                                </div>
                            </div>
                        </div>
                        <div id="blogcard" className="  p-5 flex  justify-center items-center    bg-zinc-900 rounded-[28px]  " >

                            <div className=" max-w-[300px] h-[100%] flex gap-5 justify-center items-center flex-col    ">

                                <img className="w-full h-60   rounded-[19px] shadow border border-white" src="https://via.placeholder.com/282x240" />

                                <div className=" flex flex-col gap-5">


                                    <div className="left-[2px] text-left  text-white text-lg font-bold leading-[18px]">Real-World Crypto Adoption</div>

                                    <div className="left-[2px] top-[282px]  text-white text-[12px] font-medium leading-[10px]">26 July 2023</div>

                                    <div className="   text-neutral-400 text-md font-normal   leading-tight ">VOIP Finance is committed to bridging the gap between the crypto realm and real-life utility. Our mission extends beyond... </div>
                                </div>
                            </div>
                        </div>
                        <div id="blogcard" className="  p-5 flex  justify-center items-center    bg-zinc-900 rounded-[28px]  " >

                            <div className=" max-w-[300px] h-[100%] flex gap-5 justify-center items-center flex-col    ">

                                <img className="w-full h-60   rounded-[19px] shadow border border-white" src="https://via.placeholder.com/282x240" />

                                <div className=" flex flex-col gap-5">


                                    <div className="left-[2px] text-left  text-white text-lg font-bold leading-[18px]">Real-World Crypto Adoption</div>

                                    <div className="left-[2px] top-[282px]  text-white text-[12px] font-medium leading-[10px]">26 July 2023</div>

                                    <div className="   text-neutral-400 text-md font-normal   leading-tight ">VOIP Finance is committed to bridging the gap between the crypto realm and real-life utility. Our mission extends beyond... </div>
                                </div>
                            </div>
                        </div>
                        <div id="blogcard" className="  p-5 flex  justify-center items-center    bg-zinc-900 rounded-[28px]  " >

                            <div className=" max-w-[300px] h-[100%] flex gap-5 justify-center items-center flex-col    ">

                                <img className="w-full h-60   rounded-[19px] shadow border border-white" src="https://via.placeholder.com/282x240" />

                                <div className=" flex flex-col gap-5">


                                    <div className="left-[2px] text-left  text-white text-lg font-bold leading-[18px]">Real-World Crypto Adoption</div>

                                    <div className="left-[2px] top-[282px]  text-white text-[12px] font-medium leading-[10px]">26 July 2023</div>

                                    <div className="   text-neutral-400 text-md font-normal   leading-tight ">VOIP Finance is committed to bridging the gap between the crypto realm and real-life utility. Our mission extends beyond... </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Blogs