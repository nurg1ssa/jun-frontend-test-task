import React from "react";
import header from "./Header.module.css"

function Header(){
    return(
        <header className={header.header}>
            <div className={header.text}>HORSE.BET</div>
        </header>
    )
}
export default Header;