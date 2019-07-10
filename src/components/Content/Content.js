import React from 'react';

import { Box, TextInput, Button } from 'grommet';

import { theme } from 'theme';

const Content = props => {
  return (
    <Box flex align="center" justify="center">
      <div>
        <Box direction="row">
          <Box pad="small">
            <TextInput
              placeholder="type here.."
              value={props.newItemText}
              onChange={e => props.updateNewTextValue(e)}
            />
          </Box>
          <Box pad="small">
            <Button
              onClick={props.createNewTodo}
              type="button"
              label="Add"
              primary
              color="brand"
              style={{
                color: `${theme.button.text.color}`,
              }}
            />
          </Box>
        </Box>
        <div>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{props.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
    </Box>
  );
};

export default Content;
