import { FaChevronRight } from "react-icons/fa";

export default function Project({name, description, date, link=""}){
    return (
        <div className="mt-8 ml-6">
            <p className="text-[#F5F5F7] text-xl">{name} <span className="ml-4 p-1 text-base rounded-md bg-gray-800">{date}</span></p>
            <p className="mt-2">{description}</p>
            {link !== "" && (
                <div className="flex items-center mt-2 text-[#1ecdc8]">
                    <FaChevronRight />
                    <a href={link} target="_blank">{link}</a>
                </div>
            )}
        </div>
    )
}