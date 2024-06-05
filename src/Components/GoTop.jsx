import { FaChevronUp } from "react-icons/fa";

export default function GoTop () {
    return (
        <>
            <div className="items-end flex flex-col">
                <button onClick={() => document.getElementById("top").scrollIntoView()}>
                    <FaChevronUp className="my-2"  />
                </button>
            </div>
            <hr />
        </>
        
    )
}