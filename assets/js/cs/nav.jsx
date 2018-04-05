import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { connect } from 'react-redux';
import api from '../api';

let LoginForm = connect(({login}) => {return {login};})((props) => {
  function update(ev) {
    let tgt = $(ev.target);
    let data = {};
    data[tgt.attr('name')] = tgt.val();
    props.dispatch({
      type: 'UPDATE_LOGIN_FORM',
      data: data,
    });
  }

  function create_token(ev) {
    api.submit_login(props.login);
    console.log(props.login);
  }

  return <div className="navbar-text">
    <Form inline>
      <FormGroup>
        <Input type="text" name="name" placeholder="name"
             value={props.login.name} onChange={update} />
         </FormGroup>
         <FormGroup>
           <Input type="password" name="pass" placeholder="password"
              value={props.login.pass} onChange={update} />
          </FormGroup>
          <Button onClick={create_token}>Log In</Button>
        </Form>
      </div>;
    });

let Session = connect(({token}) => {return {token};})((props) => {
  return <div className="navbar-text">
    User id = { props.token.user_id }
  </div>;
});

function Nav(props) {
  let session_info;

  if (props.token) {
    session_info = <Session token={props.token} />;
  }
  else {
    session_info = <LoginForm />
  }
  
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

function state2props(state) {
  return {
    token: state.token,
  };
}

export default connect(state2props)(Nav);
