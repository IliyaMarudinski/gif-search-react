import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'



export class GifProfile extends Component{
    
    constructor(props){
        super(props)  
    }
    
    componentDidMount(){
        const {match} = this.props
        const id = match.params.id
        this.props.fetchGifById(id)
       
    }

    componentWillUnmount(){
        console.log("unmount")
        
    }

    render(){
        const { gif, loading} = this.props
        console.log(gif)
        return(
            <>
            <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">{gif.title}</h1>
            <hr className="mt-2 mb-5"/>

            <div className="card mb-3">
                <img className="rounded mx-auto d-block mt-3" src={gif.url} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{`Uploaded by: ${gif.username}`} </h5>
                    <a className="card-text" target="blank"  href={gif.profile}>{gif.profile}</a>
                    <p className="card-text"><small className="text-muted">{`Uploaded date: ${gif.date}`}</small></p>
                </div>
            </div>
            </>        
        )
    }

}
