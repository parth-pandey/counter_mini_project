import React, { useState, useEffect } from "react";
import "/projects/rp/client/src/App.css" ;
import axios from "axios";

const Form = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/Posts", { username, message });
      setUsername("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:3001/Posts");
        const posts = result.data;
        console.log(posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label">
        Username:
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label className="form-label">
        Message:
        <textarea
          className="form-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button className="form-button" type="submit">
        Submit
      </button>
    </form>
  );
};

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
