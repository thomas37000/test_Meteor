import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/TasksCollection';
import { Task } from './Task';

export const Info = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  return (
    <div>
      <h2>Learn Meteor!</h2>
      {/* <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul> */}
    </div>
  );
};
