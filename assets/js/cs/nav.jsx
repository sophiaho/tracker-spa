import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

export default function Nav(props) {
  return (
    <nav className="navbar navbar-dark navbar-expand"
      style={{backgroundColor: "#2F4F4F"}}>
      <ul className="navbar-nav mr-auto">
      <NavItem>
        <NavLink to="/" exact={true} activeClassName="active" className="nav-link navbar-brand"
          >Task Tracker</NavLink>
      </NavItem>
        <NavItem>
          <NavLink to="/list" href="#" className="nav-link">Task List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/users" href="#" className="nav-link">All Users</NavLink>
        </NavItem>
      </ul>
      <span className="navbar-text">
        user@host
      </span>
    </nav>
  );
}
