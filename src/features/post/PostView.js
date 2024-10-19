import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from './postSlice';

const PostView = () => {
    const {isLoading, posts, error} = useSelector((state)=> state.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
    }, []);
    
  return (
    <div>
        <h1>All Post</h1>
        {isLoading && <h4>Loading....</h4>}
        {error && <h3>{error}</h3>}
        {posts && posts.map((post)=>{
            return <div key={post.id}>
                <h4>{post.title}</h4>
                <span>{post.body}</span>
            </div>
        })}
    </div>
  )
}

export default PostView;