import React from 'react';
import { Box } from 'grommet';

const Header = props => (
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
  />
);

export default Header;
