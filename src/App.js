import React, {useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

    const [post, setPost] = useState([
        {id: 1, title: "Javascript", description: "Description"},
        {id: 2, title: "Javascript", description: "Description"},
        {id: 3, title: "Javascript", description: "Description"},
    ])

    const createPost = (newPost) => {
        setPost([...post, newPost])
    }

    const removePost = (postDelete) => {
        setPost(post.filter(p=>p.id !== postDelete.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList remove={removePost} post={post} title="посты про ДЖИЭС"/>
        </div>
    );
}

export default App;
