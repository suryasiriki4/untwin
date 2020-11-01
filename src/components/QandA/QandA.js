import React from 'react'
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import Feed from "./Feed"
import "../component-styles/QandA.css"

function QandA() {
    return (
        <div>
           <div className="q-and-a">
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
