import Input from "./Input";
import Welcome from "./Welcome";

export default function Content({ runCommand }){
    return (
        <div className="m-1 h-[93%]">
            <Welcome />
            <Input runCommand={runCommand} />
        </div>
    )
}