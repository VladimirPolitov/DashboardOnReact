import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [inputState, setInputState] = useState({title:'', description:''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...inputState, id: Date.now()
        }
        create(newPost)
        setInputState({title:'', description:''})
    }


    return (
            <form>
                <MyInput
                    value={inputState.title}
                    onChange={e => setInputState({...inputState, title: e.target.value})}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    value={inputState.description}
                    onChange={e => setInputState({...inputState, description: e.target.value})}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
    );
};

export default PostForm;