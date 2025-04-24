import { createContext, useReducer } from "react";


 export const PostList= createContext({
 postList:[],
 addPost:()=>{},
 deletePost:()=>{}

})
const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;
  if(action.type==="DELETE_POST"){
    newPostList=currPostList.filter(post=>post.id !==action.payload.postId)
  }else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currPostList]
  }
  return newPostList
}
  const PostListProvider=({children})=>{
    const [postList,dispatchPostList] =  useReducer(postListReducer,DEFAULT_POST_LIST)
  
    const addPost=(userId,title,body,reactions,tags)=>{
      dispatchPostList({
        type:'ADD_POST',
        payload:{
          
            id:Date.now(),
            title:title,
            body:body,
            reactions:reactions,
            userId:userId,
            tags:tags
          
        }
      })
    }
 const deletePost=(postId)=>{
 dispatchPostList({
  type:"DELETE_POST",
  payload:{
    postId,
  }
 })
 }
    return <PostList.Provider value={{
      postList,
      addPost,
      deletePost,
  }}>{children}</PostList.Provider>
  }
  const DEFAULT_POST_LIST=[
    {
    id:'1',
    title:'GO TO HYD',
    body:'Hi Frnds, I am gng to Hyd',
    reactions:0,
    userId:'user-9',
    tags:['vacation','hyd','enjoy']
  },
  
  {
    id:'2',
    title:'pass ho gaya',
    body:'4 years of tp still got placed',
    reactions:4,
    userId:'user-12',
    tags:['btec','pass','super']
  }
  ]
export default PostListProvider
