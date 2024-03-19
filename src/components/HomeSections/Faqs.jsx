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
                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 ">
                        Check out this guide to learn how to{' '}
                        <a href="/docs/getting-started/introduction/" className="text-blue-600 hover:underline">
                            get started
                        </a>{' '}
                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </div>
            ),
        },
        {
            question: 'Is there a Figma file available?',
            answer: (
                <div>
                    <p className="mb-2 text-gray-500 ">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 ">
                        Check out the{' '}
                        <a href="https://flowbite.com/figma/" className="text-blue-600  hover:underline">
                            Figma design system
                        </a>{' '}
                        based on the utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                </div>
            ),
        },
        {
            question: 'What are the differences between Flowbite and Tailwind UI?',
            answer: (
                <div>
                    <p className="mb-2 text-gray-500 ">
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 ">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 ">Learn more about these technologies:</p>
                    <ul className="ps-5 text-gray-500 list-disc ">
                        <li>
                            <a href="https://flowbite.com/pro/" className="text-blue-600  hover:underline">
                                Flowbite Pro
                            </a>
                        </li>
                        <li>
                            <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600  hover:underline">
                                Tailwind UI
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
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 ">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 ">Learn more about these technologies:</p>
                    <ul className="ps-5 text-gray-500 list-disc ">
                        <li>
                            <a href="https://flowbite.com/pro/" className="text-blue-600  hover:underline">
                                Flowbite Pro
                            </a>
                        </li>
                        <li>
                            <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600  hover:underline">
                                Tailwind UI
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
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 ">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 ">Learn more about these technologies:</p>
                    <ul className="ps-5 text-gray-500 list-disc ">
                        <li>
                            <a href="https://flowbite.com/pro/" className="text-blue-600  hover:underline">
                                Flowbite Pro
                            </a>
                        </li>
                        <li>
                            <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600  hover:underline">
                                Tailwind UI
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
                <div className='absolute right-0 top-[-20%]  phone:top-[-10%]   z-0' >
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


                <div className='flex z-10 flex-col gap-10 py-20 '>
                    <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                        <h1
                            className='text-5xl  font-bold tablet:text-4xl '>
                            Frequently Asked
                            <span className="text-primary-gradient" > Question</span>

                        </h1>

                    </div>

                    <div className=' flex justify-center'>


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

        </>
    );
};

export default Faqs;
