import axios from 'axios';

let allHeaders = {
    "Access-Control-Allow-Origin": "*"
}
export const receiveAll = async() => {
    
    return await axios.request('/all', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}
export const receiveConservative = async() => {
    
    return await axios.request('/conservative', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}

export const fetchArticle = async(id) => {
   
    return await axios.request(`/show/${id}`, {
        method: "GET",
        
        data: {
            article: ""
        }
    })
};

export const receiveLiberal = async() => {
    
    return await axios.request('/liberal', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}
export const receiveLiberalElection = async() => {
    
    return await axios.request('/liberal/election', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}
export const receiveConservativeElection = async() => {
    
    return await axios.request('/conservative/election', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}
export const receiveLiberalBusiness = async() => {
    
    return await axios.request('/liberal/business', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}
export const receiveConservativeBusiness = async() => {
    
    return await axios.request('/conservative/business', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}
export const receiveLiberalWorld = async() => {
    
    return await axios.request('/liberal/world', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}
export const receiveConservativeWorld = async() => {
    
    return await axios.request('/conservative/world', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}
export const receiveSports = async() => {
    
    return await axios.request('/sports', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}

export const receiveCategory = async(category) => {
    return await axios.request(`/categories/${category}`, {
        data: "",
        method: "POST",
        headers: allHeaders
    })
}