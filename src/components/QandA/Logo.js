import React from "react";
import UntiwnIcon from "@material-ui/icons/LocalLibrary";
import "../component-styles/Logo.css"

function Logo(){
    return (
        <div className='div_logo'>
            <UntiwnIcon className="untwinIcon"/>    
            <h1 className="logo"> UnTwine </h1>
        </div>
    );
}

export default Logo;