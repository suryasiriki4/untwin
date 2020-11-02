import React from "react";
import UntiwnIcon from "@material-ui/icons/LocalLibrary";
import "./component-styles/Logo-white.css"

function Logo(){
    return (
        <div className='div_logo'>
            <UntiwnIcon className="untwinIconwhite"/>    
            <h1 className="logowhite"> UnTwine </h1>
        </div>
    );
}

export default Logo;