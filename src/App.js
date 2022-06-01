import React, {useMemo, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {

    const [post, setPost] = useState([
        {id: 1, title: "Javascript", description: "Full"},
        {id: 2, title: "Python", description: "Back"},
        {id: 3, title: "Angular", description: "Frame"},
    ])

    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)


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
        setModal(false)
    }


    const removePost = (postDelete) => {
        setPost(post.filter(p => p.id !== postDelete.id))
    }


    return (
        <div className="App">
            <MyButton style={{marginTop: "30px"}} onClick={()=>setModal(true)}>
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
