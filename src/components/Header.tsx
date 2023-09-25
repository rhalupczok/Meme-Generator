import React from "react";

function Header() {
    return (
        <header className="header">
            <img
                className="header--image"
                src={require("../images/troll-face.png")}
                alt="header-logo"
            ></img>
            <h2 className="header--title">Meme Generator</h2>
        </header>
    );
}

export default Header;
