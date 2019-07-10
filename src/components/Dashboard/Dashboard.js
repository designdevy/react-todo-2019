import React from 'react';

import { Box } from 'grommet';

import Sidebar from 'components/Sidebar';
import Content from 'components/Content';

const Dashboard = props => {
  return (
    <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
      <Content
        newItemText={props.newItemText}
        updateNewTextValue={props.updateNewTextValue}
        createNewTodo={props.createNewTodo}
        todoTableRows={props.todoTableRows}
      />
      <Sidebar
        size={props.size}
        showSidebar={props.showSidebar}
        hideSidebar={props.hideSidebar}
      />
    </Box>
  );
};

export default Dashboard;
