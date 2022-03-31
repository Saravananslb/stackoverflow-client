import Cookies from 'universal-cookie';
import axios from 'axios';

export const cookie = new Cookies();
axios.defaults.baseURL = 'http://localhost:8000/api/v1';

export const signUpUser = async(user) => {
    return await axios.post('/auth/signup', user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const signInUser = async(user) => {
    return await axios.post('/auth/signin', user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const validateUser = async() => {
    return await axios.get(`/auth/validate`, {
        headers: {
            'Content-Type': 'application/json',
            authorization: cookie.get('Authorization')
        }
    });
}

export const createQuestions = async(body) => {
    return await axios.post(`/questions/create`, body, {
        headers: {
            'Content-Type': 'application/json',
            authorization: cookie.get('Authorization')
        }
    });
}

export const getQuestions = async(questionId) => {
    return await axios.get(`/questions/get?questionId=${questionId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const searchQuestions = async(search) => {
    return await axios.get(`/questions/search?search=${search}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const addPost = async(body) => {
    return await axios.post(`/questions/answer`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': cookie.get('Authorization')
        }
    });
}
