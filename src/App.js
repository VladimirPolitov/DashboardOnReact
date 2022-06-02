import React, {useEffect, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";

function App() {

    const [post, setPost] = useState([])
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(post, filter.sort, filter.query)


    const createPost = (newPost) => {
        setPost([...post, newPost])
        setModal(false)
    }


    useEffect(() => {
        fetchPosts()
    }, [])


    async function fetchPosts() {
        const posts = await PostService.getAll()
        setPost(posts)
    }


    const removePost = (postDelete) => {
        setPost(post.filter(p => p.id !== postDelete.id))
    }


    return (
        <div className="App">
            <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} post={sortedAndSearchedPosts} title="посты про ДЖИЭС"/>
        </div>
    );
}

export default App;
