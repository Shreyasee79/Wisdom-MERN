import React from "react";
import "./Footer.css"
import { PiCopyrightFill } from "react-icons/pi";

const Footer=()=>{
    return(
        <>
            <div id="footer">
                <p><PiCopyrightFill style={{verticalAlign:"bottom"}}/>  All Rights Are Reserved</p>
            </div>
        </>
    )
}

export default Footer