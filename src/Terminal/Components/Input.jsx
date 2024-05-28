import { useState } from "react"

export default function Input ({ runCommand }){
    const [command, setCommand] = useState("");

    const handleSubit = (e) => {
        e.preventDefault()
        runCommand(command);
        setCommand("");
    }

    return (
        <div>
            <span>portfolio@gouenaaa$</span>
            <span>{command}</span>
        </div>
    )
}