import { Button, Form, Input, Select, Space } from 'antd';
import type { TaskContextType, ITask } from '/src/@customTypes/task';
import { Link } from 'react-router-dom';
import React from 'react';
import { TaskContext } from '../context/taskContext';

type Props = {
  task: ITask;
};

const TaskDetails: React.FC<Props> = ({ task }) => {
  const [form] = Form.useForm();
  const { updateTask } = React.useContext(TaskContext) as TaskContextType;

  const handleUpdateTask = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Received values:', values);
        updateTask(values);
      })
      .catch((errorInfo) => {
        console.log('Validation Failed:', errorInfo);
      });
  };
  return (
    <>
      <Form
        form={form}
        labelCol={{ flex: '85px' }}
        labelAlign="left"
        variant="filled"
        initialValues={{
          variant: 'filled',
          id: task.id,
          title: task.title,
          description: task.description,
          category: task.tags.category,
          status: task.tags.status,
          priority: task.tags.priority,
        }}
      >
        <Form.Item name="id" />
        <Form.Item name="title" label="Название">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Описание">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Категория" name="category">
          <Select
            options={[
              { value: 'Bug', label: 'Bug' },
              { value: 'Feature', label: 'Feature' },
              { value: 'Documentation', label: 'Documentation' },
              { value: 'Refactor', label: 'Refactor' },
              { value: 'Test', label: 'Test' },
            ]}
          />
        </Form.Item>
        <Form.Item label="Приоритет" name="priority">
          <Select
            options={[
              { value: 'Low', label: 'Low' },  
              { value: 'Medium', label: 'Medium' },
              { value: 'High', label: 'High' },
            ]}
          />
        </Form.Item>
        <Form.Item label="Статус" name="status">
          <Select
            options={[
              { value: 'To Do', label: 'To Do' },
              { value: 'In Progress', label: 'In Progress' },
              { value: 'Done', label: 'Done' },
            ]}
          />
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          <Space size="small">
            <Link to="/">
              <Button>Отмена</Button>
            </Link>

            <Link to="/">
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleUpdateTask}
              >
                Сохранить
              </Button>
            </Link>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default TaskDetails;
