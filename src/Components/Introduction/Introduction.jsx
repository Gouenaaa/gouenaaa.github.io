import { CiLocationOn } from "react-icons/ci";

export default function Introduction () {
    return (
        <div>
            <p className="font-extrabold text-5xl text-[#F5F5F7]">Gwenaël Deniel</p>
            <p className="mt-6">Développeur full-stack web</p>
            <p className="mt-6">Globalement je code, je développe, je programme, je réalise, je met en place, je construit des applications web.</p>
            <div className="flex mt-6 items-center">
                <CiLocationOn className="text-2xl" />
                <span className="ml-2">Aulnay-sous-Bois</span>

                <div className="ml-32 bg-green-400 rounded-full h-2 w-2 animate-pulse"></div>
                <span className="ml-2">En recherche d'alternance</span>
            </div>
        </div>
    )
}