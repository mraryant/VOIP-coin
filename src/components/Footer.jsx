
import logo1 from "../assets/voip_logo (1)/logotext.png"
import youtube from "../assets/socialmedia/YouTube.png"
import twiter from "../assets/socialmedia/Twitter.png"
import Telegram from "../assets/socialmedia/Telegram App.png"
import Instagram from "../assets/socialmedia/Instagram.png"
import Medium from "../assets/socialmedia/Medium.png"

const Footer = () => {
    return (
        <>


            <footer className="  bg-[#101010]  ">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between tablet:justify-center">

                        <div className=" flex  flex-col gap-5 mb-6 max-w-[40%] tablet:max-w-[100%] tablet:items-center  md:mb-0">
                            <a href="" className="flex items-center">
                                <img src={logo1} className="h-[50px] me-3" alt="FlowBite Logo" />
                                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span> */}
                            </a>
                            <p className=" tablet:text-center " >The Voip Finance Token, with its dynamic Profession Map, redefines accreditation and certification, setting global standards for excellence in people management through innovation, collaboration, and transformative change.</p>
                            <div className="flex gap-5" >
                                <img src={youtube} alt="" />
                                <img src={twiter} alt="" />
                                <img src={Telegram} alt="" />
                                <img src={Instagram} alt="" />
                                <img src={Medium} alt="" />

                            </div>
                        </div>
                        <div className=" flex gap-[5vmax] tablet:justify-evenly tablet:flex-wrap ">
                            <div className=" flex flex-col tablet:items-center " >
                                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold   uppercase text-white">Resources</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center  ">
                                        <a href="" className="hover:underline  ">Flowbite</a>
                                    </li>
                                    <li className="  tablet:text-center  " >
                                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold  uppercase text-white">Follow us</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">
                                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                    </li>
                                    <li className="  tablet:text-center  ">
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold   uppercase text-white">Legal</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="  tablet:text-center  ">
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6  border-gradient sm:mx-auto border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center tablet:text-center sm:justify-between">
                        <span className="text-sm   sm:text-center  text-gray-400">© 2024 <a href="" className="hover:underline">VOIP</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer