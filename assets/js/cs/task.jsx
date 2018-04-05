import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function Task(params) {
  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p>{ task.title }</p>
        <p>{ task.body }</p>
        <p>{ task.length }</p>
        <p>{ task.complete }</p>
      </div>
    </CardBody>
  </Card>;
}
