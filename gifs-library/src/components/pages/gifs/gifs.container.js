
import { connect } from 'react-redux'
import { Gifs } from './gifs'

import { fetchTrandingGifs, searchGifs} from '../../../store/reducers/gifsActions'
import {getGifs, getLoading, getType} from '../../../store/reducers/gifsReducer'

const mapStateToProps = state => {
    return {
        gifs:getGifs(state),
        loading: getLoading(state),
        type: getType(state)
        
    }
}


const mapDispatchToProps = dispatch => ({
    fetchTrandingGifs: () => dispatch(fetchTrandingGifs()),
    searchGifs: (input) => dispatch(searchGifs(input))
})

export const GifsContainer = connect(mapStateToProps, mapDispatchToProps)(Gifs)