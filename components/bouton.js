import React from "react";

function Bouton(prop) {
    return (
        <div>
            <button type={"button"} onClick={prop.handleFunc}>
                {prop.value}
            </button>
        </div>
    );
}

export default Bouton;
