import React from 'react'
import "../component-styles/DoubtBox.css";
import { Avatar, Button } from "@material-ui/core";


function DoubtBox() {
    return (
        <div className="doubtBox">
            <form action="">
                <div className="doubtBox__input">
                    <Avatar src="https://minervaschools-production-cms-uploads.s3.amazonaws.com/images/20150916_MNRV_220.2e16d0ba.fill-724x452.jpg?could_not_match_s3_bucket_and_object" />
                    <input placeholder="What's your Doubt ?" />
                </div>
                <Button className="doubtBox__doubtButton">
                    Doubt
                </Button>
            </form>
        </div>
    );
}

export default DoubtBox;
