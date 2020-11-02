import React from 'react'
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import Feed from "./Feed"
import "../component-styles/QandA.css"
import { Button } from "@material-ui/core";

function QandA() {
    return (
        <div>
           <div className="q-and-a">
                {/* Home Button */}
                <Button variant="outlined" className="home__button" href="/Home">
                    Return to Home
                </Button>
                {/* Side Bar */}
                <Sidebar />

                {/* Feed */}
                <Feed />

                {/* Widget */}
                <Widgets />
           </div>
        </div>
    );
}

export default QandA;
