import React from "react";
import LoginForm from "./component/LoginForm";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  componentDidMount() {
    fetch("api")
      .then((res) => res.json())
      .then((data) => this.setState({ username: data.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        {username ? `Hello ${username}` : "Hello World"}
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default App;
