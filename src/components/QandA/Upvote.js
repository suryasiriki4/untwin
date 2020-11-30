import React, {useState} from 'react';
import {Button, Input, Avatar} from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class Upvote extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            click: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const c = this.state.click ? [-1,false] : [1, true];
        c[0] = c[0] + this.state.count;
        this.setState = ({
            count: c[0],
            click: c[1]
        })
    }

    render() {
        return(
            <div style={{float:'left'}}>
                <Button style={{float:'left', height:'30px', backgroundColor: "#33aaa3", margin: '4px'}} onclick={this.handleClick}><KeyboardArrowUpIcon fontSize="small"/></Button>
                <p style={{float:'left', margin: '4px'}}>{this.state.count}</p>
            </div>
        )
    }
}

export default Upvote