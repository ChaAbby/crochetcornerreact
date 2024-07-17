import axios from "axios";
import React,{ useState } from 'react';
import ReactDOM from 'react-dom/client';

function NewPostForm({postType}){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        console.log("beep")
        event.preventDefault();
        alert(inputs);
        axios.post(`http://localhost:8000/api/${postType.toLowerCase()}`, {inputs})
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
      }

      if (postType === "Pattern") {
        return (
          <form onSubmit={handleSubmit}>
            <label>Title:
            <input 
              type="text" 
              name="title" 
              value={inputs.title || ""} 
              onChange={handleChange}
            />
            </label>
            <label>Description:
              <input 
                type="text" 
                name="description" 
                value={inputs.description || ""} 
                onChange={handleChange}
              />
              </label>
              <input type="submit" />
          </form>
        )
      } else if (postType === 'Inspiration'){
        return (
            <form onSubmit={handleSubmit}>
              <label>Title:
              <input 
                type="text" 
                name="title" 
                value={inputs.title || ""} 
                onChange={handleChange}
              />
              </label>
              <label>Description:
                <input 
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
                <label>Seeking Pattern:
                <input 
                  type="checkbox" 
                  name="seeking_pattern" 
                  value={inputs.seeking_pattern || ""} 
                  onChange={handleChange}
                />
                </label>
                <input type="submit" />
            </form>
        )
      }
}

export default NewPostForm;