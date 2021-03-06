import React, { Component } from 'react';

import { Box, Grommet, ResponsiveContext } from 'grommet';

import { theme, GlobalStyle } from 'theme';
import Header from 'components/Header';
import Dashboard from 'components/Dashboard';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
      userName: 'Muhammad',
      todoItems: [
        { action: 'Buy Flowers', done: false },
        { action: 'Get Shoes', done: false },
        { action: 'Collect Tickets', done: true },
        { action: 'Call Joe', done: false },
      ],
      newItemText: '',
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);
    this.updateNewTextValue = this.updateNewTextValue.bind(this);
    this.createNewTodo = this.createNewTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.todoTableRows = this.todoTableRows.bind(this);
  }

  toggleTodo(todo) {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.map(item =>
        item.action === todo.action ? { ...item, done: !item.done } : item,
      ),
    }));
  }

  createNewTodo() {
    const newItem = this.state.newItemText;
    if (!this.state.todoItems.find(item => item.action === newItem)) {
      this.setState(prevState => ({
        todoItems: [...prevState.todoItems, { action: newItem, done: false }],
        newItemText: '',
      }));
    }
  }

  todoTableRows() {
    return this.state.todoItems.map(item => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleTodo(item)}
          />
        </td>
      </tr>
    ));
  }

  updateNewTextValue(e) {
    this.setState({
      newItemText: e.target.value,
    });
  }

  toggleSidebar() {
    this.setState(prevState => ({
      showSidebar: !prevState.showSidebar,
    }));
  }

  hideSidebar() {
    this.setState({
      showSidebar: false,
    });
  }

  render() {
    const { showSidebar, userName, todoItems } = this.state;

    return (
      <Grommet theme={theme} full>
        <GlobalStyle />
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <Header
                userName={userName}
                todoItems={todoItems}
                toggleSidebar={this.toggleSidebar}
              />
              <Dashboard
                newItemText={this.state.newItemText}
                updateNewTextValue={this.updateNewTextValue}
                createNewTodo={this.createNewTodo}
                todoTableRows={this.todoTableRows}
                size={size}
                showSidebar={showSidebar}
                hideSidebar={this.hideSidebar}
              />
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default Todo;
