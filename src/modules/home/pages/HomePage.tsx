import React from 'react';
import { Link } from 'react-router-dom';

// interface Props {}

const HomePage = () => {
  return (
    <>
      <title>Trang chủ</title>
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>HomePage</div>
      <h2>
        <Link to="/listItem">Admin</Link>
      </h2>
    </>
  );
};

export default HomePage;
