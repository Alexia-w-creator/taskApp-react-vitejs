import Title from 'antd/es/typography/Title';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link to="/">
        <Title className="title" level={2}>
          Task list
        </Title>
      </Link>
    </>
  );
}

export default Header;
