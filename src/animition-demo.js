import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

class AnimationDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.clickToggle = this.clickToggle.bind(this);
  }

  render() {
    return(
      <Fragment>
        <CSSTransition
          appear={true}
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered={(el) => {el.style.color = 'red'}}
        >
          <div>Hello</div>
        </CSSTransition>
        <button onClick={this.clickToggle}>toggle click</button>
      </Fragment>
    )
  }

  clickToggle() {
    this.setState((prevState) => ({
      show: prevState.show ? false : true
    }));
  }
}

export default AnimationDemo;