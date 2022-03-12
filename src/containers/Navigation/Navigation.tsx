import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <Navbar>
      <Link to='/'>
        <Button variant='primary'>Main</Button>
      </Link>
    </Navbar>
  );
};
