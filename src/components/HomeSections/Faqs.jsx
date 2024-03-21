import { useState } from 'react';

const Faqs = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const accordionItems = [
        {
            question: 'What is Flowbite?',
            answer: (
                <div>
                    <p className="mb-2 text-gray-500 ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil, laborum quod repellendus esse accusamus iste molestias! Repudiandae consectetur aspernatur adipisci non atque, nostrum odit eveniet. Fugiat atque fugit corporis.
                    </p>
                    <p className="text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam voluptatum natus. Dolorem soluta maxime expedita et! Debitis, eaque nesciunt!
                    </p>
                </div>
            ),
        },
        {
            question: 'Is there a Figma file available?',
            answer: (
                <div>
                    <p className="mb-2 text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et illum possimus laborum natus consequatur! Aperiam exercitationem provident facere reiciendis.
                    </p>
                    <p className="text-gray-500 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi repellendus minima eius pariatur eum similique beatae impedit dolorum fuga nisi.
                    </p>
                </div>
            ),
        },
        {
            question: 'What are the differences between Flowbite and Tailwind UI?',
            answer: (
                <div>
                    <p className="mb-2 text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid iure dicta reiciendis doloribus error et dolores soluta quod quos.
                    </p>
                    <p className="mb-2 text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id architecto, est a vel et itaque sapiente quidem quae repudiandae illum nostrum, voluptatem perspiciatis labore, excepturi obcaecati hic. Numquam, ut?
                    </p>
                    <p className="mb-2 text-gray-500 ">Learn more about these technologies:</p>
                    <ul className="ps-5 text-gray-500 list-disc ">
                        <li>
                            <a href="https://flowbite.com/pro/" className="text-blue-600  hover:underline">
                                Lorem ipsum dolor sit amet.
                            </a>
                        </li>
                        <li>
                            <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600  hover:underline">
                                Lorem, ipsum.
                            </a>
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            question: 'What are the differences between Flowbite and Tailwind UI?',
            answer: (
                <div>
                    <p className="mb-2 text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum possimus dicta doloribus saepe velit cum aliquid, asperiores debitis blanditiis modi non incidunt deleniti aliquam officiis quae ut ipsum nemo?
                    </p>
                    <p className="mb-2 text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dignissimos recusandae saepe dolorem consectetur minus quo mollitia assumenda neque explicabo.
                    </p>
                    <p className="mb-2 text-gray-500 ">Learn more about these technologies:</p>
                    <ul className="ps-5 text-gray-500 list-disc ">
                        <li>
                            <a href="https://flowbite.com/pro/" className="text-blue-600  hover:underline">
                                Lorem ipsum dolor sit amet.
                            </a>
                        </li>
                        <li>
                            <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600  hover:underline">
                                Lorem, ipsum dolor.
                            </a>
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            question: 'What are the differences between Flowbite and Tailwind UI?',
            answer: (
                <div>
                    <p className="mb-2 text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum consequatur labore, quas vitae nisi iste eligendi non beatae corrupti sit facere a temporibus deserunt aut velit natus ipsum ipsa!
                    </p>
                    <p className="mb-2 text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam quae veniam consequuntur. Eveniet doloribus temporibus fugiat iure cum nesciunt repellendus pariatur soluta maxime fuga, magni praesentium harum non officia?
                    </p>
                    <p className="mb-2 text-gray-500 ">Learn more about these technologies:</p>
                    <ul className="ps-5 text-gray-500 list-disc ">
                        <li>
                            <a href="https://flowbite.com/pro/" className="text-blue-600  hover:underline">
                                Lorem ipsum dolor sit amet.
                            </a>
                        </li>
                        <li>
                            <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600  hover:underline">
                                Lorem, ipsum dolor.
                            </a>
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    return (


        <>
            <div className=' relative ' >

                <div id="blob" className=" absolute right-0 top-[-50%]  phone:top-[-10%]   z-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width={777} height={1240} viewBox="0 0 777 1240" fill="none">
                        <g filter="url(#filter0_bdf_1020_137)">
                            <path d="M974.686 561.5C974.686 750.381 765.567 1003.91 576.686 1003.91C298.685 1003.91 227.186 1032.79 227.186 843.909C227.186 655.027 214.304 227 403.186 227C592.067 227 974.686 372.619 974.686 561.5Z" fill="url(#paint0_linear_1020_137)" fillOpacity="0.2" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1020_137" x="0.699997" y="0.699997" width="1555.89" height="1238.69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="25.2" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1020_137" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx={352} dy={4} />
                                <feGaussianBlur stdDeviation="114.95" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_1020_137" result="effect2_dropShadow_1020_137" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1020_137" result="shape" />
                                <feGaussianBlur stdDeviation="113.15" result="effect3_foregroundBlur_1020_137" />
                            </filter>
                            <linearGradient id="paint0_linear_1020_137" x1={553} y1={616} x2={1084} y2={616} gradientUnits="userSpaceOnUse">
                                <stop stopColor="#AB00FF" />
                                <stop offset={1} stopColor="#7D3D8A" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>


                <div className='   ' >

                    <div className='flex    flex-col gap-10 py-20 '>
                        <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                            <h1
                                className='text-5xl  font-bold tablet:text-4xl '>
                                Frequently Asked
                                <span className="text-primary-gradient" > Question</span>

                            </h1>

                        </div>

                        <div className=' z-20 flex justify-center'>


                            <div className='w-[70%] border   tablet:w-[90%] rounded-t-xl ' id="accordion-collapse" data-accordion="collapse">
                                {accordionItems.map((item, index) => (
                                    <div key={index}>
                                        <h2 id={`accordion-collapse-heading-${index + 1}`}>
                                            <button
                                                type="button"
                                                className={`flex items-center justify-between w-full p-5 rounded-t-xl font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200  focus:ring-2 focus:ring-gray-500   focus:bg-transparent    gap-3 ${activeAccordion === index ? 'active' : ''
                                                    }`}
                                                onClick={() => toggleAccordion(index)}
                                                aria-expanded={activeAccordion === index ? 'true' : 'false'}
                                                aria-controls={`accordion-collapse-body-${index + 1}`}
                                            >
                                                <span className=' font-medium text-xl text-white text-left' >{item.question}</span>
                                                <svg
                                                    data-accordion-icon
                                                    className="w-3 h-3 rotate-180 shrink-0"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div
                                            id={`accordion-collapse-body-${index + 1}`}
                                            className={`p-5 border border-b-0 border-gray-200  ${activeAccordion === index ? 'block' : 'hidden'
                                                }`}
                                            aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                                        >
                                            {item.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Faqs;
