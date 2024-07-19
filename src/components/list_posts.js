import React from "react";
import axios from "axios";
import "../component_styles/home_page.css"
class GetPost extends React.Component{
    state = {
        details: [],
      }
    
      componentDidMount(){
        let data;
        axios.get('http://localhost:8000/api/post')
        .then(res => {
          data = res.data;
          this.setState(
            {
              details: data
            });
        })
        .catch(err => { 'there was an error'})
      }
    
      render(){
        return (
          <div class='post-container'>
          <h1 className="post-title">Recent Posts</h1>
          {this.state.details.map((output, id) => (
            <div key = {id} >
              <div className="posts">
              <h2>{output.title}</h2>
              <h4>by {output.author}</h4>
              <p>{output.description.substr(0,200)}...</p>
              </div>
            </div>
          ))}
          </div>
        )
      }
}

export default GetPost;
