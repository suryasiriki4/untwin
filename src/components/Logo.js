import React from "react";
import UntiwnIcon from "@material-ui/icons/LocalLibrary";
import "./component-styles/Logo.css"

function Logo(){
    return (
        <div>
            <UntiwnIcon className="untwinIcon"/>    
            <h1 className="logo"> UNTWIN </h1>
        </div>
    );
}

export default Logo;