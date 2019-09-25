import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { Segment, Message } from 'semantic-ui-react';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <Segment key={alert.id}>
        <Message error header='Error!' content={alert.msg} />
      </Segment>
    ))
  );
};

export default Alerts;
