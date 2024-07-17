// import { useState } from "react"
// import Button from "../components/button"
// import GetPost from "../components/posts"
// import axios from 'axios';
// import React from 'react';
// import HelloWorld from '../components/hello_world';
// import NewPost from '../components/new_post';

import NewPostForm from "../components/new_post_form";
import SelectPostType from "../components/post_type_selector";

// export function NewPostPage(){
//     return (
//         <>
//             <h1>This is the new post page</h1>
//             {/* <Button/> */}
//             {/* <div>
//             <GetPost/> */}
//     {/* <a href='/newPost'>
//     <button type="button">Click Me!</button>
//     </a> */}
//     {/* </div> */}
//         </>
//     )
// }
export function NewPostPage(){
    return (
        <>
        <SelectPostType/>
        </>
    )
}