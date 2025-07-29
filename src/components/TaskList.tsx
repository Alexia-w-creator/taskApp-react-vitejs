import React from 'react';
import TaskItem from './TaskItem.tsx';
import { Flex } from 'antd';
import type { TaskContextType, ITask } from '/src/@customTypes/task';
import { TaskContext } from '../context/taskContext';

function TaskList() {
  const { tasks } = React.useContext(TaskContext) as TaskContextType;
  return (
    <>
      <Flex wrap justify="center" gap="small">
        {tasks.map((task_: ITask) => (
          <TaskItem key={task_.id} task={task_} />
        ))}
      </Flex>
    </>
  );
}

export default TaskList;
