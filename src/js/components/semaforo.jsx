import { useState } from "react";



export default function Semaforo() {
    const [color, setColor] = useState("red");
    return (
        <div className="traffic-container">
            <div
                className={`light red ${color === "red" ? "on" : ""}`}
                onClick={() => setColor("red")}
            ></div>
            <div
                className={`light yellow ${color === "yellow" ? "on" : ""}`}
                onClick={() => setColor("yellow")}
            ></div>
            <div
                className={`light green ${color === "green" ? "on" : ""}`}
                onClick={() => setColor("green")}
            ></div>
        </div>
    );

}
