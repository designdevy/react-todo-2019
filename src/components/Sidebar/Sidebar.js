import React from 'react';

import { Box, Button, Collapsible, Layer } from 'grommet';

import { FormClose } from '../../icons';

const Sidebar = props => {
  return (
    <>
      {!props.showSidebar || props.size !== 'small' ? (
        <Collapsible direction="horizontal" open={props.showSidebar}>
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
            <Button icon={<FormClose />} onClick={props.hideSidebar} />
          </Box>
          <Box fill background="light-2" align="center" justify="center">
            sidebar
          </Box>
        </Layer>
      )}
    </>
  );
};

export default Sidebar;
