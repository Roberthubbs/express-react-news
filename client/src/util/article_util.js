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