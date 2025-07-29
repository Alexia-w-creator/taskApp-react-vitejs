export interface ITask {
  id: string;
  title: string;
  description: string;
  tags: {
    category: string;
    status: string;
    priority: string;
  };
}
export type TaskContextType = {
  tasks: ITask[];
  updateTask: (task: ITask) => void;
};
