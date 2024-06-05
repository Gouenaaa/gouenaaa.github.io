import Project from "./Project";
import GoTop from "../GoTop";

export default function Projects() {
    return (
        <div id="projects" className="pt-16 flex flex-col">
            <p className="font-extrabold text-3xl text-[#F5F5F7]">Projets</p>
            <Project name="DosdIRC" description="DosdIRC est une application de chat instantané développée avec la stack MERN et socket.io" date="Janvier 2024" link="https://github.com/Gouenaaa/DOSDIRC-IRC" />
            <Project name="WelcomeToTheTeaser" description="WTTT est une plateforme de recherche d'emploi développée avec Symfony et ReactJS." date="Novembre 2024" link="https://github.com/Gouenaaa/WelcomeToTheTeaser" />
            <Project name="MiniScreen" description="MiniScreen est un projet ESP-32 qui a pour but d'afficher les différentes statistiques de mon pc sur un petit ecran tactile connecté en réseau, ainsi que de contrôler mon flux Spotify grâce à son écran tactile." date="2024" />
            <GoTop />
        </div>
    )
}