import { useDispatch, useSelector } from "react-redux";
import Post from "./Post/Post";
import {addPost, removePost} from "../../redux/postSlice";
import { useState } from "react";
import "./Posts.css";

export default function Posts() {
    let posts = useSelector(state => state.posts.posts);

    const dispatch = useDispatch();

    let postsList = posts.map(post => <Post key={post.id} postId={post.id} text={post.text} onRemoveClick={(postId) => dispatch(removePost({postId}))}/>);

    let [postText, setPostText] = useState('');

    function changePostText(e) {
        setPostText(e.target.value);
    };

    function sendPost(e) {
        dispatch(addPost({postText}));
        setPostText('');
    };

    

    return(
        <div>
            <div className="posts-inf-container">
                <div className="posts-input-container">
                    <textarea className="posts-input-text" value={postText} onChange={changePostText}/>
                </div>
                <div className="posts-button-container">
                    <button className="posts-button-add" onClick={sendPost}>
                        Отправить
                    </button>
                </div>
            </div>
            <div>
                {postsList}
            </div>
        </div>
    );
}