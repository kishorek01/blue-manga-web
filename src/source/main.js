import React, { Component } from "react";
import PropTypes from "prop-types";
import { Player } from "@lottiefiles/react-lottie-player";
import "./main.css";
import Homepage from "./home";
export default class Main extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      splashscreen: true,
    };
  }
  componentDidMount(){
      setTimeout(()=>{
          this.setState({splashscreen:false})
      },6000)
  }
  splashclose() {
    console.log("Closing Splash Screen");
    this.setState({ splashscreen: false });
  }
  render() {
    if (this.state.splashscreen) {
      return (
        <div className="splash">
          <Player
            autoplay
            loop
            src={require("../assets/splash.json")}
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
      );
    } else {
      return <Homepage {...this.props} />;
    }
  }
}
