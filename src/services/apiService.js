import axios from 'axios'

import { URL } from '../constants'

export default class ApiService {


	static getAll = () => {
		return axios.get(`${URL}`).then(response => {
			return ApiService.handleSuccess(response)
		}).catch(error => {
			return ApiService.handleError(error)
		})
	}

	static get = (id) => {
	 	return axios.get(`${URL}/${id}`).then(response => {
	 		return ApiService.handleSuccess(response)
	 	}).catch(error => {
	 		return ApiService.handleError(error)
	 	})
	}

	static search = (from, to) => {
		return axios.get(`${URL}?from=${ApiService.parseDate(from)}&to=${ApiService.parseDate(to)}`).then(response => {
			return ApiService.handleSuccess(response)
		}).catch(error => {
			return ApiService.handleError(error)
		})
	}

    static handleSuccess = (response) => {
    	return response.data
    }

    static handleError = (error) => {
    	return Promise.reject(error.response)
    }


	static parseDate = (date) => {
        return (date.replace(/\//g, "-"))
    }



}