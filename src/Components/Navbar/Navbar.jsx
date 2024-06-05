import { GoStack } from "react-icons/go";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Navbar () {

    const scrollTo = (section) => {
        document.getElementById(section).scrollIntoView();
    }

    return (
        <nav className="mt-16">
            <button className="flex items-center group my-2" onClick={() => scrollTo("projects")}>
                <FaRegFolder className="text-xl" />
                <span className="ml-4 group-hover:underline">Projets</span>
            </button>
            <button className="flex items-center group my-2" onClick={() => scrollTo("stack")}>
                <GoStack className="text-xl" />
                <span className="ml-4 group-hover:underline">Stack</span>
            </button>
            <button className="flex items-center group my-2" onClick={() => scrollTo("contact")}>
                <MdOutlineAlternateEmail className="text-xl" />
                <span className="ml-4 group-hover:underline">Contact</span>
            </button>
        </nav>
    )
}