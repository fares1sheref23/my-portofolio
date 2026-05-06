import React from "react";
import Typewriter from "typewriter-effect";
import { typewriterRoles } from "../../portfolioContent";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: typewriterRoles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
