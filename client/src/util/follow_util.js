import axios from "axios";

export const newFollow = async (follow) => {
    const { userId } = follow
    
    return await axios({
        url: `/user/${userId}/follows`,
        method: "POST",
        data: {
            
            follow,
           
        }
    })
}
export const destroyFollow = async (follow) => {
    const { userId } = follow
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
        // data: {

        //     follows
        // }
    })
}

export const seeActivity = async(currentUser) => {
    
    return await axios({
        url: `/followings/activity/${currentUser}`,
        method: "GET",
        
    })
}