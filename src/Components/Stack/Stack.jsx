import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { DiSymfony } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { BsUbuntu } from "react-icons/bs";

import GoTop from "../GoTop";

export default function Stack () {
    return (
        <div id="stack" className="pt-16 text-[#F5F5F7]">
            <p className="font-extrabold text-3xl">Stack</p>
            <div className="mt-8 grid grid-cols-5 grid-rows-3 gap-6 font-thin">
                <div>
                    <IoLogoHtml5 className="bg-gray-800 text-orange-500 text-6xl p-1 rounded-md" />
                    <span>HTML</span>
                </div>
                <div>
                    <IoLogoCss3 className="bg-gray-800 text-blue-500 text-6xl p-1 rounded-md" />
                    <span>CSS</span>
                </div>
                <div>
                    <RiTailwindCssFill className="bg-gray-800 text-blue-500 text-6xl p-1 rounded-md" />
                    <span>Tailwind</span>
                </div>
                <div>
                    <IoLogoJavascript className="bg-gray-800 text-yellow-300 text-6xl p-1 rounded-md" />
                    <span>Javascript</span>
                </div>
                <div>
                    <FaNodeJs className="bg-gray-800 text-green-600 text-6xl p-1 rounded-md" />
                    <span>NodeJS</span>
                </div>
                <div>
                    <FaReact className="bg-gray-800 text-blue-400 text-6xl p-1 rounded-md" />
                    <span>ReactJS</span>
                </div>
                <div>
                    <FaPhp className="bg-gray-800 text-violet-800 text-6xl p-1 rounded-md" />
                    <span>PHP</span>
                </div>
                <div>
                    <DiSymfony className="bg-gray-800 text-white text-6xl p-1 rounded-md" />
                    <span>Symfony</span>
                </div>
                <div>
                    <SiMysql className="bg-gray-800 text-blue-400 text-6xl p-1 rounded-md" />
                    <span>MySQL</span>
                </div>
                <div>
                    <SiMongodb className="bg-gray-800 text-green-500 text-6xl p-1 rounded-md" />
                    <span>MongoDB</span>
                </div>
                <div>
                    <FaGithub className="bg-gray-800 text-white text-6xl p-2 rounded-md" />
                    <span>Github</span>
                </div>
                <div>
                    <VscVscodeInsiders className="bg-gray-800 text-blue-500 text-6xl p-1 rounded-md" />
                    <span>VSCode</span>
                </div>
                <div>
                    <BsUbuntu className="bg-gray-800 text-orange-600 text-6xl p-3 rounded-md" />
                    <span>Linux</span>
                </div>
                
            </div>
            <GoTop />
        </div>
    )
}