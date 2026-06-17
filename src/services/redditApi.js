import axios from 'axios';
const BASE_URL = 'https://www.reddit.com';

export const fetchPostsByReddit = async(subreddit)=>{
    const response = await axios.get(`${BASE_URL}/r/${subreddit}.json`);     
    return response.data.data.children.map((p)=> p.data)                                                                                                                                                                                                       
}

export const searchPosts = async(query)=>{
    const response = await axios.get(`${BASE_URL}/search.json?q=${query}`);
    return response.data.data.children.map((p)=> p.data)
}

export const fetchPostComments = async (postId) => {
    const response = await axios.get(`${BASE_URL}/comments/${postId}.json`);
    return response.data[1].data.children.map((c) => c.data);
  };