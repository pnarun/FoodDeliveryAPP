import React from "react";
import { json } from "react-router";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "DummyName",
        location: "Default",
      },
    };
    // console.log(this.props.name + "UserClass constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "UserClass componentDidMount");
    // API calls here
    const data = await fetch("https://api.github.com/users/pnarun");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });
  }

  componentDidUpdate(){
    console.log(this.props.name + "UserClass componentDidUpdate");
  }
  componentWillUnmount() {
    console.log(this.props.name + "UserClass componentWillUnmount");
  }

  render() {
    const { name, location, avatarUrl } = this.state.userInfo;
    // console.log(name + "UserClass render");
    return (
      <div className="user-card">
        <img src={avatarUrl} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 8660397320</h4>
      </div>
    );
  }
}

export default UserClass;
