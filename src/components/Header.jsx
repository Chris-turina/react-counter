import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>This is a Counter</h1>
      <Link to='/'>Home</Link> | <Link to='/form'>Add New Post</Link>      
    </div>
  );
}

export default Header;
