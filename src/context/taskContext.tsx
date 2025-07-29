import React from 'react';
import type { TaskContextType, ITask } from '/src/@customTypes/task';

export const TaskContext = React.createContext<TaskContextType | null>(null);

const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //немного разбавим задание песнями^.^
  const [tasks, setTasks] = React.useState<ITask[]>([
    {
      id: '1',
      title: 'Walking on water',
      description:
        "Crashing waves, but I'll never fall, Everyday, supernatural, Thrashing rain, I'ma bring the storm, This my stage, walkin' on water, Water, water, walkin' on, Water, water, walk it off, Water, water, walkin' on, This my stage, my stage",
      tags: {
        category: 'Documentation',
        status: 'Done',
        priority: 'Medium',
      },
    },
    {
      id: '2',
      title: 'Not today',
      description:
        'All the underdogs in the world A day may come when we lose But it is not today Today we fight!',
      tags: {
        category: 'Documentation',
        status: 'Done',
        priority: 'Medium',
      },
    },
    {
      id: '3',
      title: 'Thunderous',
      description: 'Why you mad? Why you sad?',
      tags: {
        category: 'Documentation',
        status: 'Done',
        priority: 'Medium',
      },
    },
    {
      id: '4',
      title: 'Ghost',
      description:
        "I feel like I'm in a broken dream I close my eyes Every night",
      tags: {
        category: 'Documentation',
        status: 'Done',
        priority: 'Medium',
      },
    },
    {
      id: '5',
      title: 'Fantasia',
      description:
        'Fantasia, fantasia, I gotta feel something for real. Fantastic, that`s me `cause I slay. Top of the top, my level is A',
      tags: {
        category: 'Feature',
        status: 'Done',
        priority: 'High',
      },
    },
    {
      id: '6',
      title: 'Nillili Mambo',
      description:
        'Haha, yeah, BBC, follow me, Bounce like this, eh, eh, Bounce like Block B in the house, Z and Pop Time music is officially over now, Bye guys, hi ladies',
      tags: {
        category: 'Documentation',
        status: 'Done',
        priority: 'Medium',
      },
    },
  ]);

  const updateTask = (task: ITask | any) => {
    console.log('Task id:', task.id);
    tasks.filter((task_: ITask) => {
      if (task_.id == task.id) {
        console.log('Received values in context:', task.title);
        console.log('Received values in context (category):', task.category);
        task_.title = task.title;
        task_.description = task.description;
        task_.tags.category = task.category;
        task_.tags.priority = task.priority;
        task_.tags.status = task.status;
        setTasks([...tasks]);
        console.log('After set funtion: ', task_.tags.category);
      }
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
