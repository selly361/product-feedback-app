import { Comment } from "types";

function numberOfComments(comments: Comment[]){
    const numberOfComments = comments.reduce((prev, curr) => {
        return prev + (curr.replies?.length || 0)
    }, comments.length)

    return numberOfComments
}

export { numberOfComments }