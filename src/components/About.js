import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("About Constructor");
  }

  componentDidMount() {
    // console.log("About componentDidMount");
  }

  render() {
    // console.log("About Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is a Food delivery app Build using React</h2>
        {/* <User name={"Arun P N (function)"}/> */}
        <UserClass name={"Arun P N (class)"} location={"Bengaluru class"} />
      </div>
    );
  }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is a Food delivery app Build using React</h2>
//             {/* <User name={"Arun P N (function)"}/> */}
//             <UserClass name={"Arun P N (class)"} location={"Bengaluru class"}/>
//         </div>
//     )
// };

export default About;
