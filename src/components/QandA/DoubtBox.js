import React, { Component } from 'react'
import "../component-styles/DoubtBox.css";
import { PostDoubt } from '../../services/postingservices';
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";


class DoubtBox extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title:'',
            description:'',
            image:null
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
        console.log(e.target.files[0]);
        this.setState({
            image:e.target.files[0],
        })
    }

    handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await PostDoubt(this.state);
        if(res.status === 200){
            this.props.history.push('/QandA');
        }
    }

    render(){
        return(

        <div className="doubtBox" style={{padding: "2rem"}}>
            <h1 style={{marginBottom: "2rem"}}>Post Doubt</h1>

            <form onSubmit={this.handleSubmit}>
                <TextField label="Question"
                           required
                           fullWidth
                           margin="normal"
                        //    value={title}
                           onChange={this.handleTitle}/>

               <textarea className="doubtBox__input"
                         placeholder="Description"
                         required
                        //  value={content}
                         style={{width: "100%", height: 250}}
                         onChange={this.handleDesc}>

               </textarea>
               <input type='file' onChange={this.handleImage} className="post__image_upload_input"/>
                <Button className="doubtBox__doubtButton" type="submit" variant="contained" color="primary">Create</Button>
            </form>
        </div>

            /* <div className="doubtBox">
                <form onSubmit={this.handleSubmit}>
                   <input type='text' onChange={this.handleTitle}/>
                   <textarea onChange={this.handleDesc}/>
                   <input type='file' onChange={this.handleImage}/>
                   <input type="submit" value="Submit" />
                </form>
            </div>  */
        );
    }

}

export default DoubtBox;
