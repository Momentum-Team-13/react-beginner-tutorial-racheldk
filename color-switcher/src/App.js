import React, { useState } from "react";
import "./App.css";
import ColorChangeButton from "./ColorChangeButton";

function App() {
    const [color, setColor] = useState("");
    return (
        <div className={`react-root ${color}`}>
            <div className="centered">
                <h1>Color Picker</h1>
                <ColorChangeButton color='red' setColor={setColor} />
                <ColorChangeButton color='blue' setColor={setColor} />
                <ColorChangeButton color='yellow' setColor={setColor} />
                {/* color is the name of the prop, its value comes after the = */}
                <button className="red" onClick={() => setColor("red")}>
                    red
                </button>
                <button className="blue" onClick={() => setColor("blue")}>
                    blue
                </button>
                <button className="yellow" onClick={() => setColor("yellow")}>
                    yellow
                </button>
            </div>
        </div>
    );
}

export default App;
