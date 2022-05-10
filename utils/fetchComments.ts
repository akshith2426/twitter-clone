import { Comment } from './../typings.d';
export const fetchComments = async (tweetId: string) => {

    const res = await fetch(`/api/getComments?tweetId=${tweetId}`);
    
    const comments: Comment[] = await res.json();

    return comments;
}