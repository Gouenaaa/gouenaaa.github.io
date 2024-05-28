import Terminal from "./Terminal/Terminal";

export default function App() {
    return (
        <div className="h-screen w-screen bg-[#181823] text-[#1ecdc8] grid grid-cols-7 grid-rows-7">
            <Terminal />
        </div>
    );
}