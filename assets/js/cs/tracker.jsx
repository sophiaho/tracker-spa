import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Nav from './nav';
import TaskForm from './task-form';
import List from './list';
import Users from './user';

// ATTRIBUTION: react code and set up steps based off of Professor Tuck's
// 4550 lecture notes for single page applications and use of redux

export default function tracker_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <Tracker state={store.getState()} />
    </Provider>,
    document.getElementById('root'),
  );
}


let Tracker = connect((state) => state)((props) => {
    return (
      <Router>
        <div>
          <Nav />
            <Route path="/" exact={true} render={() =>
              <div>
                <TaskForm />
              </div>
            } />
          <Route path="/list" exact={true} render={() =>
              <List tasks={props.tasks} />
            } />
            <Route path="/users" exact={true} render={() =>
              <Users users={props.users} />
            } />
            <Route path="/users/:user_id" render={({match}) =>
              <List tasks={_.filter(props.tasks, (pp) =>
                match.params.user_id == pp.user.id )
              } />
            } />
        </div>
      </Router>
    );
  });
