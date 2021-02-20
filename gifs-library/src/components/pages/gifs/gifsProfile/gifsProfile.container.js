import { connect } from 'react-redux'
import {GifProfile} from './gifProfile'
import {useParams} from "react-router-dom";

import { fetchGifById} from '../../../../store/reducers/gifsActions'
import {getSelectedGif, getLoading} from '../../../../store/reducers/gifsReducer'


const mapStateToProps = state => {
    return {
        gif:getSelectedGif(state),
        loading: getLoading(state)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchGifById: (id) => dispatch(fetchGifById(id))
})

export const GifsProfileContainer = connect(mapStateToProps, mapDispatchToProps)(GifProfile)