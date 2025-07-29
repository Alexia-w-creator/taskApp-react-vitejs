import { EditOutlined } from "@ant-design/icons";
import { Card, Tag, Tooltip } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import type { ITask } from "/src/@customTypes/task";
import { Link } from "react-router-dom";

type Props = {
  task: ITask;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <>
      <Card
        title={task.title}
        style={{ width: 300 }}
        extra={
          <>
            <Tooltip title="edit">
              <Link to={"/task/" + task.id}>
                <EditOutlined />
              </Link>
            </Tooltip>
          </>
        }
      >
        <Paragraph>{task.description}</Paragraph>
        <Tag color="magenta">{task.tags.category}</Tag>
        <Tag color="red">{task.tags.priority}</Tag>
        <Tag color="blue">{task.tags.status}</Tag>
      </Card>
    </>
  );
};

export default TaskItem;
