import GetPost from "../components/posts";
import { NewPostPage } from "./new_post_page";

export function Home(){
    return (
        <>
            <GetPost/>
            <a href='/new_post'>
            <button> New Post</button>
            </a>
        </>
    )
}