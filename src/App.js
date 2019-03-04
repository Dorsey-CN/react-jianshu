import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem.js';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this)

    this.state = {
      inputValue: '',
      list: []
    }
  }

  componentDidMount() {
    // axios.get('/api/get')
    //   .then((res) => {
    //     this.setState(() => ({
    //       list: res.data
    //     }));
    //   })
    //   .catch(() => {
    //     console.error('error');
    //   });
  }

  render() {
    return (
      <Fragment>
        {/*注释*/}
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          ref={(input) => {this.input = input}}
        />
        <button onClick={this.handleButtonClick}>submit</button>
        <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
          key={index}
        />
      )
    })
  }

  handleInputChange(e) {
    const newValue = e.target.value;
    this.setState(() => ({
      inputValue: newValue
    }));
  }

  handleButtonClick() {
    if(!this.state.inputValue) return;
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      // console.log(this.ul.querySelectorAll('div').length);
    });
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    });
  }
}

export default App;
