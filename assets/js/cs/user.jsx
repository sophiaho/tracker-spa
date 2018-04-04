import React from 'react';
import { Link } from 'react-router-dom';

function User(params) {
  return <p>{params.user.name} - <Link to={"/users/" + params.user.id}>tasks</Link></p>;
}

export default function User(params) {
  let users = _.map(params.users, (uu) => <User key={uu.id} user={uu} />);
  return <div>
    { users }
  </div>;
}
