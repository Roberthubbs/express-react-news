import axios from 'axios';

let allHeaders = {
    "Access-Control-Allow-Origin": "*"
}
export const receiveAll = async() => {
    // debugger;
    return await axios.request('/all', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}
export const receiveConservative = async() => {
    // debugger;
    return await axios.request('/conservative', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}

export const fetchArticle = async(id) => {
    // debugger;
    return await axios.request(`/show/${id}`, {
        method: "GET",
        
        data: {
            article: ""
        }
    })
};

export const receiveLiberal = async() => {
    // debugger;
    return await axios.request('/liberal', {
        data: "",
        method: "post",
        headers: allHeaders
        
    })
}