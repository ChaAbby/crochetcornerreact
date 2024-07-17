import React from "react";
import axios from "axios";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import NewPostForm from "./new_post_form";

function SelectPostType(){
    const [postType, setPostType] = useState("Select Post Type");

    const handleChange = (event) => {
    setPostType(event.target.value)
    }

    return (
    <form>
        <select value={postType} onChange={handleChange}>
            <option value="SelectPostType">Select Post Type</option>
            <option value="Pattern">Pattern</option>
            <option value="Inspiration">Inspiration</option>
        </select>
        <NewPostForm postType={postType}/>
    </form>
    )
}

export default SelectPostType;