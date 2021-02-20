import {reshape} from '../../utilities/utilities'


export const toGifsModel = (gifs = {}) => reshape(gifs, {
    'id': 'id',
    'images.downsized.url': 'url',
    'title': 'title',
    'user.username': 'username',
    'user.profile_url': 'profile'
})

export const toGifsProfileModel = (gif = {}) => reshape(gif, {
    'id': 'id',
    'title': 'title',
    'images.downsized.url': 'url',
    'rating':'rating',
    'import_datetime': 'date',
    'user.username': 'username',
    'user.description': 'description',
    'user.profile_url': 'profile'
})
