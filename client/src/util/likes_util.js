import axios from "axios";

export const newLike = async (like) => {
   
    return await axios({
        url: `/show/${like.articleId}/likes/new`,
        method: "POST",
        data: {
            // userId: comment.userId,
            // articleId: comment.articleId,
            // body: comment.body
            like
        }
    })
}

export const fetchLikes = async (articleId) => {
    return await axios({
        url: `/show/${articleId}/likes`,
        method: "GET",
        data: {
            likes: []
        }
    })
}