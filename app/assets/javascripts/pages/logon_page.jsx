import React from 'react';
import LogonForm from 'components/logon_form';
import Application from 'layouts/application';

export default class LogonPage extends React.Component {
  render() {
    return (
      <Application>
        <LogonForm />
      </Application>
    )
  }
}
