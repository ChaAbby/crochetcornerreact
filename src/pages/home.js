import GetPost from "../components/list_posts";
import '../component_styles/list_post.css'

export function Home(){
    return (
        <>
            <GetPost/>
            <a href='/new_post'>
            <button class="button home"> New Post</button>
            </a>
        </>
    )
}