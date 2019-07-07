import React, { Component } from 'react';

import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';

import AppBar from '../AppBar';

import { theme, GlobalStyle } from '../../theme';

import { FormClose, Notification } from '../../icons';

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
      newItemText: 'Placeholder',
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);
    this.updateNewTextValue = this.updateNewTextValue.bind(this);
    this.createNewTodo = this.createNewTodo.bind(this);
  }

  createNewTodo() {
    const newItem = this.state.newItemText;
    if (!this.state.todoItems.find(item => item.action === newItem)) {
      this.setState(prevState => ({
        todoItems: [...prevState.todoItems, { action: newItem, done: false }],
        newItemText: 'Placeholder',
      }));
    }
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
              <AppBar>
                <Heading level="3" margin="none">
                  {userName}&apos;s Todo List (
                  {todoItems.filter(t => !t.done).length} items to do)
                </Heading>
                <Button icon={<Notification />} onClick={this.toggleSidebar} />
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align="center" justify="center">
                  <div>
                    <div>
                      <input
                        type="input"
                        value={this.state.newItemText}
                        onChange={e => this.updateNewTextValue(e)}
                      />
                      <button onClick={this.createNewTodo} type="button">
                        Add
                      </button>
                    </div>
                  </div>
                </Box>

                {!showSidebar || size !== 'small' ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button icon={<FormClose />} onClick={this.hideSidebar} />
                    </Box>
                    <Box
                      fill
                      background="light-2"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default Todo;
