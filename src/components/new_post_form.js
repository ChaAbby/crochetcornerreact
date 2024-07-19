import axios from "axios";
import React,{ useState } from 'react';
import {Navigate} from 'react-router-dom';
import '../form.css'

function NewPostForm({postType}){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        var today = new Date()
        event.preventDefault();
        var requestData

        switch(postType) {
          case 'Pattern':
          requestData =     {
            "title": inputs['title'],
            "instructions": inputs['instructions'],
            "description": inputs['description'],
            "author": `${inputs['first_name']} ${inputs['last_name']}`,
            "pub_date": today
        }
          break;
          case 'Inspiration':
            requestData =     {
              "title": inputs['title'],
              "insp_link": inputs['insp_link'],
              "instructions": inputs['instructions'],
              "description": inputs['description'],
              "author": `${inputs['first_name']} ${inputs['last_name']}`,
              "pub_date": today
          }
          break;
          default:
            requestData = {};
        }


        axios.post(`http://localhost:8000/api/${postType.toLowerCase()}/`, requestData)
        .then(response => {
            console.log(response.data);
            window.open("/", "_self")
        })
        .catch(error => {
            console.error(error);
            alert("There was an issue submiting your request. Please try again later")
        });
        
      }

      if (postType === "Pattern") {
        return (
          <div className="post-form-container">
          <form onSubmit={handleSubmit} >
            <label>Title:
            <input 
              type="text" 
              name="title" 
              value={inputs.title || ""} 
              onChange={handleChange}
            />
            </label>
            <label>First Name:
            <input 
              type="text" 
              name="first_name" 
              value={inputs.first_name || ""} 
              onChange={handleChange}
            />
            </label>
            <label>Last Name:
            <input 
              type="text" 
              name="last_name" 
              value={inputs.last_name || ""} 
              onChange={handleChange}
            />
            </label>
            <label>Description:
              <textarea
                className="large-text"
                name="description" 
                value={inputs.description || ""} 
                onChange={handleChange}
              />
              </label>
              <label>Instructions:
                <textarea 
                  className="large-text"
                  type="text" 
                  name="instructions" 
                  value={inputs.instructions || ""} 
                  onChange={handleChange}
                />
                </label>
              <input type="submit" className="submit" />
          </form>
          </div>
        )
      } else if (postType === 'Inspiration'){
        return (
          <div className="post-form-container">
            <form onSubmit={handleSubmit}>
              <label>Title:
              <input 
                type="text" 
                name="title" 
                value={inputs.title || ""} 
                onChange={handleChange}
              />
              </label>
              <label>First Name:
            <input 
              type="text" 
              name="first_name" 
              value={inputs.first_name || ""} 
              onChange={handleChange}
            />
            </label>
            <label>Last Name:
            <input 
              type="text" 
              name="last_name" 
              value={inputs.last_name || ""} 
              onChange={handleChange}
            />
            </label>
              <label>Description:
                <textarea 
                  className="large-text"
                  type="text" 
                  name="description" 
                  value={inputs.description || ""} 
                  onChange={handleChange}
                />
                </label>
                <label>Inspiration Link:
                <input 
                  type="text" 
                  name="insp_link" 
                  value={inputs.insp_link || ""} 
                  onChange={handleChange}
                />
                </label>
                <input type="submit" />
            </form>
            </div>
        )
      } else{
        return <div>
          <p> Please select a post type from the menu above</p>
        </div>
      }
}

export default NewPostForm;