import Contact from "./Components/Contact/Contact";
import Introduction from "./Components/Introduction/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Stack from "./Components/Stack/Stack";

export default function App() {
    return (
        <div id="top" className="bg-[#111215] grid grid-cols-6 h-[2000px]">
            <div className="col-span-2 col-start-3 mt-24 font-mono text-[#7D7D85] text-lg font-semibold">
                <Introduction />
                <Navbar />
                <Projects />
                <Stack />
                <Contact />
            </div>
        </div>
    );
}