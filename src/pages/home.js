import GetPost from "../components/list_posts";
import '../component_styles/list_post.css'
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/new_post');

    return (
        <>
        <GetPost/>
        <button className= "button" type="button" onClick={handleOnClick}>
            Create New Post
        </button>
        </>
    );
}