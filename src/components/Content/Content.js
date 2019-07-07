import React from 'react';

import { Box } from 'grommet';

const Content = props => {
  return (
    <Box flex align="center" justify="center">
      <div>
        <div>
          <input
            type="input"
            value={props.newItemText}
            onChange={e => props.updateNewTextValue(e)}
          />
          <button onClick={props.createNewTodo} type="button">
            Add
          </button>
        </div>
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
