import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import LoggedInMenu from 'components/logged-in-menu';
import LoggedOutMenu from 'components/logged-out-menu';

export default class Topbar extends React.Component {
  loggedIn() {
    return true;
  }

  render() {
    var UserMenu = this.loggedIn() ? LoggedInMenu : LoggedOutMenu;

    return (
      <Navbar staticTop>
        <UserMenu />
      </Navbar>
    )
  }
}
