import React from 'react'
import axios from 'axios'
import { queryCache, useQuery } from 'react-query'
export const fetchPost = (postId) =>
  axios.get(`/api/posts/${postId}`).then((res) => res.data)

export default function usePost(postId) {
 
  return useQuery(
    ['post',postId],
    ()=>fetchPost(postId),{
    getInitialData : ()=>{
      return queryCache.getQueryData('posts')?.find(d => d.id == postId)
    },
    initialStale : true
    }
    )
}
