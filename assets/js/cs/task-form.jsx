import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';

export default function TaskForm(params) {
  let users = _.map(params.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
  return (
    <div style={{padding: "ex"}}>
      <h2>Create a new task</h2>
      <FormGroup>
        <Label for="user_id">User</Label>
        <Input type="select" name="user_id">
          { users }
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="title">Task Name</Label>
        <Input name="title" />
      </FormGroup>
      <FormGroup>
        <Label for="body">Description</Label>
        <Input type="textarea" name="body" />
      </FormGroup>
      <FormGroup>
        <Label for="length">Length</Label>
        <Input type="number" name="length" />
      </FormGroup>
      <FormGroup>
        <Label for="complete">Complete</Label>
        <Input type="checkbox" name="complete" />
      </FormGroup>
      <Button>Create</Button>
    </div>
  );
}
