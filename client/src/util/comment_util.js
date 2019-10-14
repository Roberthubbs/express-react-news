import axios from "axios";

export const newComment = comment => {
    return axios.post({
        url: "article/comments",
        data: {
            userId: comment.userId,
            articleId: comment.articleId,
            body: comment.body
        }
    })
}