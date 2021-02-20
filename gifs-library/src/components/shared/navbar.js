import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom';
import {capitalize} from '../../utilities/utilities'

export class Navbar extends Component{

    constructor(props){
        super(props)
        this.state = {
            searchValue: '',
            type: ''
        }

        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }

    handleSearchChange(event) {
        this.setState({searchValue: event.target.value})
    }

    handleSearchSubmit(event) {        
        this.props.searchGifs(this.state.searchValue)
        event.preventDefault()
    }

    handleTypeSelect(value){                
        this.setState({type:value}) 
        if(value !== ''){
            this.props.searchGifs(capitalize(value))
        }   
    }

    render(){
        
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink onClick={() => this.handleTypeSelect('')} to="/" className="navbar-brand" >
                    <img src="https://media.giphy.com/media/11vDNL1PrUUo0/giphy.gif" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Powered by Giphy
                </NavLink>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    
                    <li className={`nav-item ${this.state.type === 'pizza' ? 'active': ''}`}>
                    <NavLink to={{
                        pathname : "/",
                        typeProps:{
                            type:"pizza"
                        } 
                    }} type = "button" className="btn nav-link" onClick={() => this.handleTypeSelect('pizza')}>Pizza</NavLink>
                    </li>
                    <li className={`nav-item ${this.state.type === 'sports' ? 'active': ''}`}>
                    <NavLink to={{
                        pathname : "/",
                        typeProps:{
                            type:"sports"
                        } 
                    }} type = "button" className="btn nav-link" onClick={() => this.handleTypeSelect('sports')}>Sports</NavLink>
                    </li>
                    <li className={`nav-item ${this.state.type === 'movies' ? 'active': ''}`}>
                    <NavLink to={{
                        pathname : "/",
                        typeProps:{
                            type:"movies"
                        } 
                    }} type = "button" className="btn nav-link" onClick={() => this.handleTypeSelect('movies')}>Movies</NavLink>
                    </li>
                    <li className={`nav-item ${this.state.type === 'games' ? 'active': ''}`}>
                    <NavLink to={{
                        pathname : "/",
                        typeProps:{
                            type:"games"
                        } 
                    }} type = "button" className="btn nav-link" onClick={() => this.handleTypeSelect('games')}>Games</NavLink>
                    </li>
                </ul>
                <form onSubmit={this.handleSearchSubmit} className="form-inline my-2 my-lg-0">
                    <input value={this.state.searchValue} onChange={this.handleSearchChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>
        )
    }

}