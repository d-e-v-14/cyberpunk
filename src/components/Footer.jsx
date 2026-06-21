import { Link } from "react-router-dom";

function Footer({ setShowCookies }) {

    return(
        <footer className="bg-black text-white font-sans px-5 sm:px-10 lg:px-20 py-16 w-full">
            <div className="flex flex-col md:flex-row  gap-30 justify-evenly pb-16">
                <div className="max-w-[320px]">
                    <h2 className="text-[22px] font-bold mb-5">Cyber.AI - Cyber Punk Website</h2>
                    <p className="text-[14px] text-gray-300 leading-7">
                        Explore the high-tech,low life world where the lines between humanity
                    </p>
                </div>



                <div className="flex flex-col gap-3">
                    <h3 className="text-[14px] font-semibold ">Information</h3>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition">Press center</a>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition">Our Blog</a>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition min-w-40">Terms and Condition</a>
                </div>



                <div className="flex flex-col gap-3 ">
                    <h3>Menu</h3>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition">About</a>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition">Services</a>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition">Blog</a>
                </div>


                <div className="flex flex-col gap-3">
                    <h3>Contact</h3>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition">Phone : +123 456 789</a>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition">Email: @example.com</a>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition">Address Line 01</a>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-t border-gray-800 pt-8 ">
                <div className="text-[14px]">
                    <p className="md:pl-15">&#169; Cyber.Game-Ketan Mulani 2026.All rights reserved</p>
                </div>
                <div className="flex gap-6 flex-wrap">
                    <a href="#" className="hover:text-orange-500">Terms</a>
                    <Link to="/privacy" target="_blank" className="hover:text-orange-500 transition">Privacy</Link>
                    <button onClick={() => setShowCookies(true)}className="hover:text-orange-500 transition">Cookies</button>
                </div>
                
                
                <div className="flex gap-6">
                    <div className="cursor-pointer hover:text-orange-500 ">
                        <i class="fa-brands fa-linkedin-in "></i>
                    </div>
                    <div className="cursor-pointer hover:text-orange-500 ">
                        <i class="fa-brands fa-instagram"></i>
                    </div>

                    <div className="cursor-pointer hover:text-orange-500 ">
                        <i class="fa-brands fa-x-twitter"></i>
                    </div>
                </div>

            </div>

        </footer>
    );
}

export default Footer;