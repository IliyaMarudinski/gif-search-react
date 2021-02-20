import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Gifs extends Component{

    constructor(props){
        super(props)
        this.state={
          view:'list'
        }       
        this.handleView = this.handleView.bind(this)
    }

    componentDidMount(){
      if(this.props.location.hasOwnProperty("typeProps")){
        this.props.searchGifs(this.props.location.typeProps.type)
      }else{
        this.props.fetchTrandingGifs()
      } 
      
    }

    handleView(){
      this.setState({
        view: this.state.view === "grid" ? "list" : "grid"
      })
      
    }

    render(){
      
        const { gifs, loading, type } = this.props
        return(
            <>        
            <div className="row">
              <div col-4>
              <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">{`${type} GIFs`}</h1>
              </div>
              
              <div className="col-8 container-fluid" >
              <button onClick={this.handleView} type="button" className="btn btn-dark float-right mt-4 ">{this.state.view === "list" ? "List view" : "Grid view"}</button>
              </div>
              
            </div>   
            <hr className="mt-2 mb-5"/>
              {
              loading ? 
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div> 
                :
                <div className="row display-flex text-center text-lg-left">
                  {                    
                    gifs.map((gif) => 
                      <div key = {gif.id} className={this.state.view === "list" ? 'col-12' : 'col-3'}>
                      {
                        this.state.view === "list" ?
                        <div className="card"> 
                                            
                        <div className="card-body">
                        <div className="row"> 
                          <div className = "col-3">
                          <Link to={`/profile/${gif.id}`} className="d-block mb-4 h-100">            
                            <img className="img-fluid img-thumbnail" src={gif.url} alt=""/>                                            
                          </Link>
                          </div>
                          <div className = "col">
                            <h5 className="card-title">{gif.title}</h5>
                            <p className="card-text">{gif.username}</p>
                            <a className="card-text" target="blank" href={gif.profile}>{gif.profile}</a>                            
                          </div>                          
                        </div>
                        </div>
                      </div>
                        :
                        <Link to={`/profile/${gif.id}`} className="d-block mb-4 h-100">            
                          <img className="img-fluid img-thumbnail" src={gif.url} alt=""/>                                            
                        </Link>
                      }
                      </div>
                    )                    
                  }                                                                    
                </div>
              }
              </>            
        )
    }

}