import React from 'react'
import "../component-styles/DoubtBox.css";
import { Avatar, Button } from "@material-ui/core";
import { PostDoubt } from '../../services/postingservices';


class DoubtBox extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title:'',
            description:'',
            image:''
        }
    }

    handleTitle = (e) => {
        this.setState({
            title:e.target.value,
        })
    }

    handleDesc = (e) => {
        this.setState({
            description:e.target.value,
        })
    }

    handleImage = (e) => {
        this.setState({
            image:e.target.value,
        })
    }

    handleSubmit = async (e) =>{
        e.preventDefault();
        const status = await PostDoubt(data);
    }

    render(){
        return(
            <div className="doubtBox">
                <form onSubmit={this.handleSubmit}>
                   <input type='text' onChange={this.handleTitle}/>
                   <textarea onChange={this.handleDesc}/>
                   <input type='file' onChange={this.handleImage}/>
                   <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}

export default DoubtBox;
