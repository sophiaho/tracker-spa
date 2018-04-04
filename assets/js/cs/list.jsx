import React from 'react';
import ReactDOM from 'react-dom';

import Task from './task';

export default function List(params) {
  let tasks = _.map(params.tasks, (pp) => <Task key={pp.id} task={pp} />);
  return <div>
    { tasks }
  </div>;
}
