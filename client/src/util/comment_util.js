import axios from "axios";

export const newComment = async(comment) => {
    
    return await axios({
        url: `/show/${comment.articleId}/new`,
        method: "POST",
        data: {
            // userId: comment.userId,
            // articleId: comment.articleId,
            // body: comment.body
            comment
        }
    })
}

export const fetchComments = async(articleId) => {
    return await axios({
        url:`show/${articleId}/comments`,
        method: "GET",
        data: {
            comments: ""
        }
    })
}