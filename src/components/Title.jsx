import React from 'react';
import { Link } from '@reach/router';

export default function Title({ userName }) {
  return (
    <>
      <Link to="/" className="homeNav">
        <h1 className="header">NC News</h1>
      </Link>
      <p className="greeting">Hey {userName}</p>
    </>
  );
}
