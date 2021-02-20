import { connect } from 'react-redux'
import { Navbar } from './navbar'

import { searchGifs } from '../../store/reducers/gifsActions'


const mapDispatchToProps = dispatch => ({
    searchGifs: (input) => dispatch(searchGifs(input))
})

export const NavbarContainer = connect(null, mapDispatchToProps)(Navbar)