import React from 'react';
import { DropdownMenu } from 'react-bootstrap';

export default class LoggedInMenu extends React.Component {
  render() {
    return (
      <ul className="nav navbar-nav">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">{this.props.user.username}</a>
          <DropdownMenu>
            <li><a href="#">Profile</a></li>
          </DropdownMenu>
        </li>
      </ul>
    )
  }
}
