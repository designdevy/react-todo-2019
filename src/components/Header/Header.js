import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Notification } from 'icons';

const Header = props => {
  return (
    <Box
      tag="header"
      align="center"
      direction="row"
      justify="between"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: '1' }}
      {...props}
    >
      <Heading level="3" margin="none" color="light-1">
        {props.userName}&apos;s Todo List (
        {props.todoItems.filter(t => !t.done).length} items to do)
      </Heading>
      <Button
        icon={<Notification color="light-1" />}
        onClick={e => props.toggleSidebar(e)}
      />
    </Box>
  );
};
export default Header;
