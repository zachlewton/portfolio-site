import Burger from "react-css-burger";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Components/nav/Nav";
import style from "./App.module.css";
import About from "./Components/About/About";
import Animation from "./Components/Animation";
import Posts from "./Components/posts/Posts";
import MediaQuery from "react-responsive";
import Illustration from "./Components/Illustration";
import GraphicDesign from "./Components/GraphicDesign";
import Other from "./Components/Other";
import Film from "./Components/Film";
import SideNav from "./Components/SideNav/SideNav";
import { Transition, animated } from "react-spring/renderprops";
import { CssTransition, TransitionGroup } from "react-transition-group";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleNavClick = () => {
    this.setState({
      active: false,
    });
  };

  render() {
    return (
      <Router>
        <div className={style.app}>
          <MediaQuery minWidth={769}>
            <div className={style.navbar}>
              <Nav onClick={this.handleCopy} />
            </div>
          </MediaQuery>

          <MediaQuery maxWidth={768}>
            <div className={style.burgerMenu}>
              <Burger
                burger="arrow"
                hoverOpacity={0.8}
                scale={1}
                onClick={() => this.setState({ active: !this.state.active })}
                active={this.state.active}
                marginTop="13px"
                marginLeft="8px"
              />
            </div>

            <h1 className={style.header}>abby lee</h1>

            {this.state.active && (
              <div className={style.sideNav}>
                <SideNav navClick={this.handleNavClick} />
              </div>
            )}
          </MediaQuery>

          <Switch>
            <div className={style.content}>
              <Route path="/" exact component={Posts} />
              <Route path="/illustration" exact component={Illustration} />
              <Route path="/graphicDesign" exact component={GraphicDesign} />
              <Route path="/other" exact component={Other} />
              <Route path="/animation" exact component={Animation} />
              <Route path="/film" exact component={Film} />
              <Route path="/about" exact component={About} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}
