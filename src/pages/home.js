import GetPost from "../components/list_posts";
import '../styles.css'

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