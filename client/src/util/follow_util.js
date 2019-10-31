import axios from "axios";

export const newFollow = async (follow) => {
    const { userId, userToFollow } = follow
    
    return await axios({
        url: `/user/${userId}/follows`,
        method: "POST",
        data: {
            
            follow,
           
        }
    })
}
export const destroyFollow = async (follow) => {
    const { userId, userToFollow } = follow
    return await axios({
        url: `/${userId}/follows`,
        method: "DELETE",
        data: {

            follow
        }
    })
}

export const seeFollows = async (userId) => {
   
    return await axios({
        url: `/user/${userId}/follows`,
        method: "GET",
        data: {

            follows: []
        }
    })
}