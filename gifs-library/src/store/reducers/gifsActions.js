import {GifsService} from '../../services/gifsService'
import {toGifsModel, toGifsProfileModel} from '../../services/models/gifsModels'

export const fetchTrandingGifs = () =>{
    return async dispatch => {
        dispatch(fetchGifsRequest())
        try{
            const gifs = await GifsService.getTrendingGifs()
            dispatch(fetchGifsSuccess(gifs.data.map(toGifsModel)))
        }catch(error){
            console.log("Fetch gifs failure!!!")            
        }
    }
}

export const searchGifs = input =>{
    return async dispatch =>{
        dispatch(fetchGifsRequest())
        try{
            const result = await GifsService.searchGifs(input)
            const gifs = result.data.map(toGifsModel)
            dispatch(searchGifsSuccess({gifs: gifs, type:input}))
        }catch(error){
            console.log("Search gifs failure!!!")
        }
    }
}

export const fetchGifById = gifId =>{
    return async dispatch =>{        
        try{
            const result = await GifsService.getGifById(gifId)              
            const gif = toGifsProfileModel(result.data)
            dispatch(getGifProfileSuccess(gif))                 
        }catch(error){
            console.log("Get gif failure!!!")
        }
    }
}

export const fetchGifsRequest = () =>{
    return{
        type: "FETCH_GIFS_REQUEST"
    }
}

export const fetchGifsSuccess = gifs =>{
    return {
        type: "FETCH_GIFS_SUCCESS",
        payload: gifs
    }
}
export const searchGifsSuccess = data =>{
    return {
        type: "SEARCH_GIFS_SUCCESS",
        payload: data
    }
}

export const getGifProfileSuccess = data =>{
    return {
        type: "FETCH_GIF_PROFILE_SUCCESS",
        payload: data
    }
}