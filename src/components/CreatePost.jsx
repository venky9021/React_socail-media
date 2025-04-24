import { useContext, useRef } from "react"
import { PostList } from "../store/post-list-store"
import { useNavigate } from "react-router-dom"

const CreatePost=()=>{
  const {addPost}=useContext(PostList)
   const navigate = useNavigate()
   const userIdElement =useRef()
   const titleElement =useRef()
   const bodyElement =useRef()
   const reactionsElement =useRef()
   const tagsElement =useRef()
   const handleSubmit=(event)=>{
     event.preventDefault()
     const userId = userIdElement.current.value;
     const title = titleElement.current.value;
     const body = bodyElement.current.value;
     const reactions = reactionsElement.current.value;
     const tags = tagsElement.current.value.split(' ');
     userIdElement.current.value=""
     titleElement.current.value=''
     bodyElement.current.value=''
     reactionsElement.current.value=''
     tagsElement.current.value=''
     addPost(userId,title,body,reactions,tags)
     navigate('/')
   }
  return(
<form className="create-post" onSubmit={handleSubmit}>
  <div className="mb-3">
  <div className="mb-3">
    <label  htmlFor="userId" className="form-label">Enter ur user Id</label>
    <input type="text" ref={userIdElement}className="form-control" id="userId" />  
  </div>
    <label  htmlFor="title" className="form-label">post title</label>
    <input type="text" ref={titleElement} className="form-control" id="title" />  
  </div>
  <div className="mb-3">
    <label  htmlFor="body" className="form-label">post content</label>
    <textarea rows={4} type="text" ref={bodyElement} className="form-control" id="body"  placeholder="tell us more about it"/>  
  </div>
  <div className="mb-3">
    <label  htmlFor="reactions" className="form-label">how many people reacted to this post</label>
    <input type="text" ref={reactionsElement} className="form-control" id="reactions" />  
  </div>
  <div className="mb-3">
    <label  htmlFor="tags" className="form-label">enter ur hashtags here</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" />  
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}
export default CreatePost