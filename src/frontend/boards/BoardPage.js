import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import RequirementsPageContainer from '../requirements/RequirementsPageContainer';
import ChatPageContainer from '../chat/ChatPageContainer';
import IssuesPageContainer from '../issues/IssuesPageContainer';
import Row from '../common/Row';


const _style = {
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 32,
  },
};


const BoardPage = props => {
  const { project, board } = props;
  const [tabValue, setTabValue] = useState(0);
  return (
    <div>
      <Row>
        <div style={_style.tabs}>
          <Paper square style={{ width: 500 }}>
            <Tabs value={tabValue} centered onChange={(e, value) => setTabValue(value)}>
              <Tab label="Requirements" />
              <Tab label="Chat" />
              <Tab label="Issues" />
            </Tabs>
          </Paper>
        </div>
      </Row>
      {tabValue === 0 && <RequirementsPageContainer project={project} board={board} />}
      {tabValue === 1 && <ChatPageContainer />}
      {tabValue === 2 && <IssuesPageContainer project={project} board={board} />}
    </div>
  );
};

BoardPage.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default BoardPage;
