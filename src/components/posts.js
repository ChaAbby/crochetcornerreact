import React from "react";
import axios from "axios";

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
          <div>
          <header>
            Data Generated From Django
          </header>
          <hr></hr>
          {this.state.details.map((output, id) => (
            <div key = {id}>
              <div>
              <h2>Title</h2>
              <h4>by {output.author}</h4>
              <p>{output.description}</p>
              </div>
            </div>
          ))}
          </div>
        )
      }
}

export default GetPost;
