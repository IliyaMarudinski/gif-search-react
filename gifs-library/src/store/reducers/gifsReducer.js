
const initialState = {
    loading: false,
    gifs: [],
    error: '',
    gifsType: 'Trending',
    selected: {},
    view:'list'

}

export const reducer = (state = initialState, action) =>{
    
    switch(action.type){
        case "FETCH_GIFS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_GIFS_SUCCESS":
            return {
                ...state,                
                gifs: action.payload,
                error: '',
                loading: false
            }
        case "SEARCH_GIFS_SUCCESS":
            return {
                ...state,                
                gifs: action.payload.gifs,
                error: '',
                loading: false,
                gifsType: action.payload.type
            }
        case "FETCH_GIF_PROFILE_SUCCESS":
            return {
                ...state,                
                selected: action.payload,
                error: '',
                loading: false                
            }
        default:
            return state;
    }
}

export const getGifsReducer = state => state.gifsReducer
export const getGifs = state => getGifsReducer(state).gifs || []
export const getLoading = state => getGifsReducer(state).loading
export const getType = state => getGifsReducer(state).gifsType
export const getSelectedGif = state => getGifsReducer(state).selected 

