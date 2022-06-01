import React, {useMemo, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {

    const [post, setPost] = useState([
        {id: 1, title: "Javascript", description: "Full"},
        {id: 2, title: "Python", description: "Back"},
        {id: 3, title: "Angular", description: "Frame"},
    ])

    const [filter, setFilter] = useState({sort: "", query: ""})


    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...post].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return post
    }, [filter.sort, post])


    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])


    const createPost = (newPost) => {
        setPost([...post, newPost])
    }


    const removePost = (postDelete) => {
        setPost(post.filter(p => p.id !== postDelete.id))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedPosts.length
                ? <PostList remove={removePost} post={sortedAndSearchedPosts} title="посты про ДЖИЭС"/>
                : <h1 style={{textAlign: "center"}}>Посты не найдены</h1>
            }

        </div>
    );
}

export default App;
