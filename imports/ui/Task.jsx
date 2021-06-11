import React from 'react';

export const Task = ({ task }) => {
  return (
    <li>
      {task.text} {task.title} {task.url}
    </li>
  );
};
