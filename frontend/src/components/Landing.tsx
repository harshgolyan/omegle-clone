import { useState } from "react";
import { Link } from "react-router-dom";


const Landing = () => {
    const [name, setName] = useState<string>("")

    // const joinRoomHandler = (event: React.MouseEvent) => {
    //     event.preventDefault();
    //     console.log(name)
    // }
    return (
        <>
            <div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <Link to={`/room/?name=${name}`}>Join Room</Link>
                </div>
            </div>
        </>
    )
}

export default Landing;