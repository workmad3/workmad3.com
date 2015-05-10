import React from 'react';
import { DropdownMenu } from 'react-bootstrap';

export default class LoggedOutMenu extends React.Component {
  render() {
    return (
      <ul className="nav navbar-nav">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Please log in</a>
        </li>
      </ul>
    )
  }
}
