import httpClient from '../http/httpClient'
export class GifsService{
    
    static  getTrendingGifs(){       
        return httpClient.get("gifs/trending?limit=25")
        
    }
    static searchGifs(input){
        return httpClient.get(`gifs/search?q=${input}&limit=25`)
    }
    static getGifById(id){
        return httpClient.get(`gifs/${id}?gif_id=${id}`)
    }
}

