import React from 'react'
import axios from 'axios'
import { queryCache, useQuery } from 'react-query'
export default function usePosts() {


return useQuery(
  'posts',
  () => axios.get('api/posts').then((res)=>res.data),
  {
    onSuccess : data =>{
      data.forEach(post =>{
        queryCache.setQueryData(['posts',post.id],post,{
          staleTime:5000
        })
      })
    }
  }
  )
}
