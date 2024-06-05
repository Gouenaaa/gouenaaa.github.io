import { FaChevronRight } from "react-icons/fa";

import GoTop from "../GoTop";

export default function Contact () {
    return (
        <div id="contact" className="pt-16">
            <p className="font-extrabold text-3xl text-[#F5F5F7]">Contact</p>
            <div className="flex flex-row items-center my-2 mt-8">
                <span>Email</span>
                <div className="bg-[#7D7D85] mx-4 w-full h-[2px]"></div>
                <FaChevronRight className="text-[#1ecdc8] text-xl" />
                <a className="text-[#1ecdc8] ml-2 hover:underline whitespace-nowrap" href="mailto:deniel.gwenael2002@gmail.com">deniel.gwenael2002@gmail.com</a>
            </div>
            <div className="flex flex-row items-center my-2">
                <span>Téléphone</span>
                <div className="bg-[#7D7D85] mx-4 w-full h-[2px]"></div>
                <FaChevronRight className="text-[#1ecdc8] text-xl" />
                <a className="text-[#1ecdc8] ml-2 hover:underline whitespace-nowrap" href="tel:+33660170237">06 60 17 02 37</a>
            </div>
            <div className="flex flex-row items-center my-2">
                <span>Github</span>
                <div className="bg-[#7D7D85] mx-4 w-full h-[2px]"></div>
                <FaChevronRight className="text-[#1ecdc8] text-xl" />
                <a className="text-[#1ecdc8] ml-2 hover:underline whitespace-nowrap" href="https://github.com/Gouenaaa" target="_blank">https://github.com/Gouenaaa</a>
            </div>
            <GoTop />
        </div>
    )
}