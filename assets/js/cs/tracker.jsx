import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import TaskForm from './task-form';
import List from './list';
import User from './user';

// ATTRIBUTION: react code and set up steps based off of Professor Tuck's
// 4550 lecture notes

export default function tracker_init() {
  let root = document.getElementById('root');
  ReactDOM.render(<Tracker />, root);
}

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
            <Route path="/" exact={true} render={() =>
              <div>
                <List tasks={this.state.posts} />
              </div>
            } />
          <Route path="/list" exact={true} render={() =>
              <TaskForm users={this.state.users} />
            } />
            <Route path="/users" exact={true} render={() =>
              <Users users={this.state.users} />
            } />
            <Route path="/users/:user_id" render={({match}) =>
              <List tasks={_.filter(this.state.posts, (pp) =>
                match.params.user_id == pp.user.id )
              } />
            } />
        </div>
      </Router>
    );
  }
}
