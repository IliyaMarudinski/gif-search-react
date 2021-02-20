import axios from 'axios';
import constants from '../constants';

const httpClient = {
    get(url, params, success, failure) {
        return this.request({
            method: 'get',
            url,
            params,
            success,
            failure,
        });
    },
        
    request: (options = {}) => {
        if (!options.url) {
            console.log('URL is required');
            return;
        }

        const data = Object.assign({
            method: 'get',
            baseURL: constants.baseUrl,
        }, options);

        data.params = Object.assign({}, options.params, {api_key: constants.apiKey});

        return new Promise((resolve, reject) => {
            axios(data)
            .then((response) => {
                if (options.success) {
                    options.success(response.data);
                }
                resolve(response.data);
            })
            .catch((error) => {
                if (options.failure) {
                    options.failure(error);
                }
                reject(error);
            });

        })

    },
};

export default httpClient;