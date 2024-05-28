import Head from "./Components/Head";
import Content from "./Components/Content";

export default function Terminal() {
    const runCommand = (command) => {
        switch (command) {
            default: {
                alert("ah")
                break;
            }
        }
    }
    return (
        <div className="col-start-2 col-span-5 row-start-2 row-span-5 border-2 border-[#1ecdc8] shadow-lg shadow-[#1ecdc8]/40 rounded-xl">
            <Head />
            <Content runCommand={runCommand} />
        </div>
    );
}