import React from "react";
import { useState } from 'react';
import NewPostForm from "./new_post_form";

function PostTypeForm(){
    const [postType, setPostType] = useState("Select Post Type");

    const handleChange = (event) => {
    setPostType(event.target.value)
    }

    return (
    <div className="selector-form-container">
    <form >
        <select value={postType} onChange={handleChange}>
            <option value="SelectPostType">Select Post Type</option>
            <option value="Pattern">Pattern</option>
            <option value="Inspiration">Inspiration</option>
        </select>
    </form>
        <NewPostForm postType={postType}/>
    </div>
    )
}

export default PostTypeForm;